# The Lifeline Group of Hospitals — Website Redesign Plan Package

**Version 1.0 · 2026-10-27 · Status: ready for build (M0)**
Next.js 15 App Router redesign of thelifelinegroupofhospitals.org — optimized for SEO, AEO (AI answer engines), GEO (generative engine optimization), local SEO, UX and UI. No Astro. Design inspired by the provided Diagnostic Center.com reference (white/blue medical aesthetic, rounded cards, dark-navy CTA bands).

## Document Index

| Doc | Contents |
|---|---|
| [01-PRD.md](./01-PRD.md) | Background, goals & metrics, personas (emergency visitor, planner, corporate, AI engine), user journeys, scope, functional/non-functional requirements, timeline, risks, open questions |
| [02-SITEMAP-CONTENT.md](./02-SITEMAP-CONTENT.md) | Final 20+ route sitemap, unique titles & meta descriptions, 301 redirect map (23 rules), per-page section architecture, **full rewritten copy deck for every page** (hero, overview, offers, FAQs, CTAs) grounded in real site facts |
| [03-DESIGN-SYSTEM.md](./03-DESIGN-SYSTEM.md) | Design principles, color/typography/spacing tokens, iconography, 16 component specs (header, hero, cards, stats band, process band, emergency strip, FAQ, forms, footer, mobile action bar), imagery, motion, breakpoints, QA checklist |
| [04-TECH-SPEC.md](./04-TECH-SPEC.md) | Next.js stack decisions, target file tree, typed content model, rendering/redirects strategy, SEO builder system, JSON-LD `@graph` plan, appointment form spec, performance budgets & engineering, accessibility, testing matrix, deploy & build phases — no code, contracts only |
| [05-SEO-AEO-GEO-PLAYBOOK.md](./05-SEO-AEO-GEO-PLAYBOOK.md) | Keyword & intent map, technical SEO checklist, structured-data summary with E-E-A-T signals, AEO/GEO content patterns & robots policy for AI bots, GBP/local SEO steps, launch-day migration runbook, 30/60/90 plan, compliance guardrails |
| [06-ASSET-INVENTORY.md](./06-ASSET-INVENTORY.md) | Every image from the current WP site mapped to asset keys, usage locations and descriptive SEO alts; gallery category mapping; download/processing plan (current images reused for MVP per client decision) |

## Key Decisions (locked)

1. **Single homepage** at `/` (old `/homepage` → 301) ending the current duplicate-home problem.
2. **Clean URLs** — no more `-2`/`-3` suffixes; 23-rule 301 map preserves equity.
3. **Next.js 15 static-first** — every content page prerendered; one tiny API route for the appointment form.
4. **FAQ-first AEO** — 18 pages ship with answer-first overviews + FAQ blocks mirrored 1:1 into `FAQPage` JSON-LD from a single content source.
5. **Entity-complete structured data** — `Hospital` with two Nairobi branches, geo, 24/7 hours, specialties, imaging services as `MedicalTest`, directors as `Person`.
6. **Local-first copy** — service+city H1s ("CT Scan, MRI, X-Ray & Ultrasound in Nairobi"), NAP-consistent branch sections, emergency tel CTAs site-wide.
7. **Current photos reused** for MVP with proper SEO alts; asset-key indirection allows a future reshoot without touching components.
8. **Compliance guardrails** — no fabricated ratings, no cure claims, medical disclaimer in footer.

## What the build team gets

- Copy-paste-ready copy for all 20+ pages (no lorem, no guessing) — including exact title tags and meta descriptions.
- A redirect map that protects every legacy URL's ranking equity.
- A design blueprint faithful to the approved reference screenshot, down to band compositions and card anatomy.
- A technical contract specifying stack, file tree, content model, schema graph, form behavior, and CI-enforced performance budgets (Lighthouse ≥ 90 mobile).
- A migration runbook so nothing is lost at cutover: sitemap submission, GBP updates, 301 verification, indexing requests.

## Open items (client, blocking none of M1–M2)

1. Real social profile URLs (schema `sameAs`; current site's are broken)
2. Accepted insurance providers list
3. WhatsApp number monitored? (+254 714 313 138 assumed)
4. Branch street addresses for Maps embeds (Membley; Eastleigh CT site)
5. 2–3 authentic patient testimonials with permission
