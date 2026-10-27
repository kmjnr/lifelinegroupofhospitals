import Image from "next/image";
import { ButtonLink, PhoneButton } from "@/components/shared/Button";
import { asset } from "@/lib/assets";
import { PHONES } from "@/content/site";
import {
  ActivityIcon,
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
  ScanIcon,
  ShieldCheckIcon,
  AwardIcon,
} from "@/components/shared/icons";

const trustChips = [
  { icon: ClockIcon, label: "Available 24/7" },
  { icon: MapPinIcon, label: "2 Branches in Nairobi" },
  { icon: ScanIcon, label: "CT · MRI · X-Ray · Ultrasound" },
  { icon: AwardIcon, label: "Serving Nairobi since 2005" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 pb-12 pt-8 sm:px-6 lg:px-6 lg:pb-16 lg:pt-12">
        {/* Full-measure display headline — the dominant element of the first screen */}
        <h1 className="max-w-[24ch] font-display text-balance text-display font-bold tracking-tight text-ink">
          Quality Healthcare, <span className="text-primary">Close to Home</span>
        </h1>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-12">
          <div className="flex flex-col items-start gap-6">
            <p className="max-w-[46ch] text-lg leading-relaxed text-ink">
              The Lifeline Group of Hospitals is a 24-hour private hospital
              serving Kahawa Wendani, Membley and greater Nairobi from two
              convenient branches — with emergency care, advanced imaging,
              laboratory, pharmacy and specialist clinics all under one roof.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/contact" size="lg">
                <CalendarIcon className="h-4 w-4" aria-hidden />
                Book an Appointment
              </ButtonLink>
              <PhoneButton phone={PHONES.primary} href={PHONES.primaryHref} size="lg" />
            </div>
            <ul className="flex flex-wrap gap-2.5" aria-label="Key facts about Lifeline">
              {trustChips.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border-soft bg-white px-3 py-1.5 text-[13px] font-semibold text-ink shadow-[var(--shadow-card)]"
                >
                  <Icon className="h-3.5 w-3.5 text-primary" aria-hidden />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative h-[340px] overflow-hidden rounded-3xl shadow-[var(--shadow-card-lg)] sm:h-[420px] lg:h-[620px]">
            <Image
              src={asset("hero-reception")}
              alt="Reception team welcoming patients at The Lifeline Group of Hospitals, Nairobi — a 24-hour hospital"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function UspChips() {
  const items = [
    { icon: ScanIcon, label: "Advanced Technology", tint: "bg-primary/10 text-primary" },
    { icon: ShieldCheckIcon, label: "Expert Clinicians", tint: "bg-accent/10 text-[#149583]" },
    { icon: ActivityIcon, label: "Fast & Accurate Results", tint: "bg-rose-400/15 text-rose-500" },
    { icon: AwardIcon, label: "Trusted by Nairobi Since 2005", tint: "bg-amber-400/15 text-amber-600" },
  ];
  return (
    <section aria-label="Why patients choose Lifeline" className="px-4 pb-4 sm:px-6 lg:px-8">
      <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-3 lg:grid-cols-4">
        {items.map(({ icon: Icon, label, tint }) => (
          <li
            key={label}
            className="flex items-center gap-3 rounded-2xl border border-border-soft bg-white px-4 py-3.5 shadow-[var(--shadow-card)]"
          >
            <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${tint}`}>
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <span className="text-[13px] font-bold leading-snug text-ink">{label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
