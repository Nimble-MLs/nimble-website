import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_SUBMIT_MS = 2000;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
// message cap matches Discord's embed field value limit
const MAX_LENGTHS = { name: 200, email: 254, message: 1024 };
const RECAPTCHA_SCORE_THRESHOLD = 0.5;
const RECAPTCHA_ACTION = "contact";

// Best-effort only: each Cloud Run instance has its own memory, so this is
// not a hard limit across instances.
const rateLimitStore = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (rateLimitStore.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  rateLimitStore.set(ip, recent);
  return recent.length > RATE_LIMIT_MAX_REQUESTS;
}

function getClientIp(request: NextRequest): string {
  // Cloud Run's front end appends the real connecting peer's IP as the LAST
  // entry in X-Forwarded-For. Taking the FIRST entry lets a spammer defeat
  // the rate limit by spoofing a fresh fake IP on every request.
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (!forwardedFor) return "unknown";
  const ips = forwardedFor.split(",").map((ip) => ip.trim()).filter(Boolean);
  return ips[ips.length - 1] ?? "unknown";
}

async function verifyRecaptchaToken(token: string, ip: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) return false;
  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    // Google's endpoint requires form-urlencoded, not JSON
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret: secretKey, response: token, remoteip: ip }),
  });
  const result = (await response.json()) as { success: boolean; score?: number; action?: string };
  return result.success && result.action === RECAPTCHA_ACTION && (result.score ?? 0) >= RECAPTCHA_SCORE_THRESHOLD;
}

async function deliverToDiscord(name: string, email: string, message: string): Promise<void> {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  if (!webhookUrl) throw new Error("DISCORD_WEBHOOK_URL is not configured");

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      content: "Received contact form submission on nimble.kiwi",
      // Don't let submitted text ping @everyone / roles / users
      allowed_mentions: { parse: [] },
      embeds: [
        {
          fields: [
            { name: "Name", value: name },
            { name: "Email", value: email },
            { name: "Message", value: message },
          ],
        },
      ],
    }),
  });
  if (!response.ok) throw new Error(`Discord delivery failed: ${response.status}`);
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many submissions. Please try again later." }, { status: 429 });
  }

  const body = await request.json().catch(() => null);
  if (!body) return NextResponse.json({ error: "Invalid request body." }, { status: 400 });

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();
  const honeypot = String(body.honeypot ?? "").trim();
  const renderedAt = Number(body.renderedAt ?? 0);
  const recaptchaToken = String(body.recaptchaToken ?? "");

  if (honeypot) return NextResponse.json({ error: "Submission rejected." }, { status: 400 });
  if (!renderedAt || Date.now() - renderedAt < MIN_SUBMIT_MS) {
    return NextResponse.json({ error: "Submission rejected." }, { status: 400 });
  }
  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
  }
  if (name.length > MAX_LENGTHS.name || email.length > MAX_LENGTHS.email || message.length > MAX_LENGTHS.message) {
    return NextResponse.json({ error: "One of the fields is too long." }, { status: 400 });
  }
  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  if (!recaptchaToken || !(await verifyRecaptchaToken(recaptchaToken, ip))) {
    return NextResponse.json({ error: "Bot verification failed." }, { status: 400 });
  }

  try {
    await deliverToDiscord(name, email, message);
  } catch (error) {
    console.error("Error delivering contact form:", error);
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
