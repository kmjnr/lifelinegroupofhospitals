import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import type { Faq } from "@/content/types";

export function FaqSection({
  faqs,
  title = "Frequently Asked Questions",
  sub,
}: {
  faqs: Faq[];
  title?: string;
  sub?: string;
}) {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeader title={title} sub={sub} />
        <div className="mt-10">
          <FaqAccordion faqs={faqs} />
        </div>
      </div>
    </section>
  );
}
