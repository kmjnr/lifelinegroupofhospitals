import { ButtonLink } from "./Button";
import { PHONES } from "@/content/site";
import { PhoneIcon, HeartPulseIcon } from "./icons";

/** Site-wide CTA band — dark navy, mirrors the reference's closing band. */
export function CtaBand({
  title = "Ready to Take the Next Step?",
  body = "Your health can't wait. Book an appointment today and experience world-class care, close to home.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section aria-label="Book an appointment" className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="gradient-navy relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] px-6 py-14 text-center sm:px-12">
        {/* ECG watermark */}
        <svg
          className="pointer-events-none absolute right-6 top-1/2 hidden h-24 w-64 -translate-y-1/2 text-white/10 lg:block"
          viewBox="0 0 240 80"
          fill="none"
          aria-hidden
        >
          <path
            d="M0 40h48l10-18 14 36 10-30 8 12h30l10-18 14 36 10-30 8 12h78"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
        <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-5">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white">
            <HeartPulseIcon className="h-7 w-7" aria-hidden />
          </span>
          <h2 className="font-display text-balance text-[clamp(1.75rem,1.2rem+1.6vw,2.375rem)] font-bold leading-tight text-white">
            {title}
          </h2>
          <p className="text-[17px] leading-relaxed text-on-dark-muted">{body}</p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
            <ButtonLink href="/contact" variant="on-dark" size="lg">
              Book an Appointment
            </ButtonLink>
            <ButtonLink href={PHONES.primaryHref} variant="ghost" size="lg" className="text-white hover:bg-white/10">
              <PhoneIcon className="h-4 w-4" aria-hidden />
              {PHONES.primary}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Emergency strip — site-wide, above footer. */
export function EmergencyStrip() {
  return (
    <section aria-label="Emergency contact" className="px-4 pb-10 pt-2 sm:px-6 lg:px-8">
      <div className="gradient-navy relative mx-auto flex max-w-6xl flex-col gap-5 overflow-hidden rounded-[2rem] px-6 py-8 sm:px-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#e23d3d]/20 text-[#ff8080]">
            <PhoneIcon className="h-6 w-6" aria-hidden />
          </span>
          <div>
            <p className="font-display text-lg font-bold text-white">Having an Emergency?</p>
            <p className="text-[15px] text-on-dark-muted">
              Our emergency line is answered 24 hours a day, every day —{" "}
              <span className="whitespace-nowrap">{PHONES.primary}</span> ·{" "}
              <span className="whitespace-nowrap">{PHONES.secondary}</span>
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={PHONES.primaryHref} variant="emergency">
            <PhoneIcon className="h-4 w-4" aria-hidden />
            Call Emergency Line
          </ButtonLink>
          <ButtonLink href="/contact" variant="ghost" className="text-white hover:bg-white/10">
            Get Directions
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
