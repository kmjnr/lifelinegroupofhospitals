# PRD — The Lifeline Group of Hospitals Website Redesign

**Version:** 1.0 · **Date:** 2026-10-27 · **Status:** Approved for build
**Project code:** `lifeline-redesign` · **Stack:** Next.js (App Router) — no Astro

---

## 1. Background

The Lifeline Group of Hospitals (Nairobi, Kenya) operates a WordPress website (thelifelinegroupofhospitals.org) built ~2021–2023 from a legacy theme. An audit of all 23 pages (see `../site-content/`) found:

- Two competing homepages (`/` splash + `/homepage`), confusing users and crawlers
- No meta descriptions anywhere, generic title tags, no structured data (no `Hospital`/`MedicalOrganization` schema)
- Legacy URL suffixes (`/emergency-services-2`, `/pharmacy-services-3`, `/laboratory-services-2`, `/radiology-services-3`, `/intensive-care-unit-2`, `/ward-services-2`)
- Duplicate/truncated copy ("Make an appointment with us today for quality and efficient medical" — cut off mid-sentence), typos ("basisi", "femake", "d;agnostic")
- Broken social links (all point back to the site root), thin service cross-links copied identically on every page
- No FAQ content, no doctor/team profiles beyond two named directors, no booking flow
- Good raw material: 24/7 operation, 2 branches (Kahawa Wendani + Membley/Eastleigh), imaging (X-ray, CT, MRI, Ultrasound, Mammography), 7 specialized clinics, 9 core services, incorporated 2005, Level 5 institution

The business needs a site that (a) looks modern and trustworthy, (b) ranks in Google Kenya for hospital/clinic local-intent queries, (c) is cited by AI answer engines, and (d) converts visitors into appointment calls/form submissions.

## 2. Goals & Success Metrics

### Business goals
| # | Goal | Metric | Baseline | Target (90 days post-launch) |
|---|------|--------|----------|------------------------------|
| G1 | Increase appointment requests | Form submits + "Book" clicks / mo | unknown (WPForms only) | +50% |
| G2 | Increase emergency calls | `tel:` link clicks / mo | not tracked (add GA4) | +30% |
| G3 | Local pack visibility | "hospital near me kahawa wendani"-class queries in top 3 | absent | top 3 for 10+ keywords |
| G4 | AI answer visibility | Brand/service citations in AI Overviews/ChatGPT/Perplexity | none | cited for "hospital in Nairobi with CT/MRI" class queries |
| G5 | Site performance | Mobile PageSpeed (Performance) | ~40–55 (typical WP theme) | ≥ 90 |
| G6 | Content authority | Indexed quality pages | 23 thin pages | 30+ enriched pages incl. FAQs, doctor pages |

### Non-goals (v1 / MVP)
- No online booking/payments engine (form + phone + WhatsApp CTA only)
- No blog/CMS editorial workflow (FAQ + static content only; blog scaffolding reserved)
- No patient portal, no telemedicine, no Swahili translation (en-Kenya only, structure ready for `/sw` later)

## 3. Target Users & Personas

### P1 — "Emergency Njeri" (35–60, Nairobi, mobile-first)
Needs a hospital **now**: accident, chest pain, child fever at night. Arrives from Google ("hospital near me", "24 hour hospital Nairobi") or direct. **Needs:** instant phone CTA, directions, open-now reassurance, services list. **Success:** tap-to-call within 10s.

### P2 — "Planner Wanjiru" (28–45, Kahawa Wendani/Roysambu/Membley area)
Planning antenatal care, child immunization, dental cleaning, or a checkup. Compares facilities, looks for prices, doctors, location. **Needs:** clear service pages, insurance/pricing signals, booking form, branch locations. **Success:** submits appointment form.

### P3 — "Corporate/Referrer" (insurance agents, corporate HR, referring GPs)
Verifies credibility: accreditations, technology, specialties, contact for partnerships. **Needs:** About page, technology/equipment proof, contact channels. **Success:** calls or emails the hospital.

