# 05 — SEO / AEO / GEO / Local SEO Playbook & Migration Plan

**Project:** Lifeline Group of Hospitals redesign · Scope: search engines, AI answer engines (Google AI Overviews, ChatGPT, Perplexity, Gemini), generative engine optimization, and local pack visibility for Nairobi.

---

## 1. Keyword & Intent Map

### 1.1 Primary clusters (Kenya/Nairobi intent)

| Cluster | Example queries | Primary page | Notes |
|---|---|---|---|
| Brand | lifeline group of hospitals, lifeline hospital nairobi | `/` + KG schema | Title already brands; ensure Knowledge Graph via schema + GBP |
| Local-near | hospital near me, 24 hour hospital near me, hospital kahawa wendani, hospital roysambu | `/` , `/contact` | NAP + GBP + "24 hours" prominence |
| Emergency | 24/7 emergency hospital nairobi, ambulance services nairobi, emergency room nairobi | `/services/emergency` | tel: CTA above fold |
| Imaging money terms | CT scan price nairobi, MRI nairobi, ultrasound nairobi, x-ray nairobi, mammogram nairobi | `/services/radiology` | Highest commercial value — deep content + FAQ |
| Maternal | antenatal clinic nairobi, family planning nairobi, delivery hospital kahawa wendani | `/services/antenatal` | |
| Specialty clinics | ent clinic nairobi, dental clinic nairobi, eye clinic nairobi, pediatric clinic nairobi, orthopedic clinic nairobi, physiotherapy nairobi, cardiologist nairobi | 7 clinic pages | one page each — no cannibalization |
| Support services | laboratory tests nairobi, hospital pharmacy nairobi, ICU nairobi, wards | service pages | |
| Informational (AEO) | is there a 24 hour hospital in nairobi, how much is a ct scan in kenya, when should I start antenatal visits | FAQs on relevant pages | answer-first blocks |

### 1.2 Copy rules applied (perH1/H2/body)
- H1 pattern: `{Service/Clinic} in Nairobi` + brand complement in title tag, not H1 (avoids stuffing).
- Each page includes ≥1 sentence with `{service} + {location} + qualifier` in natural prose ("Our digital X-ray services in Nairobi are painless, fast and available 24 hours.").
- Service+city in title/meta (see 02 §2 for the exact final strings).
- Avoid: keyword-stuffing paragraphs, city lists, hidden text, fabricated review stars, invented "best hospital" claims (E-E-A-T risk).

## 2. Technical SEO (build checklist)

- [x] One canonical homepage `/` (redirect `/homepage` → `/`)
- [x] 23-rule 301 map in `next.config.ts` (02 §4)
- [x] Unique title + meta description per route (02 §2)
- [x] Canonical URLs absolute, no trailing slash, one version indexed
- [x] `sitemap.xml` auto-built from content (priorities set), referenced in robots.txt
- [x] robots.txt: allow all, allow GPTBot/PerplexityBot/CCBot/Google-Extended (AEO), disallow `/api/`
- [x] OG + Twitter cards on all routes; programmatic OG images
- [x] 404 returns real 404 status with helpful content
- [x] Heading hierarchy one H1/page
- [x] Internal linking: every detail page links 3 related pages + hubs; footer links all 16
- [x] Breadcrumbs visible + BreadcrumbList schema
- [x] Image SEO: descriptive filenames kept, descriptive alts (06), width/height set, lazy where below fold
- [ ] Post-deploy: submit sitemap in GSC; verify property (DNS or meta); monitor Coverage

## 3. Structured Data Summary (reachable via 04 §6)

Global `@graph`: `Hospital` (2 branches, 24/7 hours, geo, phones, medicalSpecialty, availableService, foundingDate 2005) + `WebSite` + Person(directors). Page-level: `MedicalClinic` ×7, `MedicalTest` (CT/MRI/X-ray/US/mammography), `FAQPage` on 18 pages, `BreadcrumbList` everywhere, `ContactPage`, `AboutPage`, `CollectionPage`, `ImageObject` gallery.

E-E-A-T signals embedded:
- Named directors with roles (`Person` + signature image)
- Real corporate history dates (2005→today) as `foundingDate` + timeline content
- Technology specifics (MRI, CT, mammography units) as `MedicalTest` — concrete, verifiable claims only
- Physical addresses, registration (Companies Act Cap 486), Level-5 descriptor as stated on current site
- Medical disclaimer in footer (trust signal for both engines and users)

## 4. AEO / GEO Playbook (answer engines)

