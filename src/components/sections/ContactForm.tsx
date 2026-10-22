"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, opts: { action: string }) => Promise<string>;
    };
  }
}

const RECAPTCHA_ACTION = "contact";

// Tokens expire after ~2 minutes, so fetch a fresh one right before each submit.
function getRecaptchaToken(siteKey: string): Promise<string> {
  return new Promise((resolve) => {
    if (!siteKey || !window.grecaptcha) return resolve("");
    window.grecaptcha.ready(() => {
      window.grecaptcha!.execute(siteKey, { action: RECAPTCHA_ACTION }).then(resolve).catch(() => resolve(""));
    });
  });
}

export default function ContactForm({ recaptchaSiteKey }: { recaptchaSiteKey: string }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [honeypot, setHoneypot] = useState("");
  const [renderedAt, setRenderedAt] = useState(0);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    setRenderedAt(Date.now());
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      const recaptchaToken = await getRecaptchaToken(recaptchaSiteKey);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, honeypot, renderedAt, recaptchaToken }),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => null);
        throw new Error(result?.error ?? "Failed to send message. Please try again.");
      }

      setSuccess("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="max-w-5xl mx-auto p-8 space-y-6">
      {recaptchaSiteKey && (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`}
          strategy="afterInteractive"
        />
      )}
      <h2 className="pageHeader">Contact Us</h2>
      <div className="flex justify-center items-center flex-col">
        <form
          className="w-3/4"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <label htmlFor="name" className="block mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            maxLength={200}
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 mb-4"
          />

          <label htmlFor="email" className="block mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            maxLength={254}
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 mb-4"
          />

          <label htmlFor="message" className="block mb-2">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            maxLength={1024}
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 mb-4"
          />

          {/* Honeypot: hidden from people, but naive bots fill it in */}
          <div className="absolute -left-[10000px] w-px h-px overflow-hidden" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input
              type="text"
              id="website"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          <p className="text-xs opacity-60 mt-4">
            This site is protected by reCAPTCHA and the Google{" "}
            <a href="https://policies.google.com/privacy" className="underline" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="https://policies.google.com/terms" className="underline" target="_blank" rel="noopener noreferrer">
              Terms of Service
            </a>{" "}
            apply.
          </p>
        </form>

        {error && <p className="text-red-500 mt-4">{error}</p>}
        {success && <p className="text-green-500 mt-4">{success}</p>}
      </div>
    </section>
  );
}
