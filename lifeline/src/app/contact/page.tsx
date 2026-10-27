import type { Metadata } from "next";
import {
  BRANCHES,
  EMAIL,
  PHONES,
  POSTAL,
  SITE_NAME,
  WHATSAPP_HREF,
} from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { CONTACT_FAQS } from "@/content/faqs";
import { JsonLd } from "@/components/shared/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { FaqSection } from "@/components/shared/FaqSection";
import { AppointmentForm } from "@/components/shared/AppointmentForm";
import { ButtonLink } from "@/components/shared/Button";
import {
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  WhatsappIcon,
} from "@/components/shared/icons";

export const metadata: Metadata = {
  ...buildMetadata({
    path: "/contact",
    title: "Contact & Branches — Lifeline Group of Hospitals Nairobi",
    description:
      "Reach Lifeline: Kahawa Wendani (Thika Super Hwy, opp. Kahawa Barracks) & Membley, Nairobi. Open 24 hrs. +254 711 420 359 · info@thelifelinegroupofhospitals.org",
  }),
};

const quickChannels = [
  {
    icon: PhoneIcon,
    label: "Call us — 24 hours",
    lines: [PHONES.primary, PHONES.secondary],
    hrefs: [PHONES.primaryHref, PHONES.secondaryHref],
  },
  {
    icon: MailIcon,
    label: "Email us",
    lines: [EMAIL],
    hrefs: [`mailto:${EMAIL}`],
  },
  {
    icon: WhatsappIcon,
    label: "WhatsApp",
    lines: ["Message us anytime"],
    hrefs: [WHATSAPP_HREF],
  },
  {
    icon: ClockIcon,
    label: "Opening hours",
    lines: ["Open 24 hours, every day"],
    hrefs: [],
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact Us", path: "/contact" },
        ])}
      />
      <JsonLd data={faqSchema(CONTACT_FAQS)} />

      <section className="gradient-soft border-b border-border-soft">
        <div className="mx-auto max-w-6xl px-4 pb-12 pt-8 sm:px-6 lg:px-6">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Contact Us", path: "/contact" }]} />
          <div className="max-w-3xl">
            <h1 className="mt-5 font-display text-balance text-display font-bold tracking-tight text-ink">
              Make an <span className="text-primary">Appointment</span>
            </h1>
            <p className="mt-4 max-w-[56ch] text-lg leading-relaxed text-ink">
              Whatever you need — an appointment, an emergency, or just
              directions — {SITE_NAME} is here 24 hours. Fill in the form and our
              team will call you to confirm.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        {/* max-w-6xl matches the sitewide container; grid-cols-1 (minmax(0,1fr)) —
            native selects have a large intrinsic width and an implicit auto track
            would size to it and overflow ~320px screens. */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_380px]">
          {/* Form */}
          <div className="min-w-0">
            <h2 className="font-display text-2xl font-bold text-ink">Book an appointment</h2>
            <p className="mb-6 mt-2 text-[15px] text-ink-muted">
              Fields marked <span className="text-danger" aria-hidden>*</span> are required.
            </p>
            <AppointmentForm />
          </div>

          {/* Contact info sidebar */}
          <aside className="flex min-w-0 flex-col gap-5">
            <div className="rounded-3xl gradient-navy p-7 text-white">
              <h2 className="font-display text-xl font-bold">Reach Out to Us</h2>
              <ul className="mt-5 flex flex-col gap-4 text-sm">
                {quickChannels.map(({ icon: Icon, label, lines, hrefs }) => (
                  <li key={label} className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span>
                      <span className="block font-bold">{label}</span>
                      {lines.map((line, i) =>
                        hrefs[i] ? (
                          <a
                            key={line}
                            href={hrefs[i]}
                            {...(hrefs[i].startsWith("http")
                              ? { target: "_blank", rel: "noopener noreferrer" }
                              : {})}
                            className="block [overflow-wrap:anywhere] text-on-dark-muted hover:text-white focus-ring rounded"
                          >
                            {line}
                          </a>
                        ) : (
                          <span key={line} className="block text-on-dark-muted">
                            {line}
                          </span>
                        ),
                      )}
                    </span>
                  </li>
                ))}
                <li className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <MapPinIcon className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block font-bold">Postal address</span>
                    <span className="block text-on-dark-muted">{POSTAL}</span>
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-[#e23d3d]/25 bg-[#e23d3d]/5 p-6">
              <h2 className="font-display text-lg font-bold text-ink">Having an Emergency?</h2>
              <p className="mt-1.5 text-[15px] leading-relaxed text-ink-muted">
                Do not wait for a form reply — call our 24-hour emergency line now.
              </p>
              <ButtonLink href={PHONES.primaryHref} variant="emergency" className="mt-4 w-full">
                <PhoneIcon className="h-4 w-4" aria-hidden />
                {PHONES.primary}
              </ButtonLink>
            </div>
          </aside>
        </div>
      </section>

      {/* Branches with maps */}
      <section className="bg-surface px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-heading font-bold text-ink">
              Visit Us in Nairobi
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {BRANCHES.map((branch) => (
              <article
                key={branch.id}
                className="flex flex-col overflow-hidden rounded-3xl border border-border-soft bg-white shadow-[var(--shadow-card)]"
              >
                <iframe
                  src={branch.mapEmbedUrl}
                  title={`Map: ${branch.name}, ${branch.area}`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-60 w-full border-0"
                />
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-lg font-bold text-ink">{branch.name}</h3>
                    <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-accent/10 px-2.5 py-1 text-[13px] font-bold text-[#149583]">
                      <ClockIcon className="h-3 w-3" aria-hidden />
                      Open 24 Hours
                    </span>
                  </div>
                  <p className="flex items-start gap-2 text-[15px] leading-relaxed text-ink-muted">
                    <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                    {branch.address}
                  </p>
                  <p className="flex items-center gap-2 text-sm text-ink-muted">
                    <PhoneIcon className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                    <a href={branch.phoneHref} className="whitespace-nowrap font-semibold text-ink hover:text-primary focus-ring rounded">
                      {branch.phone}
                    </a>
                  </p>
                  <div className="mt-auto flex flex-wrap gap-3 pt-3">
                    <ButtonLink href={branch.directionsUrl} variant="outline" size="sm">
                      Get Directions
                    </ButtonLink>
                    <ButtonLink href={branch.phoneHref} size="sm">
                      <PhoneIcon className="h-4 w-4" aria-hidden />
                      Call This Branch
                    </ButtonLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FaqSection faqs={CONTACT_FAQS} />
    </>
  );
}
