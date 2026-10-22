import ContactForm from "@/components/sections/ContactForm";

// The reCAPTCHA site key is only injected into the Cloud Run container at
// runtime, so this page must render per-request rather than being
// prerendered at build time with an empty key.
export const dynamic = "force-dynamic";

export default function Contact() {
  return <ContactForm recaptchaSiteKey={process.env.RECAPTCHA_SITE_KEY ?? ""} />;
}
