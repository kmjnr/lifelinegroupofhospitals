import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { DeptRecord } from "@/content/types";
import { CLINIC_BY_SLUG } from "@/content/clinics";
import { SERVICE_BY_SLUG } from "@/content/services";
import { buildMetadata } from "@/lib/seo";
import { asset } from "@/lib/assets";
import { faqSchema, medicalClinicSchema, breadcrumbSchema } from "@/lib/schema";
import { PHONES } from "@/content/site";
import { JsonLd } from "../shared/JsonLd";
import { Breadcrumbs } from "../shared/Breadcrumbs";
import { SectionHeader } from "../shared/SectionHeader";
import { ButtonLink, PhoneButton } from "../shared/Button";
import { FaqAccordion } from "../shared/FaqAccordion";
import { CtaBand, EmergencyStrip } from "../shared/CtaBand";
import {
  ArrowRightIcon,
  CheckIcon,
  ClockIcon,
  PhoneIcon,
} from "../shared/icons";

interface DeptPageProps {
  slug: string;
}

export function getDept(slug: string): DeptRecord | undefined {
  return CLINIC_BY_SLUG[slug] ?? SERVICE_BY_SLUG[slug];
}

export function deptMetadata(slug: string): Metadata {
  const dept = getDept(slug);
  if (!dept) notFound();
  return buildMetadata({
    path: dept.kind === "clinic" ? `/clinics/${dept.slug}` : `/services/${dept.slug}`,
    title: dept.title,
    description: dept.metaDescription,
  });
}

export function DeptPageView({ slug }: DeptPageProps) {
  const dept = getDept(slug);
  if (!dept) notFound();

  const path = dept.kind === "clinic" ? `/clinics/${dept.slug}` : `/services/${dept.slug}`;
  const hubHref = dept.kind === "clinic" ? "/clinics" : "/services";
  const hubLabel = dept.kind === "clinic" ? "Specialized Clinics" : "Services";

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: hubLabel, path: hubHref },
    { name: dept.name, path },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={faqSchema(dept.faqs)} />
      {dept.kind === "clinic" && (
        <JsonLd
          data={medicalClinicSchema({
            name: dept.name,
            description: dept.metaDescription,
            path,
            specialty: dept.name,
          })}
        />
      )}

      {/* Hero */}
      <section className="gradient-soft border-b border-border-soft">
        <div className="mx-auto max-w-6xl px-4 pb-12 pt-8 sm:px-6 lg:px-6 lg:pb-16">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: hubLabel, path: hubHref },
              { name: dept.name, path },
            ]}
          />
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-12">
            <div className="flex flex-col items-start gap-5">
              <h1 className="font-display text-balance text-display-long font-bold tracking-tight text-ink">
                {dept.h1}
              </h1>
              <p className="max-w-[52ch] text-lg leading-relaxed text-ink">{dept.heroLine}</p>
              <div className="flex flex-wrap gap-3">
                <ButtonLink href="/contact" size="lg">
                  Book an Appointment
                </ButtonLink>
                <PhoneButton phone={PHONES.primary} href={PHONES.primaryHref} size="lg" />
              </div>
              <p className="flex items-center gap-2 text-[15px] text-ink-muted">
                <ClockIcon className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                Walk-ins welcome · Emergency care anytime
              </p>
            </div>
            <div className="relative h-[340px] overflow-hidden rounded-3xl shadow-[var(--shadow-card-lg)] sm:h-[420px] lg:h-[660px]">
              <Image
                src={asset(dept.imageKey)}
                alt={`${dept.name} at The Lifeline Group of Hospitals, Nairobi`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 56vw"
                className="object-cover object-[50%_70%]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview — answer-first (AEO) */}
      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_360px]">
          <div>
            <SectionHeader
              title={dept.offerLabel}
              align="left"
            />
            <p className="mt-4 max-w-[68ch] text-[16px] leading-relaxed text-ink">
              {dept.overview}
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {dept.offer.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-border-soft bg-white p-4 shadow-[var(--shadow-card)]"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-[#149583]">
                    <CheckIcon className="h-4 w-4" aria-hidden />
                  </span>
                  <span className="text-[15px] font-medium leading-relaxed text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sidebar card */}
          <aside className="h-fit lg:sticky lg:top-32">
            <div className="gradient-navy rounded-3xl p-7 text-white">
              <h2 className="font-display text-xl font-bold">Visit Lifeline Today</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-on-dark-muted">
                Book your visit or call our 24-hour line — walk-ins are always welcome.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <ButtonLink href="/contact" variant="on-dark" className="w-full">
                  Book an Appointment
                </ButtonLink>
                <a
                  href={PHONES.primaryHref}
                  className="flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-[15px] font-semibold text-white hover:bg-white/10 focus-ring"
                >
                  <PhoneIcon className="h-4 w-4" aria-hidden />
                  {PHONES.primary}
                </a>
              </div>
              <ul className="mt-6 flex flex-col gap-2 border-t border-white/15 pt-5 text-sm text-on-dark-muted">
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-accent" aria-hidden /> Open 24 hours, every day
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-accent" aria-hidden /> Kahawa Wendani & Membley
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-accent" aria-hidden /> On-site lab & imaging
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Why Lifeline */}
      <section className="bg-surface px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title="Why Lifeline"
            sub={`What sets The Lifeline Group of Hospitals apart for ${dept.name.toLowerCase()} in Nairobi.`}
            align="left"
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {dept.whyUs.map((why) => (
              <li
                key={why}
                className="rounded-3xl border border-border-soft bg-white p-6 shadow-[var(--shadow-card)]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <CheckIcon className="h-5 w-5" aria-hidden />
                </span>
                <p className="mt-4 text-[15px] font-semibold leading-relaxed text-ink">{why}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            title="Frequently Asked Questions"
            sub={`Common questions about ${dept.name.toLowerCase()} at The Lifeline Group of Hospitals.`}
          />
          <div className="mt-10">
            <FaqAccordion faqs={dept.faqs} />
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-surface px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title="Related Services & Clinics"
            align="left"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {dept.related.map((rel) => (
              <Link
                key={rel.href + rel.label}
                href={rel.href}
                className="group flex flex-col overflow-hidden rounded-3xl border border-border-soft bg-white shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-md)] focus-ring"
              >
                {rel.imageKey && (
                  <span className="relative block aspect-[16/9]">
                    <Image
                      src={asset(rel.imageKey)}
                      alt={rel.label}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </span>
                )}
                <span className="flex items-center justify-between gap-3 p-5">
                  <span className="font-display text-[16px] font-bold text-ink">{rel.label}</span>
                  <ArrowRightIcon className="h-4 w-4 shrink-0 text-primary transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <EmergencyStrip />
      <CtaBand />
    </>
  );
}
