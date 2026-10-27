import Link from "next/link";
import Image from "next/image";
import { asset } from "@/lib/assets";
import { ArrowRightIcon } from "./icons";

interface ServiceCardProps {
  title: string;
  blurb: string;
  href: string;
  imageKey?: string;
  emojiFallback?: string;
  tint?: "blue" | "teal" | "amber" | "rose";
}

const tints = {
  blue: "bg-primary/10 text-primary",
  teal: "bg-accent/10 text-[#149583]",
  amber: "bg-amber-400/15 text-amber-600",
  rose: "bg-rose-400/15 text-rose-500",
} as const;

export function ServiceCardLink({
  title,
  blurb,
  href,
  imageKey,
  tint = "blue",
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-4 rounded-3xl border border-border-soft bg-white p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-md)] focus-ring"
    >
      {imageKey && (
        <span className="relative block aspect-[16/10] overflow-hidden rounded-2xl">
          <Image
            src={asset(imageKey)}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </span>
      )}
      <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${tints[tint]}`}>
        <ArrowRightIcon className="h-5 w-5 -rotate-45" aria-hidden />
      </span>
      <span className="flex flex-col gap-1.5">
        <span className="font-display text-lg font-bold text-ink">{title}</span>
        <span className="line-clamp-2 text-[15px] leading-relaxed text-ink-muted">{blurb}</span>
      </span>
      <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
        Read more
        <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
      </span>
    </Link>
  );
}