### P4 — "AI answer engine" (ChatGPT, Perplexity, Google AI Overviews)
Synthesizes answers to "Which hospital in Nairobi has MRI and mammography?", "Is there a 24-hour hospital in Kahawa Wendani?". **Needs:** extractable Q&A blocks, structured data, consistent NAP, explicit service+location statements. **Success:** the site is quoted/cited.

## 4. User Journeys (core)

### J1 — Emergency (P1)
Search → lands on Home or Emergency page → hero shows "Open 24 Hours" + phone → sticky mobile call bar → `tel:+254711420359` → (alt) Directions → Google Maps.

### J2 — Book an appointment (P2)
Homepage → Services/Clinics grid → service page (e.g. Antenatal) →Trust signals + FAQ → "Book Appointment" → form (name, phone, email, branch, service, preferred date, message) → confirmation state + WhatsApp fallback.

### J3 — Research & trust (P2/P3)
Homepage → About (history since 2005, mission, team) → Imaging/Technology section → Gallery → Contact → call.

## 5. Scope

### 5.1 In scope — pages (final sitemap in 02-SITEMAP-CONTENT.md)
- Home (merged single `/`)
- About Us (`/about`)
- Specialized Clinics hub (`/clinics`) + 7 clinic detail pages
- Services hub (`/services`) + 9 service detail pages
- Imaging & Diagnostics emphasized inside Services (Radiology page covers X-ray/CT/MRI/US/Mammography)
- Gallery (`/gallery`)
- Contact (`/contact`) with branch cards, map embeds, form
- Global: sticky header, mega-footer, emergency strip, appointment form, 404, legal (privacy/terms placeholders)
- 18 redirect rules from legacy URLs
- FAQ Blocks on Home + all service/clinic pages (AEO)

### 5.2 In scope — systems
- Design system (03-DESIGN-SYSTEM.md) derived from the reference screenshot: white/blue medical aesthetic, rounded cards, icon+label feature chips, dark-navy CTA bands
- Next.js App Router codebase per 04-TECH-SPEC.md
- JSON-LD schema graph per 05-SEO-AEO-GEO-PLAYBOOK.md
- Image pipeline using **current site's images only** (see 06-ASSET-INVENTORY.md)

### 5.3 Out of scope
- Doctor profile CRUD (two static director profiles in v1; content model ready for more)
- Multi-language, AMP, native app, payments, live chat
- Blog articles (URL reserved, stubbed "Health Library" coming-soon section allowed)

## 6. Functional Requirements

| ID | Requirement | Priority |
|----|-------------|----------|
| F1 | Sticky header with nav (Clinics, Services dropdowns), phone CTA, "Book Appointment" button | P0 |
| F2 | Mobile sticky bottom bar: Call · WhatsApp · Directions | P0 |
| F3 | Appointment request form: name*, phone*, email, branch*, service*, preferred date, message → email to info@ + store submission (route handler) | P0 |
| F4 | Emergency band (site-wide, above footer): "24/7 Emergency? Call +254 711 420 359" | P0 |
| F5 | Branch cards ×2 with addresses, phones, hours (24 hours), Google Maps embed + directions link | P0 |
| F6 | Services & Clinics grids with icons/images, one-click detail navigation | P0 |
| F7 | FAQ accordion per page with matching FAQPage JSON-LD | P0 |
| F8 | Gallery with category filter (Facilities / Equipment / Care) | P1 |
| F9 | Testimonials section (curated static; disclaimers per medical ethics) | P1 |
| F10 | WhatsApp click-to-chat (+254 714 313 138) | P1 |
| F11 | Team section: Director profiles (Salama Mugendi; Benson — Director, Lifeline Hospital) | P1 |
| F12 | Health Library stub page ("coming soon" + subscribe capture) | P2 |

## 7. Non-Functional Requirements

