"use client";

import { useState } from "react";
import { PlusIcon } from "./icons";
import type { Faq } from "@/content/types";

/**
 * FAQ accordion — single-open, accessible, animated height.
 * Strings are rendered identically in FAQPage JSON-LD (single source in content).
 */
export function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-3">
      {faqs.map((faq, i) => {
        const open = openIndex === i;
        const panelId = `faq-panel-${i}`;
        const buttonId = `faq-button-${i}`;
        return (
          <div
            key={i}
            className="rounded-2xl border border-border-soft bg-white shadow-[var(--shadow-card)] transition-shadow"
          >
            <button
              id={buttonId}
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpenIndex(open ? null : i)}
              className="flex w-full items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left focus-ring"
            >
              <span className="text-[16px] font-semibold text-ink">{faq.q}</span>
              <PlusIcon
                className={`h-5 w-5 shrink-0 text-primary transition-transform duration-200 ${
                  open ? "rotate-45" : ""
                }`}
              />
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!open}
              className="px-5 pb-5"
            >
              <p className="max-w-[62ch] text-[15px] leading-relaxed text-ink">
                {faq.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
