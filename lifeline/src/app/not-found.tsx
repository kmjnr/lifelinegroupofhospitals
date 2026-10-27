import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  // Template appends the site name — keep this absolute-free to avoid doubling.
  title: "Page Not Found",
  description:
    "The page you are looking for could not be found. Explore our clinics, hospital services, or contact our team in Kahawa Wendani and Membley, Nairobi.",
  robots: { index: false, follow: true },
};

const LINKS = [
  { href: "/clinics", label: "Our Clinics", desc: "ENT, cardiac, dental, eye care, paediatrics, orthopaedics and physiotherapy." },
  { href: "/services", label: "Hospital Services", desc: "24/7 emergency, ICU, laboratory, radiology, pharmacy, maternity and more." },
  { href: "/contact", label: "Contact & Appointments", desc: "Book an appointment or reach our emergency line any time." },
  { href: "/blog", label: "Health Blog", desc: "Plain-language guides from our clinical team." },
];

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-4 py-20 text-center sm:py-28">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Error 404</p>
      <h1 className="font-display text-display font-bold text-navy">
        This page could not be found
      </h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink">
        The link may be outdated or mistyped. Our team is available 24/7 — use the
        options below to find the care or information you need.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="focus-ring inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white transition hover:bg-primary-dark"
        >
          Back to Home
        </Link>
        <Link
          href="/contact"
          className="focus-ring inline-flex h-12 items-center justify-center rounded-full border border-primary px-8 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
        >
          Book an Appointment
        </Link>
      </div>
      <div className="mt-12 grid w-full gap-4 text-left sm:grid-cols-2">
        {LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="focus-ring group rounded-2xl border border-border-soft bg-white p-5 transition hover:border-primary hover:shadow-card"
          >
            <p className="font-display text-base font-semibold text-navy group-hover:text-primary">
              {l.label} →
            </p>
            <p className="mt-1 text-[15px] leading-relaxed text-ink-muted">{l.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