- **Performance:** LCP ≤ 2.5s on 4G mid-range Android; total JS ≤ 200KB gz on content pages; images AVIF/WebP via `next/image`
- **Accessibility:** WCAG 2.2 AA — contrast ≥ 4.5:1 body text, visible focus, semantic landmarks, form labels + error text, reduced-motion support
- **SEO/AEO/GEO:** per 05 playbook — 100% of pages with unique title/meta/canonical, `Hospital` + `MedicalClinic` + `Physician` + `FAQPage` + `BreadcrumbList` JSON-LD, correct `robots` directives, sitemap, Google Business Profile links, NAP consistency
- **Privacy & medical ethics:** form consent checkbox + privacy page; no patient-identifying testimonials without documented permission; no health claims that diagnose/treat promises — copy reviewed for medical-marketing compliance (Kenya MPDB sensitivities)
- **Browser support:** last 2 versions Chrome/Edge/Firefox/Safari, Android Chrome ≥ 90, iOS Safari ≥ 15
- **Analytics:** GA4 + call/tel click events, form submit conversion, Search Console

## 8. Content Strategy Summary

Full rewritten copy lives in `02-SITEMAP-CONTENT.md`. Principles:

1. **One homepage** that states who/where/what in the first screen (AEO extraction): "The Lifeline Group of Hospitals is a 24-hour private hospital in Kahawa Wendani and Membley, Nairobi, offering emergency care, imaging (CT, MRI, X-ray, ultrasound, mammography), laboratory, pharmacy, maternity and 7 specialty clinics."
2. **Every service/clinic page** follows a fixed skeleton: `Hero → Overview (50–80 words, answer-first) → What's included / conditions treated (lists) → Why Lifeline (3–4 bullets) → patients' FAQ (4–6 Q&A) → CTA band`. Answer-first paragraphs are extractable by AI engines.
3. **Local SEO strings** embedded verbatim: "near Kahawa Barracks, along Thika Super Highway", "Kahawa Wendani", "Membley", "Nairobi, Kenya", service+city combos in H1/H2 ("CT Scan in Nairobi").
4. **E-E-A-T**: named doctors/director, real history (est. 2005 as Estate Medical Clinic → Health Care Nursing Home → Kahawa Wendani Hospital → Lifeline Group), technology specifics (MRI, CT, mammography units), two physical addresses + P.O. Box.
5. All legacy copy reused where accurate, de-duplicated, corrected, and expanded — nothing invented that the hospital cannot stand behind (no invented doctor counts, ratings, or accreditations).

## 9. Timeline & Milestones (suggested)

| Milestone | Deliverable | Effort |
|-----------|-------------|--------|
| M0 | Plan docs approved (this package) | done |
| M1 | Scaffold + design system in code, tokens/components | 2 d |
| M2 | All 20 routes built with copy + schema + redirects | 4 d |
| M3 | Forms, analytics, maps, QA (Lighthouse + schema validation + a11y) | 2 d |
| M4 | Deploy to preview, content sign-off by hospital | 1 d |
| M5 | DNS cutover + post-launch indexing (GSC, sitemap ping, GBP update) | 1 d |

## 10. Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Old WP content not fully migrated → SEO loss | High | 18-rule 301 map (02 doc §4), parity checklist per old URL |
| Form spam | Med | honeypot + rate limit + mail provider validation |
| WhatsApp number not monitored by hospital | Med | confirm with client before launch; fallback to phone only |
| Images from WP are low-res | Med | cap display size, use as-is for MVP (user decision), flag for future reshoot |
| Medical claims compliance | High | copy reviewed against "no cure promises" rule; testimonial disclaimers |
| GBP not owned/updated | Med | launch checklist includes GBP verification + NAP sync |

## 11. Open Questions (client)

1. Real social profile URLs (current site's are broken) — needed for `sameAs` schema.
2. Insurance providers accepted (list for "Insurance & Pricing" section)?
3. WhatsApp number officially monitored?
4. Exact branch addresses for Maps embeds (Membley building/street; Eastleigh CT location)?
5. Any patient photos consent constraints for Gallery?
