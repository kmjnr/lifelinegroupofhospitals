import type { Metadata } from "next";
import { Hero, UspChips } from "@/components/home/Hero";
import {
  HomeServicesGrid,
  WhyUs,
  StatsBand,
  ProcessBand,
  ImagingBand,
  VideoSection,
  Testimonials,
  LocationsSection,
} from "@/components/home/Sections";
import { FaqSection } from "@/components/shared/FaqSection";
import { CtaBand, EmergencyStrip } from "@/components/shared/CtaBand";
import { JsonLd } from "@/components/shared/JsonLd";
import { faqSchema } from "@/lib/schema";
import { HOME_FAQS } from "@/content/faqs";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    path: "/",
    title: "Lifeline Group of Hospitals — 24/7 Hospital in Nairobi, Kenya",
    description:
      "24-hour hospital in Kahawa Wendani & Membley, Nairobi. Emergency care, CT, MRI, X-ray, laboratory, pharmacy, maternity and 7 specialty clinics. Call +254 711 420 359.",
  }),
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(HOME_FAQS)} />
      <Hero />
      <UspChips />
      <HomeServicesGrid />
      <WhyUs />
      <StatsBand />
      <ProcessBand />
      <ImagingBand />
      <VideoSection />
      <Testimonials />
      <FaqSection
        faqs={HOME_FAQS}
        sub="Quick answers about The Lifeline Group of Hospitals — hours, locations, services and booking."
      />
      <LocationsSection />
      <EmergencyStrip />
      <CtaBand />
    </>
  );
}
