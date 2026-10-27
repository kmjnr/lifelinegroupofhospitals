import type { Metadata } from "next";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { asset } from "@/lib/assets";
import { CtaBand } from "@/components/shared/CtaBand";
import { ButtonLink } from "@/components/shared/Button";
import { BookIcon } from "@/components/shared/icons";

export const metadata: Metadata = {
  ...buildMetadata({
    path: "/health-library",
    title: "Health Library — Coming Soon | Lifeline Group of Hospitals",
    description:
      "Practical health guides from Lifeline's clinical team, coming soon. In the meantime, ask our team a question or explore our services.",
  }),
  title: "Health Library — Coming Soon",
};

export default function HealthLibraryPage() {
  return (
    <>
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-3xl bg-primary/10 text-primary">
            <BookIcon className="h-8 w-8" aria-hidden />
          </span>
          <h1 className="font-display text-display font-bold tracking-tight text-ink">
            Our Health Library — Coming Soon
          </h1>
          <p className="max-w-[52ch] text-lg leading-relaxed text-ink">
            Our clinical team is preparing clear, trustworthy articles on
            maternal health, child care, chronic conditions and preventive
            health for Kenyan families.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <ButtonLink href="/contact" size="lg">
              Ask us a question today
            </ButtonLink>
            <ButtonLink href="/services" variant="outline" size="lg">
              Explore our services
            </ButtonLink>
          </div>
          <figure className="mt-14 w-full">
            <Image
              src={asset("pediatric-care")}
              alt="Lifeline clinician examining a child at The Lifeline Group of Hospitals, Nairobi"
              width={1376}
              height={768}
              sizes="(max-width: 768px) 100vw, 672px"
              className="h-auto w-full rounded-3xl shadow-[var(--shadow-card)]"
            />
          </figure>

          {/* A preview of the kinds of topics the library will cover */}
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <figure>
              <Image
                src={asset("ultrasound-care")}
                alt="Obstetric ultrasound scan at The Lifeline Group of Hospitals, Nairobi"
                width={1264}
                height={848}
                sizes="(max-width: 768px) 100vw, 212px"
                className="h-auto w-full rounded-2xl shadow-[var(--shadow-card)]"
              />
              <figcaption className="mt-2 text-[13px] text-ink-muted">
                Maternal health — scans done safely on site
              </figcaption>
            </figure>
            <figure>
              <Image
                src={asset("ambulance-fleet")}
                alt="Lifeline emergency ambulance fleet ready for dispatch in Nairobi"
                width={1376}
                height={768}
                sizes="(max-width: 768px) 100vw, 212px"
                className="h-auto w-full rounded-2xl shadow-[var(--shadow-card)]"
              />
              <figcaption className="mt-2 text-[13px] text-ink-muted">
                Emergency care — answers day and night
              </figcaption>
            </figure>
            <figure>
              <Image
                src={asset("svc-mother-child")}
                alt="Mother and child during a consultation at The Lifeline Group of Hospitals, Nairobi"
                width={600}
                height={400}
                sizes="(max-width: 768px) 100vw, 212px"
                className="h-auto w-full rounded-2xl shadow-[var(--shadow-card)]"
              />
              <figcaption className="mt-2 text-[13px] text-ink-muted">
                Mother &amp; child — care at every stage
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
