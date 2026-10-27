import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { EMAIL, SITE_NAME } from "@/content/site";

export const metadata: Metadata = {
  ...buildMetadata({
    path: "/privacy",
    title: "Privacy Policy — The Lifeline Group of Hospitals",
    description:
      "How The Lifeline Group of Hospitals collects, uses and protects the personal information you share through this website.",
  }),
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Privacy Policy", path: "/privacy" }]} />
        <h1 className="font-display text-display font-bold tracking-tight text-ink">Privacy Policy</h1>
        <p className="mt-2 text-sm text-ink-muted">Last updated: October 2026</p>

        <div className="prose-lifeline mt-8 flex flex-col gap-6 text-base">
          <section>
            <h2 className="font-display text-xl font-bold text-ink">1. Who we are</h2>
            <p className="mt-2">
              {SITE_NAME} (“Lifeline”, “we”) operates this website to provide
              information about our hospital services and to receive appointment
              requests. Our facilities are located in Kahawa Wendani and Membley,
              Nairobi, Kenya.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-ink">2. What we collect</h2>
            <p className="mt-2">
              When you submit the appointment form we collect the details you
              provide: your name, email address, phone number, preferred branch,
              the service you need, any preferred date and your message. We do
              not collect special-category health data through this website, and
              we ask you not to include detailed medical information in the
              message field.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-ink">3. How we use it</h2>
            <p className="mt-2">
              We use your details solely to respond to your appointment request —
              contacting you by phone, email or WhatsApp to confirm your visit.
              We do not sell, rent or share your personal information with third
              parties for marketing.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-ink">4. Storage & retention</h2>
            <p className="mt-2">
              Appointment requests are delivered to our hospital email and kept
              only as long as needed to manage your visit, after which they are
              deleted in line with our records policy. Standard server logs
              (IP address, timestamps) are kept briefly for security.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-ink">5. Cookies & analytics</h2>
            <p className="mt-2">
              We use privacy-respecting analytics to understand how the site is
              used (aggregate, anonymized). We do not run advertising trackers.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-ink">6. Your rights</h2>
            <p className="mt-2">
              You may ask us to access, correct or delete the personal details
              you submitted at any time — email{" "}
              <a href={`mailto:${EMAIL}`} className="font-semibold text-primary hover:underline focus-ring rounded">
                {EMAIL}
              </a>{" "}
              and we will respond promptly.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-ink">7. Medical disclaimer</h2>
            <p className="mt-2">
              This website provides general information about our services and
              does not constitute medical advice, diagnosis or treatment. Always
              consult a qualified health professional. In an emergency, call
              +254 711 420 359 immediately.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
