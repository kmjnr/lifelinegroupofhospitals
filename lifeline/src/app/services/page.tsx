import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/content/services";
import { buildMetadata } from "@/lib/seo";
import { asset } from "@/lib/assets";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { SERVICES_HUB_FAQS } from "@/content/faqs";
import { JsonLd } from "@/components/shared/JsonLd";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CtaBand, EmergencyStrip } from "@/components/shared/CtaBand";
import { FaqSection } from "@/components/shared/FaqSection";
import { ArrowRightIcon, QuoteIcon } from "@/components/shared/icons";

export const metadata: Metadata = {
  ...buildMetadata({
    path: "/services",
    title: "Hospital Services Nairobi — ICU, Lab, Imaging, Pharmacy",
    description:
      "Full-service 24/7 hospital in Nairobi: ICU, emergency & ambulance, laboratory, pharmacy, radiology (CT/MRI/X-ray), antenatal, family planning & wards.",
  }),
};

const DIRECTOR_QUOTE =
  "Here at Lifeline we offer a variety of services — from Intensive Care units to Emergency services, Laboratory, Pharmacy, Radiology, Theatres, Wards, Antenatal Clinics, Family Planning, Nutrition Consultancy, Mother-Child Health and many more.";

export default function ServicesHubPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <JsonLd data={faqSchema(SERVICES_HUB_FAQS)} />

      <section className="gradient-soft border-b border-border-soft">
        <div className="mx-auto max-w-6xl px-4 pb-14 pt-8 sm:px-6 lg:px-6 lg:pb-20">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]} />
          <div className="max-w-3xl">
            <h1 className="font-display text-balance text-display font-bold tracking-tight text-ink">
              Hospital Services in Nairobi, <span className="text-primary">24/7</span>
            </h1>
            <p className="mt-4 max-w-[56ch] text-lg leading-relaxed text-ink">
              Everything from intensive care to pharmacy under one roof — day
              and night, at both our Kahawa Wendani and Membley branches.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title="Services That Cover Your Whole Journey"
            sub="Here are the services we offer at The Lifeline Group of Hospitals — general and specialized, inpatient and outpatient."
            align="left"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((svc) => (
              <Link
                key={svc.slug}
                href={`/services/${svc.slug}`}
                className="group flex flex-col overflow-hidden rounded-3xl border border-border-soft bg-white shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-md)] focus-ring"
              >
                <span className="relative block aspect-[16/10]">
                  <Image
                    src={asset(svc.imageKey)}
                    alt={`${svc.name} at The Lifeline Group of Hospitals, Nairobi`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </span>
                <span className="flex flex-1 flex-col gap-2 p-6">
                  <span className="font-display text-lg font-bold text-ink">{svc.name}</span>
                  <span className="line-clamp-2 text-[15px] leading-relaxed text-ink-muted">
                    {svc.heroLine}
                  </span>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-3 text-sm font-semibold text-primary">
                    Read more
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </span>
              </Link>
            ))}
          </div>

          {/* Director quote */}
          <figure className="mx-auto mt-16 max-w-3xl rounded-3xl border border-border-soft bg-white p-8 text-center shadow-[var(--shadow-card)]">
            <QuoteIcon className="mx-auto h-8 w-8 text-primary/30" aria-hidden />
            <blockquote className="mt-4 text-[16px] italic leading-relaxed text-ink">
              “{DIRECTOR_QUOTE}”
            </blockquote>
            <figcaption className="mt-4 text-sm font-bold text-ink-muted">
              Dr. Benson — Director, Lifeline Hospital
            </figcaption>
          </figure>
        </div>
      </section>

      <FaqSection faqs={SERVICES_HUB_FAQS} />
      <EmergencyStrip />
      <CtaBand />
    </>
  );
}
