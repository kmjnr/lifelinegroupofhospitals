import { SITE_URL } from "@/content/site";
import { CLINICS } from "@/content/clinics";
import { SERVICES } from "@/content/services";
import { POSTS } from "@/content/blog";

/** Canonical absolute URL, trailing-slash-free. */
export function canonicalUrl(path: string): string {
  const clean = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${clean.replace(/\/+$/, "") || ""}` || SITE_URL;
}

export interface RouteDescriptor {
  path: string;
  title?: string; // absolute title (overrides template)
  description: string;
  ogImage?: string;
  noIndex?: boolean;
}

export interface MetadataResult {
  // Absolute: route titles are authored complete (plan 02) — the layout
  // template must not append the site name a second time.
  title: { absolute: string };
  description: string;
  alternates: { canonical: string };
  openGraph: {
    title: string;
    description: string;
    url: string;
    siteName: string;
    locale: string;
    type: "website";
    images: { url: string; width: number; height: number; alt: string }[];
  };
  twitter: {
    card: "summary_large_image";
    title: string;
    description: string;
    images: string[];
  };
  robots: { index: boolean; follow: boolean };
}

const DEFAULT_OG = "/media/og-default.jpg";

export function buildMetadata(route: RouteDescriptor): MetadataResult {
  const url = canonicalUrl(route.path);
  const og = route.ogImage ?? DEFAULT_OG;
  return {
    title: { absolute: route.title! },
    description: route.description,
    alternates: { canonical: url },
    openGraph: {
      title: route.title!,
      description: route.description,
      url,
      siteName: "The Lifeline Group of Hospitals",
      locale: "en_KE",
      type: "website",
      images: [
        {
          url: og.startsWith("http") ? og : canonicalUrl(og),
          width: 1200,
          height: 630,
          alt: route.title!,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: route.title!,
      description: route.description,
      images: [og.startsWith("http") ? og : canonicalUrl(og)],
    },
    robots: { index: route.noIndex ? false : true, follow: true },
  };
}

export interface SitemapEntry {
  path: string;
  priority: number;
  changeFrequency: "daily" | "weekly" | "monthly" | "yearly";
}

export function sitemapEntries(): SitemapEntry[] {
  // Derived from the content modules so new services/clinics are
  // picked up automatically instead of drifting from a second list.
  return [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/about", priority: 0.9, changeFrequency: "monthly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/clinics", priority: 0.9, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
    ...SERVICES.map(
      (s): SitemapEntry => ({
        path: `/services/${s.slug}`,
        priority: 0.8,
        changeFrequency: "monthly",
      }),
    ),
    ...CLINICS.map(
      (c): SitemapEntry => ({
        path: `/clinics/${c.slug}`,
        priority: 0.8,
        changeFrequency: "monthly",
      }),
    ),
    { path: "/gallery", priority: 0.7, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
    ...POSTS.map(
      (p): SitemapEntry => ({
        path: `/blog/${p.slug}`,
        priority: 0.6,
        changeFrequency: "monthly",
      }),
    ),
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  ];
}
