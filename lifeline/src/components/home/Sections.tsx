import Image from "next/image";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ButtonLink } from "@/components/shared/Button";
import { ServiceCardLink } from "@/components/shared/ServiceCardLink";
import { VideoEmbed } from "@/components/shared/VideoEmbed";
import { asset } from "@/lib/assets";
import { SERVICES } from "@/content/services";
import { BRANCHES } from "@/content/site";
import { TESTIMONIALS, TESTIMONIALS_DISCLAIMER } from "@/content/faqs";
import {
  ArrowRightIcon,
  AwardIcon,
  CalendarIcon,
  CheckIcon,
  ClockIcon,
  MapPinIcon,
  PhoneIcon,
  StarIcon,
  UsersIcon,
} from "@/components/shared/icons";

/* ---------------------------------- Services grid ---------------------------------- */

const HOME_SERVICE_CARDS = [
  ...SERVICES.slice(0, 5).map((s) => ({
    title: s.name,
    blurb: s.heroLine,
    href: `/services/${s.slug}`,
    imageKey: s.imageKey,
  })),
  {
    title: "Specialty Clinics",
    blurb: "ENT, cardiac, dental, eye care, pediatrics, orthopedic and physiotherapy.",
    href: "/clinics",
    imageKey: "clinics-hub",
  },
  ...SERVICES.slice(5, 8).map((s) => ({
    title: s.name,
    blurb: s.heroLine,
    href: `/services/${s.slug}`,
    imageKey: s.imageKey,
  })),
];

