/** Shared content types mirroring the plan's content model contract. */

export interface Faq {
  q: string;
  a: string;
}

export interface DeptRecord {
  kind: "service" | "clinic";
  slug: string;
  navLabel: string;
  name: string;
  title: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  heroLine: string;
  overview: string;
  imageKey: string;
  offerLabel: string;
  offer: string[];
  whyUs: string[];
  faqs: Faq[];
  related: { label: string; href: string; imageKey?: string }[];
}

export interface Testimonial {
  quote: string;
  name: string;
  area: string;
}
