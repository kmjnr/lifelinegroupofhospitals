# 04 — Technical Specification (Next.js)

**Project:** Lifeline Group of Hospitals redesign · **Framework:** Next.js 15 (App Router) · **No Astro**
This document specifies the architecture, file tree, data model, SEO/AEO implementation, rendering strategy, integrations, and performance/accessibility engineering. It intentionally contains **no code snippets** — implementation details are described contractually.

---

## 1. Stack Decisions

| Concern | Choice | Rationale |
|---|---|---|
| Framework | **Next.js 15, App Router, TypeScript** | SSG-first, perfect for static hospital content + a couple of server routes (form). User requirement. |
| Rendering | **Static generation (`static`)** for all content routes; one **server route handler** for the appointment form | Hospital content is editorial; static = fastest TTFB + best crawlability. |
| Styling | **Tailwind CSS v4** with design tokens in `@theme` | 1:1 with 03-DESIGN-SYSTEM tokens; zero runtime CSS. |
| Components | **shadcn/ui (Radix-based)** for Accordion, Dialog, Tabs, Form primitives | Accessible headless primitives; style to system. |
| Icons | `lucide-react` | System icon set. |
| Fonts | `next/font` (self-hosted) — Sora + Inter (or Plus Jakarta Sans + Inter) | No FOUT, no external font requests. |
| Images | `next/image` with remote `thelifelinegroupofhospitals.org` loader in dev → local copies in `public/media` for prod | Images stay as-is for MVP; optimized formats via Next pipeline. |
| Forms | Server route handler (`/api/appointment`) → email via provider (Resend or SMTP) + honeypot + rate limit | No CMS needed; work on static hosting with Node runtime. |
| Maps | Google Maps **iframe embeds** (`loading="lazy"`) | No API key cost, good enough for MVP. |
| Analytics | GA4 via `@next/third-parties` | Event tracking for tel clicks, form submits, WhatsApp. |
| Deployment | Vercel (or any Node host / Cloudflare via adapter) | Supports route handler + image optimization. |

## 2. File Tree (target)

```
lifeline/ (project: "lifeline-redesign")
├── docs/                     ← this plan package (01–06)
├── content/                  ← typed content collections (TS data modules)
│   ├── site.ts               ← identity: NAP, phones, emails, socials, hours
│   ├── services.ts           ← 9 services: slug, copy, faqs, image, related
│   ├── clinics.ts            ← 7 clinics: same shape
│   ├── faqs.ts               ← shared FAQ sets (home, hubs, pages)
│   ├── testimonials.ts       ← curated quotes + disclaimer
│   ├── team.ts               ← directors
│   └── gallery.ts            ← image entries with category + alt
├── public/
│   └── media/                ← downloaded WP images (see 06-ASSET-INVENTORY)
├── src/
│   ├── app/
│   │   ├── layout.tsx               ← root: fonts, header, footer, sticky bar, GA4
│   │   ├── page.tsx                 ← Home
│   │   ├── about/page.tsx
│   │   ├── clinics/page.tsx
│   │   ├── clinics/[slug]/page.tsx          ← generateStaticParams ×7
│   │   ├── services/page.tsx
│   │   ├── services/[slug]/page.tsx         ← generateStaticParams ×9
│   │   ├── gallery/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── health-library/page.tsx
│   │   ├── privacy/page.tsx
│   │   ├── not-found.tsx
│   │   ├── sitemap.ts               ← from content builders
│   │   ├── robots.ts
│   │   ├── manifest.ts
│   │   ├── opengraph-image.tsx      ← branded OG generator (static layout)
│   │   └── api/appointment/route.ts ← POST: validate → email → 200
│   ├── components/
│   │   ├── layout/  Header, MegaFooter, MobileActionBar, EmergencyStrip, Breadcrumbs
│   │   ├── home/    Hero, UspChips, ServicesGrid, WhyUs, StatsBand, ProcessBand,
│   │   │            ImagingBand, Testimonials, LocationsSection, FaqSection, CtaBand
│   │   ├── shared/  SectionHeader, ServiceCard, Button, FaqAccordion, BranchCard,
│   │   │            IconChip, GalleryGrid, AppointmentForm, JsonLd
│   │   └── ui/      shadcn primitives (accordion, dialog, tabs, input, …)
│   ├── lib/
│   │   ├── seo/               ← SEO system (see §5)
│   │   ├── validation.ts      ← zod schemas for form
│   │   ├── analytics.ts       ← event helpers (call_click, whatsapp, form_submit)
│   │   └── utils.ts
│   └── styles/globals.css     ← Tailwind v4 @theme tokens
├── next.config.ts             ← images.remotePatterns, redirects(), headers()
├── package.json / tsconfig.json
└── README.md
```

## 3. Content Model (contractual)

Each `Service | Clinic` record (single type, `kind` field discriminates):