export function HomeServicesGrid() {
  return (
    <section className="bg-surface px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title="Comprehensive Care for Your Whole Family"
          sub="From 24/7 emergency response and intensive care to diagnostics, maternity and seven specialty clinics — inpatient and outpatient, day and night."
          action={
            <ButtonLink href="/services" variant="outline" size="sm">
              View all services
              <ArrowRightIcon className="h-4 w-4" aria-hidden />
            </ButtonLink>
          }
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {HOME_SERVICE_CARDS.map((card, i) => (
            <ServiceCardLink
              key={card.href}
              {...card}
              tint={(["blue", "teal", "amber", "rose"] as const)[i % 4]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- Why us split ---------------------------------- */

export function WhyUs() {
  const bullets = [
    "State-of-the-art laboratory and imaging: X-ray, CT, MRI and ultrasound",
    "Experienced doctors, nurses and specialists across 7 specialty clinics",
    "Emergency ambulances and an ER staffed 24 hours a day",
    "Affordable, transparent care for individuals and corporate clients",
  ];
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeader
            title="Your Trusted Healthcare Partner"
            sub="Lifeline combines advanced medical technology with a compassionate, multidisciplinary team — the Level-5 standard of care Nairobi has known since 2005."
            align="left"
          />
          <ul className="mt-8 flex flex-col gap-4">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-[#149583]">
                  <CheckIcon className="h-4 w-4" aria-hidden />
                </span>
                <span className="text-[15px] font-medium leading-relaxed text-ink">{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <ButtonLink href="/about">More about us</ButtonLink>
          </div>
        </div>
        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-[var(--shadow-card-lg)]">
            <Image
              src={asset("pediatric-care")}
              alt="Doctor examining a child at The Lifeline Group of Hospitals pediatric clinic, Nairobi"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- Stats band ---------------------------------- */

export function StatsBand() {
  const stats = [
    { icon: ClockIcon, value: "24/7", label: "Open every day & night" },
    { icon: MapPinIcon, value: "2", label: "Branches: Kahawa Wendani & Membley" },
    { icon: UsersIcon, value: "16+", label: "Clinical services & clinics" },
    { icon: AwardIcon, value: "2005", label: "Serving Nairobi since" },
  ];
  return (
    <section aria-label="Lifeline at a glance" className="px-4 py-6 sm:px-6 lg:px-8">
      <div className="gradient-navy mx-auto grid max-w-6xl grid-cols-2 gap-8 rounded-[2rem] px-8 py-12 lg:grid-cols-4 lg:px-14">
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex flex-col items-center gap-2 text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
              <Icon className="h-6 w-6" aria-hidden />
            </span>
            <span className="font-display text-3xl font-extrabold text-white lg:text-4xl">{value}</span>
            <span className="text-[15px] leading-snug text-on-dark-muted">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------- Process band ---------------------------------- */

export function ProcessBand() {
  const steps = [
    {
      title: "Reach Out",
      body: "Call, WhatsApp or send the appointment form — we answer 24/7.",
    },
    {
      title: "Visit & Register",
      body: "Walk in at Kahawa Wendani or Membley; our front desk gets you seen fast.",
    },
    {
      title: "Get Diagnosed",
      body: "On-site lab and imaging (X-ray, CT, MRI, ultrasound) deliver fast results.",
    },
    {
      title: "Receive Care",
      body: "Consultation, treatment and follow-up from one coordinated team.",
    },
  ];
  return (
    <section className="bg-surface px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title="Easy Steps to Get Care at Lifeline"
          sub="Getting better should be simple. Here is how a typical visit works."
        />
        <ol className="relative mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title} className="relative flex flex-col items-center gap-3 text-center">
              {i < steps.length - 1 && (
                <span
                  aria-hidden
                  className="absolute left-[62%] top-7 hidden h-0.5 w-[76%] border-t-2 border-dashed border-primary/25 lg:block"
                />
              )}
              <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[12px] font-bold text-white">
                  {i + 1}
                </span>
                <CalendarIcon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="font-display text-[16px] font-bold text-ink">{step.title}</h3>
              <p className="max-w-[26ch] text-[15px] leading-relaxed text-ink">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------------------------- Imaging band ---------------------------------- */

export function ImagingBand() {
  return (
    <section
      aria-label="Advanced imaging technology"
      className="px-4 py-6 sm:px-6 lg:px-8"
    >
      <div className="gradient-navy relative mx-auto grid max-w-6xl items-center gap-10 overflow-hidden rounded-[2rem] px-6 py-12 sm:px-10 lg:grid-cols-2 lg:gap-14 lg:py-16">
        <div>
          <h2 className="font-display text-heading font-bold leading-tight text-white">
            Advanced Imaging for Accurate Results
          </h2>
          <p className="mt-4 max-w-[52ch] leading-relaxed text-on-dark-muted">
            Digital X-ray, CT, MRI, ultrasound and mammography — equipment that
            meets international standards, ensuring fast, reliable diagnosis for
            the best care.
          </p>
          <div className="mt-7">
            <ButtonLink href="/services/radiology" variant="on-dark">
              Explore imaging
              <ArrowRightIcon className="h-4 w-4" aria-hidden />
            </ButtonLink>
          </div>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden rounded-3xl shadow-[var(--shadow-card-lg)] lg:translate-x-4">
          <Image
            src={asset("usp-latest-tech")}
            alt="Modern imaging equipment at the Lifeline radiology unit in Nairobi"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- Video band ---------------------------------- */

export function VideoSection() {
  return (
    <section aria-label="Hospital video" className="gradient-soft px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          title="Get to Know Lifeline"
          sub="A short look inside our hospital — the facilities, the technology and the team that cares for you around the clock."
        />
        <div className="mt-12">
          <VideoEmbed
            youTubeId="WjILHS4--o0"
            title="The Lifeline Group of Hospitals — facility video"
            thumbnailAlt="Medical staff attending to patients inside The Lifeline Group of Hospitals — play the hospital video"
          />
        </div>
        <p className="mt-6 text-center text-[15px] text-ink-muted">
          Prefer to talk to us first?{" "}
          <a href="/contact" className="font-semibold text-primary hover:underline focus-ring rounded">
            Book an appointment
          </a>{" "}
          or call{" "}
          <a href="tel:+254711420359" className="font-semibold text-primary hover:underline focus-ring rounded">
            +254 711 420 359
          </a>{" "}
          — we answer 24/7.
        </p>
      </div>
    </section>
  );
}

/* ---------------------------------- Testimonials ---------------------------------- */

export function Testimonials() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title="What Our Patients Say"
          sub="Real stories from people who trust us with their health."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col gap-4 rounded-3xl border border-border-soft bg-white p-6 shadow-[var(--shadow-card)]"
            >
              <div className="flex gap-1 text-amber-400" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4" aria-hidden />
                ))}
              </div>
              <blockquote className="text-[16px] leading-relaxed text-ink">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3 pt-2">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary" aria-hidden>
                  {t.name[0]}
                </span>
                <span>
                  <span className="block text-sm font-bold text-ink">{t.name}</span>
                  <span className="block text-[13px] text-ink-muted">{t.area}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-6 text-[13px] text-ink-muted">{TESTIMONIALS_DISCLAIMER}</p>
      </div>
    </section>
  );
}

/* ---------------------------------- Locations ---------------------------------- */

export function LocationsSection() {
  return (
    <section className="bg-surface px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title="Two Branches Across Nairobi"
          sub="Open 24 hours, every day — easy to reach from anywhere along the Thika Super Highway corridor."
        />
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
                className="h-56 w-full border-0"
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
                <p className="flex items-center gap-2 text-[15px] text-ink-muted">
                  <PhoneIcon className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                  <a href={branch.phoneHref} className="whitespace-nowrap font-semibold text-ink hover:text-primary focus-ring rounded">
                    {branch.phone}
                  </a>
                </p>
                <div className="mt-auto flex flex-wrap gap-3 pt-3">
                  <ButtonLink href={branch.directionsUrl} variant="outline" size="sm">
                    Get Directions
                  </ButtonLink>
                  <ButtonLink href="/contact" size="sm">
                    Book Here
                  </ButtonLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


