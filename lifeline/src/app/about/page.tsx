import type { Metadata } from "next";
import Image from "next/image";
import { ABOUT_FAQS } from "@/content/faqs";
import { buildMetadata } from "@/lib/seo";
import { asset } from "@/lib/assets";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { FOUNDED_YEAR } from "@/content/site";
import { JsonLd } from "@/components/shared/JsonLd";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { FaqSection } from "@/components/shared/FaqSection";
import { CtaBand, EmergencyStrip } from "@/components/shared/CtaBand";
import {
  AwardIcon,
  CheckIcon,
  EyeIcon,
  HandshakeIcon,
  HeartIcon,
} from "@/components/shared/icons";

export const metadata: Metadata = {
  ...buildMetadata({
    path: "/about",
    title: "About Us — Lifeline Group of Hospitals, Nairobi (Est. 2005)",
    description:
      "A Level-5 private hospital group in Nairobi since 2005. Our story, vision, mission, leadership and commitment to affordable, quality Kenyan healthcare.",
  }),
};

const milestones = [
  { year: "2005", text: "Founded as Estate Medical Clinic Limited" },
  { year: "2006", text: "Renamed Health Care Nursing Home Limited" },
  { year: "2009", text: "Became Kahawa Wendani Hospital" },
  { year: "Today", text: "The Lifeline Group of Hospitals — 2 branches, 16+ services" },
];

const values = [
  {
    icon: HeartIcon,
    title: "Compassion",
    body: "Treat with love — every patient, every shift, every ward.",
  },
  {
    icon: AwardIcon,
    title: "Excellence",
    body: "World-class technology and an excellent clinical team.",
  },
  {
    icon: EyeIcon,
    title: "Accessibility",
    body: "Affordable, quality care that is easy to reach — 24 hours a day.",
  },
  {
    icon: CheckIcon,
    title: "Integrity",
    body: "Trustworthy, high-quality service our patients can rely on.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" },
        ])}
      />
      <JsonLd data={faqSchema(ABOUT_FAQS)} />

      {/* Hero */}
      <section className="gradient-soft border-b border-border-soft">
        <div className="mx-auto max-w-6xl px-4 pb-14 pt-8 sm:px-6 lg:px-6 lg:pb-20">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "About Us", path: "/about" }]} />
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h1 className="font-display text-balance text-display-long font-bold tracking-tight text-ink">
                Caring for Nairobi <span className="text-primary">Since {FOUNDED_YEAR}</span>
              </h1>
              <p className="mt-4 max-w-[52ch] text-lg leading-relaxed text-ink">
                From a single medical clinic to a Level-5 hospital group with two
                branches — our story is Nairobi&apos;s story.
              </p>
            </div>
            <div className="flex h-[420px] items-end justify-center overflow-hidden rounded-3xl border border-border-soft bg-surface shadow-[var(--shadow-card-lg)] lg:h-[560px]">
              <Image
                src={asset("director-cutout")}
                alt="Portrait of the director of The Lifeline Group of Hospitals, Nairobi"
                width={320}
                height={638}
                priority
                sizes="(max-width: 1024px) 60vw, 320px"
                className="h-full w-auto object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our story */}
      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader title="From One Clinic to a Hospital Group" align="left" />
          <div className="mt-6 max-w-[72ch]">
            <p className="text-[16px] leading-relaxed text-ink">
              The Lifeline Group of Hospitals is a health center of excellence
              which seeks to transform patient care delivery. A duly incorporated
              Kenyan company (Companies Act, Cap 486), we began in {FOUNDED_YEAR}{" "}
              as Estate Medical Clinic Limited, became Health Care Nursing Home
              in 2006, then Kahawa Wendani Hospital in 2009 — and today operate
              as The Lifeline Group of Hospitals with branches in Kahawa Wendani
              and Membley, Nairobi.
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-ink">
              We are a Level-5 institution with a multidisciplinary team
              committed to delivering the best patient care possible, on a
              24-hour basis. We believe in investing in the right technology to
              improve clinical outcomes and enhance service delivery — with male,
              female and pediatric wards for the inpatient care our patients
              occasionally need.
            </p>
          </div>

          {/* Timeline */}
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {milestones.map((m, i) => (
              <li
                key={m.year}
                className="relative rounded-3xl border border-border-soft bg-white p-6 shadow-[var(--shadow-card)]"
              >
                <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">
                  {m.year}
                </span>
                <span className="mt-2 block text-[15px] font-semibold leading-relaxed text-ink">
                  {m.text}
                </span>
                <span className="mt-3 block text-[13px] text-ink-muted">Step {i + 1} of 4</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="bg-surface px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title="Our Vision, Mission & Values"
            sub="The commitments behind every consultation, diagnosis and ward round at Lifeline."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <article className="rounded-3xl gradient-navy p-8 text-white">
              <h3 className="flex items-center gap-3 font-display text-xl font-bold">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                  <EyeIcon className="h-5.5 w-5.5" aria-hidden />
                </span>
                Our Vision
              </h3>
              <p className="mt-4 leading-relaxed text-on-dark-muted">
                To be the hospital of choice within Nairobi and the rest of Kenya
                — top-notch services founded on experienced people and
                state-of-the-art medical equipment, for individuals and corporate
                clients alike.
              </p>
            </article>
            <article className="rounded-3xl border border-border-soft bg-white p-8 shadow-[var(--shadow-card)]">
              <h3 className="flex items-center gap-3 font-display text-xl font-bold text-ink">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <HandshakeIcon className="h-5 w-5" aria-hidden />
                </span>
                Our Mission
              </h3>
              <p className="mt-4 leading-relaxed text-ink-muted">
                To make quality private medical services exciting, affordable and
                easily accessible to low- and middle-income earners — growing
                into a one-stop shop for all medical services and equipment.
              </p>
            </article>
          </div>
          <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, body }) => (
              <li
                key={title}
                className="rounded-3xl border border-border-soft bg-white p-6 shadow-[var(--shadow-card)]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-[#149583]">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-4 font-display text-[16px] font-bold text-ink">{title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-ink-muted">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Leadership */}
      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title="Treat With Love in Our Hospitals"
            sub="Our doctors and medical personnel are among the most qualified in the field, ensuring trustworthy, high-quality service to every patient."
          />
          <div className="mx-auto mt-12 max-w-2xl rounded-3xl border border-border-soft bg-white p-8 text-center shadow-[var(--shadow-card-md)]">
            <Image
              src={asset("signature-director")}
              alt="Signature of Mrs. Salama Mugendi, Director of The Lifeline Group of Hospitals"
              width={200}
              height={70}
              className="mx-auto h-auto w-[160px]"
            />
            <p className="mt-5 text-[16px] italic leading-relaxed text-ink">
              “We aim at providing timely and efficient medical services, both
              inpatient and outpatient, across a wide range of services — among
              them general and specialized treatments and consultations.”
            </p>
            <p className="mt-4 font-display text-lg font-bold text-ink">Mrs. Salama Mugendi</p>
            <p className="text-sm font-semibold text-primary">Director, The Lifeline Group of Hospitals</p>
          </div>
        </div>
      </section>

      <FaqSection faqs={ABOUT_FAQS} />
      <EmergencyStrip />
      <CtaBand />
    </>
  );
}
