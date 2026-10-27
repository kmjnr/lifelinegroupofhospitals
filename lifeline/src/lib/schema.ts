import {
  BRANCHES,
  EMAIL,
  PHONES,
  SITE_NAME,
  SITE_URL,
  SOCIALS,
  FOUNDED_YEAR,
} from "@/content/site";
import type { Faq } from "@/content/types";
import type { Post } from "@/content/blog";
import { canonicalUrl } from "./seo";

/**
 * Typed JSON-LD builders. All entities cross-reference by stable @id.
 * Rendered into pages via the <JsonLd> component.
 */

export function hospitalGraph() {
  const hospitalId = `${SITE_URL}/#hospital`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Hospital",
        "@id": hospitalId,
        name: SITE_NAME,
        url: SITE_URL,
        telephone: PHONES.primary,
        email: EMAIL,
        foundingDate: String(FOUNDED_YEAR),
        logo: `${SITE_URL}/media/logo-full.png`,
        image: `${SITE_URL}/media/hero-hospital.jpg`,
        priceRange: "$$",
        medicalSpecialty: [
          "EmergencyMedicalServices",
          "Cardiovascular",
          "Ophthalmologic",
          "Dentistry",
          "Pediatric",
          "Physiotherapy",
          "NutritionSupport",
          "Obstetric",
        ],
        location: BRANCHES.map((b) => ({
          "@type": "Hospital",
          name: `${SITE_NAME} — ${b.area}`,
          telephone: b.phone,
          address: {
            "@type": "PostalAddress",
            streetAddress: b.address.replace(", Nairobi, Kenya", ""),
            addressLocality: "Nairobi",
            addressCountry: "KE",
          },
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        })),
        availableService: [
          "Emergency and ambulance services",
          "Intensive care (ICU)",
          "Digital X-ray",
          "CT scan",
          "MRI scan",
          "Ultrasound",
          "Mammography",
          "Medical laboratory",
          "Pharmacy",
          "Antenatal clinic",
          "Family planning",
          "Nutrition consultancy",
          "Inpatient wards",
          "ENT clinic",
          "Cardiac unit",
          "Dental clinic",
          "Eye care",
          "Pediatrics",
          "Orthopedic unit",
          "Physiotherapy",
        ].map((s) => ({ "@type": "MedicalProcedure", name: s })),
        sameAs: Object.values(SOCIALS),
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        publisher: { "@id": hospitalId },
        inLanguage: "en-KE",
      },
    ],
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function blogSchema(posts: Post[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    url: canonicalUrl("/blog"),
    name: "The Lifeline Health Blog",
    publisher: { "@id": `${SITE_URL}/#hospital` },
    inLanguage: "en-KE",
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.h1,
      url: canonicalUrl(`/blog/${p.slug}`),
      datePublished: p.date,
      description: p.excerpt,
      articleSection: p.category,
    })),
  };
}

export function articleSchema(opts: {
  headline: string;
  description: string;
  path: string;
  dateISO: string;
  author: string;
  section: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    image: canonicalUrl(opts.image),
    articleSection: opts.section,
    datePublished: opts.dateISO,
    mainEntityOfPage: canonicalUrl(opts.path),
    author: { "@type": "Organization", name: opts.author },
    publisher: { "@id": `${SITE_URL}/#hospital` },
    inLanguage: "en-KE",
  };
}

export function medicalClinicSchema(opts: {
  name: string;
  description: string;
  path: string;
  specialty: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: `${opts.name} — ${SITE_NAME}`,
    description: opts.description,
    url: canonicalUrl(opts.path),
    telephone: PHONES.primary,
    medicalSpecialty: opts.specialty,
    parentOrganization: { "@id": `${SITE_URL}/#hospital` },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  };
}