### 4.1 Content patterns for extractability
1. **Answer-first paragraphs**: every page opens its overview with a self-contained 40–60 word answer ("Yes — Lifeline operates 24 hours a day at both its Kahawa Wendani and Membley branches in Nairobi…"). No preamble, no pronoun chains.
2. **Question-formatted H3s** mirroring real queries; answers immediately after in ≤ 60-word chunks (our FAQ blocks).
3. **Lists for enumeration**: services, conditions, methods rendered as real `<ul>` (engines extract lists well).
4. **Entity density**: repeat the canonical entity ("The Lifeline Group of Hospitals", "Lifeline") + location entities (Kahawa Wendani, Membley, Nairobi, Thika Super Highway) co-located with each service mention.
5. **Consistency across surfaces**: FAQ strings identical in visible copy and FAQPage JSON-LD (single source in content files — crawlers detect mismatches).
6. **Tables/lists of facts** on radiology page (modality → what it shows → where available) — prime AI-overview material.

### 4.2 Crawling policy for AI bots (robots.txt)
Explicitly allow: `GPTBot`, `OAI-SearchBot`, `ChatGPT-User`, `PerplexityBot`, `Perplexity-User`, `Google-Extended`, `ClaudeBot`, `Applebot-Extended`. Disallow only `/api/`. Rationale: citation visibility is a business goal; no sensitive data exists at allowed paths.

### 4.3 GEO measurement (manual, 30-day cadence)
- 20-question probe set ("Is there a 24-hour hospital in Kahawa Wendani?", "Which Nairobi hospitals offer MRI?", "Lifeline Group of Hospitals contacts"…) run in ChatGPT, Perplexity, Google AI Overviews; log: cited? source? sentiment?
- Track brand mentions growth vs baseline (month 0 = none).

## 5. Local SEO & Migration Runbook

### 5.1 Google Business Profile (critical path — do before launch)
1. Claim/verify GBP for **Kahawa Wendani** location (and second listing for Membley if it exists / else create).
2. Set: categories `Hospital` (primary), `Emergency care service`, `Medical laboratory`, `Physical therapist`…; hours 24/7; both phones; website URL deep-linked per service (`/services/radiology` in GBP services section).
3. Upload 10 current-site photos to GBP; add services list; enable booking URL = `/contact`.
4. NAP consistency: identical string everywhere (site footer, contact page, schema, GBP): `The Lifeline Group of Hospitals — Kahawa Wendani, Thika Super Highway opposite Kahawa Barracks, Nairobi · +254 711 420 359`.
5. Add LocalBusiness→`hasMap` links; embed Maps on `/contact` (done in build).

### 5.2 Launch-day migration sequence
1. Freeze WP content (no edits from freeze to cutover).
2. Build final static export; run redirect test suite (23 URLs → 301).
3. Deploy to production host on the same domain (DNS cutover or host change). **Keep WP at temp subdomain for 90 days** as content reference (noindex it: `X-Robots-Tag: noindex` on the whole subdomain).
4. Immediately: submit sitemap in GSC; request indexing for homepage + 6 money pages (radiology, emergency, antenatal, imaging cluster, contact).
5. Update GBP website URL if temporarily changed; re-verify.
6. Update social bios (when real URLs known) + any directories/insurers listing the site.
7. Monitor: GSC Coverage & Enhancements daily ×14 days; fix crawl anomalies; 404 spike → check referral paths.

### 5.3 Post-launch 30/60/90
- **30 days:** all pages indexed; Local pack appearance for brand+near queries; schema valid in GSC enhancements; Lighthouse ≥ 90 maintained.
- **60 days:** imaging cluster queries into top 10 (GSC position report); first AI citations logged; testimonial + FAQ expansion round 2 (new questions from real front-desk calls).
- **90 days:** review funnel (form submits, tel clicks per GSC/GA4); content backlog: 2 Health Library articles targeting informational queries ("how much is a CT scan in Nairobi" etc.); consider Swahili key pages if data supports.
- **Backlink seeds (white-hat):** county/private-sector health directories, insurer provider lists, Kenya hospital directories — submit NAP-complete listings (consistency > volume).

## 6. Risk & Compliance Guardrails

- No fabricated ratings/reviews (only curated real testimonials w/ permission; no `aggregateRating` schema until authentic data exists).
- No cure/diagnose-by-website claims; copy says "diagnose/treat" only in the context of doctors doing so.
- YMYL content meets E-E-A-T baseline: named responsible team, real addresses, disclaimers; no medical advice beyond general guidance in FAQs.
- HealthLibrary articles (future) reviewed by a clinician before publishing (process note for hospital).
