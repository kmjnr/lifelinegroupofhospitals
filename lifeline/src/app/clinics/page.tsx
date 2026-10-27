import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CLINICS } from "@/content/clinics";
import { buildMetadata } from "@/lib/seo";
import { asset } from "@/lib/assets";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { CLINICS_HUB_FAQS } from "@/content/faqs";
import { JsonLd } from "@/components/shared/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CtaBand } from "@/components/shared/CtaBand";
import { ButtonLink } from "@/components/shared/Button";
import { ArrowRightIcon } from "@/components/shared/icons";

export const metadata: Metadata = {
  ...buildMetadata({
    path: "/clinics",
    title: "Specialty Clinics in Nairobi — Lifeline Group of Hospitals",
    description:
      "Seven specialty outpatient clinics in Nairobi: ENT, cardiac, dental, eye care, pediatrics, orthopedic and physiotherapy. Book a clinic visit today.",
  }),
};

const blurbs: Record<string, string> = {
  ent: "Consultative and diagnostic ear, nose and throat care for adults and children.",
  cardiac: "Heart diagnosis and treatment focused on the underlying cause.",
  dental: "Fillings, root canal, cleaning, braces and more — under one roof.",
  "eye-care": "From routine eye exams to advanced treatment of the human eye.",
  pediatrics: "Your child's healthy growth, from conception to adulthood.",
  orthopedic: "Bones, joints and ligaments — from diagnosis through healing.",
  physiotherapy: "Pain relief, recovery and rehabilitation with modern methods.",
};

export default function ClinicsHubPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Specialized Clinics", path: "/clinics" },
        ])}
      />
      <JsonLd data={faqSchema(CLINICS_HUB_FAQS)} />

      <section className="gradient-soft border-b border-border-soft">
        <div className="mx-auto max-w-6xl px-4 pb-14 pt-8 sm:px-6 lg:px-6 lg:pb-20">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Specialized Clinics", path: "/clinics" }]} />
          <div className="max-w-3xl">
            <h1 className="font-display text-balance text-display font-bold tracking-tight text-ink">
              Specialty Clinics, <span className="text-primary">One Hospital</span>
            </h1>
            <p className="mt-4 max-w-[56ch] text-lg leading-relaxed text-ink">
              Seven specialist clinics sharing one laboratory, one imaging suite
              and one patient record at The Lifeline Group of Hospitals in
              Nairobi — so a single visit gives your doctor everything they need.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CLINICS.map((clinic) => (
              <Link
                key={clinic.slug}
                href={`/clinics/${clinic.slug}`}
                className="group flex flex-col overflow-hidden rounded-3xl border border-border-soft bg-white shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-md)] focus-ring"
              >
                <span className="relative block aspect-[16/10]">
                  <Image
                    src={asset(clinic.imageKey)}
                    alt={`${clinic.name} at The Lifeline Group of Hospitals, Nairobi`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </span>
                <span className="flex flex-1 flex-col gap-2 p-6">
                  <span className="font-display text-lg font-bold text-ink">{clinic.name}</span>
                  <span className="text-[15px] leading-relaxed text-ink-muted">{blurbs[clinic.slug]}</span>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-3 text-sm font-semibold text-primary">
                    Visit clinic page
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </span>
              </Link>
            ))}
            {/* not-sure card */}
            <div className="flex flex-col justify-center gap-4 rounded-3xl gradient-navy p-7 text-white">
              <h2 className="font-display text-xl font-bold">Not sure which clinic?</h2>
              <p className="text-[15px] leading-relaxed text-on-dark-muted">
                Start with a general consultation — we will route you to the
                right specialist, with your labs and imaging in one place.
              </p>
              <ButtonLink href="/contact" variant="on-dark" size="sm" className="w-fit">
                Talk to us
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
