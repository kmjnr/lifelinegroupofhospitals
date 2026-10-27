import type { Metadata } from "next";
import { GALLERY_ITEMS, GALLERY_CATEGORIES } from "@/content/gallery";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { GALLERY_FAQS } from "@/content/faqs";
import { JsonLd } from "@/components/shared/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { FaqSection } from "@/components/shared/FaqSection";
import { CtaBand } from "@/components/shared/CtaBand";
import { GalleryFilter } from "@/components/shared/GalleryFilter";

export const metadata: Metadata = {
  ...buildMetadata({
    path: "/gallery",
    title: "Gallery — Inside Lifeline Group of Hospitals, Nairobi",
    description:
      "Photo tour of our Nairobi hospital: ICU, theaters, radiology, laboratory, pharmacy, wards and clinics at Kahawa Wendani and Membley branches.",
  }),
};

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ])}
      />
      <JsonLd data={faqSchema(GALLERY_FAQS)} />

      <section className="gradient-soft border-b border-border-soft">
        <div className="mx-auto max-w-6xl px-4 pb-12 pt-8 sm:px-6 lg:px-6">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Gallery", path: "/gallery" }]} />
          <div className="max-w-3xl">
            <h1 className="font-display text-balance text-display font-bold tracking-tight text-ink">
              Inside <span className="text-primary">Lifeline</span>
            </h1>
            <p className="mt-4 max-w-[56ch] text-lg leading-relaxed text-ink">
              A look inside our facilities — ICU, theatres, radiology,
              laboratory, pharmacy, wards and clinics across our Nairobi
              branches.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <GalleryFilter
            categories={GALLERY_CATEGORIES.map((c) => ({ id: c.id, label: c.label }))}
            items={GALLERY_ITEMS}
          />
        </div>
      </section>

      <FaqSection faqs={GALLERY_FAQS} />
      <CtaBand />
    </>
  );
}