```ts
interface DeptRecord {
  kind: "service" | "clinic";
  slug: string;                 // "radiology" | "ent"
  navLabel: string;             // short menu label
  name: string;                 // full name
  title: string;                // SEO <title>
  metaDescription: string;
  eyebrow: string;              // "RADIOLOGY & IMAGING"
  h1: string;
  overview: string;             // 50–80w answer-first paragraph (AEO)
  imageKey: AssetKey;           // → 06-ASSET-INVENTORY
  offer: { label: string }[];   // bullets / "what we offer"
  whyUs: string[];              // ≤4 bullets
  faqs: { q: string; a: string }[];   // 4–6, mirrored to FAQPage schema
  related: string[];            // slugs for cross-links
  highlights?: { value: string; label: string }[]; // stats where provided
}
```

`site.ts` identity constants (single source of truth for NAP — used by footer, contact page, schema, meta):

- name: `The Lifeline Group of Hospitals`
- url: `https://www.thelifelinegroupofhospitals.org`
- phones: `+254711420359`, `+254714313138`
- email: `info@thelifelinegroupofhospitals.org`
- postal: `P.O. Box 15506-00100, Nairobi, Kenya`
- branches: `[{ id:"kahawa-wendani", address:"Thika Super Highway, opposite Kahawa Barracks, Kahawa Wendani, Nairobi", … }, { id:"membley", address:"Membley Estate, Nairobi", … }]`
- hours: `Mo–Su 00:00–24:00`
- geo: lat/lng per branch (to capture from Maps at build; placeholder tokens allowed)
- sameAs: social URLs (client to supply; tokenized until then)

FAQ rule of one: any string that exists in copy AND schema lives in `content/faqs.ts` exactly once and is referenced by both — never duplicated.

## 4. Routing, Params & Redirects

- Dynamic routes: `clinics/[slug]` and `services/[slug]` with `generateStaticParams` returning all slugs; `dynamicParams = false` (unknown slug → 404).
- `generateMetadata` per route pulling title/description/canonical/OG from content records + `SITE` constants.
- Redirects: the 23-row map in `02-SITEMAP-CONTENT.md §4` declared in `next.config.ts` `redirects()` (source → destination, `permanent: true`). `trailingSlash: false`; canonical URLs omit trailing slash.
- `not-found.tsx` renders helpful nav + emergency CTA; `robots` allows all except `/api/`.

## 5. SEO / AEO System (lib/seo)

Follows the portable builder pattern (from frontend-seo practice) adapted to Next App Router:

1. **`constants/seo.ts`** — site identity, default title template `%s | The Lifeline Group of Hospitals`, default OG image path, locale `en_KE`, verification tokens.
2. **`lib/seo/metadata.ts`** — pure builder `buildMetadata(routeDescriptor)` producing the App Router `Metadata` object: title, description, canonical (absolute via `canonicalUrl()`), OG/Twitter cards (og:image 1200×630 from `opengraph-image.tsx` per route), robots directives (`index: true, follow: true` except `/health-library` maybe), alternates.
3. **`lib/seo/sitemap.ts`** — `sitemapEntries()` built by iterating content collections + static routes; consumed by `app/sitemap.ts`. Every entry carries `lastmod` (build date), priorities: home 1.0, hubs .9, detail pages .8, gallery/contact .7, legal .3.
4. **`lib/seo/robots.ts`** — allow all, disallow `/api/`, declare sitemap URL.
5. **`lib/seo/structured-data.ts`** — typed JSON-LD builders (see §6).
6. **`app/opengraph-image.tsx`** — programmatic OG: navy gradient + logo + page title + "24-Hour Hospital in Nairobi".

Single-adapter rule: only `buildMetadata` imports `next` types; everything else is pure and unit-testable.

## 6. Structured Data Plan (JSON-LD `@graph`)

Global (in root layout, entity graph with stable `@id`s):

- `Hospital` (subtype of MedicalOrganization; `@id: #hospital`):
  - name, url, logo, image, telephone (+254 711 420 359), email
  - **two `location` entries** → `Hospital`/`MedicalClinic` with address (PostalAddress: streetAddress, addressLocality "Nairobi", addressCountry "KE"), geo (lat/lng), openingHoursSpecification 24/7, telephone
  - `medicalSpecialty`: [EmergencyMedicalServices, Cardiovascular, Ophthalmologic, DentalCare, Pediatric, Physiotherapy, Nutrition, Obstetric]
  - `availableService`: Service list (9 services + imaging modalities)
  - `sameAs`: socials when provided
  - `foundingDate`: "2005"
- `WebSite` (`@id: #website`) with `publisher → #hospital`
- `Person` for directors (Salama Mugendi — `employee`/`founder` relation, referenced from About page graph)

Per-page additions (in page body where relevant):

- `BreadcrumbList` on all nested pages
- `FAQPage` on home, hubs, and every detail page (strings sourced from content collections)
- `MedicalClinic` (per clinic detail, referencing `#hospital` via `parentOrganization`)
- `MedicalProcedure`/`MedicalTest` for radiology modalities (CT, MRI, X-ray, Ultrasound, Mammography as `MedicalTest` entries with `availableAt → branch`)
- `Physician` slots reserved (only when client confirms names/credentials — v1 uses directors only, not labeled physicians)
- `WebPage` + `ImageObject` for gallery
- `ContactPage`, `AboutPage`, `CollectionPage` where applicable

Validation: `schema-dts` typings; CI check with `next build` + optional `structured-data-testing-tool`/Rich Results manual test at M3. AI-crawler policy: allow GPTBot/PerplexityBot/Google-Extended in `robots.txt` (AEO goal) — nothing sensitive is exposed.

## 7. Appointment Form (functional spec)

`POST /api/appointment`:
1. Parse JSON; validate with zod: names (2–80), email (`z.string().email()`), phone (E.164-ish Kenya regex `^(?:\+254|0)(7|1)\d{8}$`), branch enum, service enum, optional date (not in past), message ≤ 1000, consent true, honeypot empty.
2. Rate limit: in-memory token bucket by IP (and platform edge rules when deployed to Vercel) — 5 requests/minute/IP.
3. Send email via provider SDK (Resend recommended; SMTP fallback) to `info@thelifelinegroupofhospitals.org` with structured subject `[Appointment Request] {service} — {branch}`.
4. Respond `{ ok: true }`; client shows success panel; failure → inline error + "call us instead" fallback.
Security: no HTML passthrough in email body (escape all values), CSRF via same-origin check (origin header), secrets in env (`AUTH_TOKEN`/SMTP creds). Optional write to a durable store is **out of scope v1**.

Client behaviors: inline validation on blur; error summary with `aria-live="polite"`; submit disabled while pending; honeypot + minimum-fill time (2s) to foil bots.

## 8. Performance Engineering

- Static HTML for all content routes; JS budget: ≤ 200KB gz total on content pages. FAQ accordion & mobile menu are the only hydration-heavy parts (Radix; small).
- Images: `next/image` with explicit `sizes`; LCP hero prioritized (`priority`), everything else lazy. Local copies under `public/media` (dev: remote loader from the WP origin for convenience).
- Fonts: `next/font` with `display: swap`, subsets `latin`.
- Third parties: GA4 after consent-light config ( anonymize; IP storage off); Maps iframes lazy + facade pattern (click-to-load where supported).
- `next.config` headers: long-lived immutable caching for `/_next/static`, `Cache-Control: public, max-age=3600` for HTML, security headers (X-Content-Type-Options, Referrer-Policy strict-origin-when-cross-origin, X-Frame-Options SAMEORIGIN, basic CSP allowing Maps/GA).
- Edge cases: no client-side data fetching anywhere on content routes.

**Performance budgets (CI-enforced with Lighthouse CI):** Perf ≥ 90 mobile, A11y ≥ 95, Best-Practices ≥ 95, SEO = 100. LCP ≤ 2.5s, CLS ≤ 0.05, TBT ≤ 200ms.

## 9. Accessibility Engineering

- Landmarks: header/nav/main/footer; one `h1` per page; heading order validated in CI (custom lint script or axe).
- Radix primitives with `aria-expanded/controls` for accordions; Escape closes mobile menu; focus trap in mobile overlay.
- Form: labels bound, `aria-required`, error `<p id>` referenced by `aria-describedby`; success message `role=status`.
- Color tokens validated ≥ 4.5:1 (see 03 §2). `prefers-reduced-motion` kills reveal/count-up animations.
- Phone numbers as `tel:` links with accessible names ("Call +254 711 420 359"); maps iframes titled; gallery buttons named ("View larger: ICU at Kahawa Wendani branch").

## 10. Testing & QA

| Layer | Tooling | Gate |
|---|---|---|
| Types | `tsc --noEmit` | 0 errors |
| Lint | ESLint (next/core-web-vitals + a11y plugin) | 0 errors |
| Unit | vitest — seo builders, sitemap entries, redirects map, validation | high-value pure fns covered |
| E2E | Playwright — 6 flows: home→book form submit, clinics nav, service page schema present, mobile bar call click, gallery filter, 404 | green on 3 viewports |
| Lighthouse | lighthouse CI, mobile preset | budgets in §8 |
| Schema | Rich Results test URLs + `@graph` snapshot test | valid |
| Redirects | Playwright hits 23 legacy URLs → assert 301 target | all pass before cutover |

## 11. Environment & Deploy

- Env vars (`.env.local`, then hosting env): `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_GA_ID`, email provider key (`RESEND_API_KEY` or SMTP set), `APPOINTMENT_TO_EMAIL`, optional `GOOGLE_SITE_VERIFICATION`.
- Preview deploys on every PR; production cut from `main` after M4 sign-off.
- Cutover runbook lives in `05-SEO-AEO-GEO-PLAYBOOK.md §5`.

## 12. Build Phases (mapping to PRD milestones)

1. **M1** scaffold: tokens in globals.css, fonts, layout shell, Header/Footer/EmergencyStrip/sticky bar; design-system primitives.
2. **M2a** content: port `content/*` modules from 02 copy deck; detail page templates (clinic/service) rendering skeleton §3 of the copy doc.
3. **M2b** home + hubs + gallery + contact + about; JSON-LD graph; sitemap/robots/OG; redirects; form route.
4. **M3** QA batteries (§10), accessibility pass, performance tuning, analytics events.
5. **M4/M5** preview → sign-off → cutover + GSC/GBP updates.
