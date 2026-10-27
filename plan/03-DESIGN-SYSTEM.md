# 03 — Design System

**Project:** Lifeline Group of Hospitals redesign · **Reference:** Diagnostic Center.com UI (provided screenshot)
**Aesthetic direction:** clean, white, trustworthy medical UI; blue primary + dark-navy bands; rounded-2xl cards; soft icon chips; generous whitespace; subtle shadows; photography-led hero. All specs below are token-level and framework-agnostic (applied as Tailwind CSS v4 theme + CSS variables).

---

## 1. Design Principles

1. **Clinical clarity** — every screen answers "who, where, what, how do I get help" in under 5 seconds.
2. **Calm authority** — generous whitespace, limited palette, no decorative noise; photography carries warmth.
3. **Action-first** — a primary action is always visible (Book / Call). Emergency contact is never more than one tap away.
4. **Accessible by default** — AA contrast, 44px minimum touch targets, no color-only meaning.
5. **Reference-faithful** — mirror the screenshot's order logic: warm hero → service grid → why-us split → stats band → testimonials → dark CTA → process → packages→ dark expert band → FAQ → footer, adapted to hospital content.

## 2. Color Tokens

| Token | Hex | Usage |
|---|---|---|
| `--color-primary` | `#1565D8` (medical blue) | Primary buttons, links, icon accents, active states |
| `--color-primary-dark` | `#0E4DA8` | Button hover, gradients |
| `--color-navy` | `#0B2447` | Dark bands (CTA, process, footer top), headings on dark |
| `--color-navy-2` | `#13315C` | Gradient end on dark bands |
| `--color-accent` | `#20BFA9`(teal) | Trust chips, secondary icons, success |
| `--color-danger` | `#E23D3D` | Emergency band accents, required asterisks |
| `--color-bg` | `#FFFFFF` | Page background |
| `--color-surface` | `#F4F8FE` (blue-tinted) | Section alt background, cards |
| `--color-surface-2` | `#EAF1FB` | Chips, hover fills |
| `--color-border` | `#E3EAF4` | Card borders, dividers |
| `--color-text` | `#1A2B45` | Body/headings on light |
| `--color-text-muted` | `#5D7290` | Secondary text |
| `--color-on-dark` | `#FFFFFF` / `#B9C9E0` (muted) | Text on navy |

**Rules:** body text contrast ≥ 7:1 (`#1A2B45` on white). Primary blue on white ≥ 4.6:1 for large text/buttons. Emergency band uses navy base with `danger` accents — never red text on red. Dark bands always `navy → navy-2` diagonal gradient with white text.

## 3. Typography

- **Families:** Headings — `Sora` or `Plus Jakarta Sans` (semibold/bold); Body — `Inter`.
- Scale (fluid via `clamp()`):
  - Display/H1: `clamp(2.25rem, 1.4rem + 2.6vw, 3.25rem)` / 700 / -0.02em
  - H2: `clamp(1.75rem, 1.2rem + 1.6vw, 2.375rem)` / 700
  - H3: `1.375rem` / 600
  - Body-lg: `1.125rem` / 1.7 · Body: `1rem` / 1.7 · Small: `0.875rem`
- Eyebrow labels: 12–13px, 700, letter-spacing 0.12em, uppercase, `primary` color — exactly like reference ("OUR SERVICES", "OUR PROCESS").
- Max reading width 68ch.

## 4. Spacing, Radius, Elevation

- Space scale: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128.
- Section vertical rhythm: 96 desktop / 64 mobile.
- Container: max-w `1200px`, gutters 24 (mobile) / 32 (desktop).
- Radius: cards `24px`, buttons `999px` (pill) or `14px`, icon chips `16px`, images `24px`, floating cards `16px`.
- Shadows: `sm` `0 2px 8px rgba(11,36,71,.06)`; `md` `0 8px 24px rgba(11,36,71,.10)`; `lg` `0 16px 48px rgba(11,36,71,.14)` (used sparingly on hero cards).
- Borders: 1px `--color-border` for outline cards.

## 5. Iconography

- Linear 2px-stroke icons (Lucide set) inside 48–56px rounded-square chips; chip backgrounds alternate soft tints (blue/teal/pink/orange at 10–14% opacity) exactly like the reference service grid.
- Emergency: filled heart-pulse icon only on emergency band.
- Stats band icons: white line icons in translucent white chips (12% white).

## 6. Core Components (specs)

### 6.1 Header
- Height 76px desktop / 64 mobile; white, `border-bottom`, subtle blur on scroll.
- Left: logo (WP logo image, height 44). Center/right: nav links 15px/600 (About, Clinics ▾, Services ▾, Gallery, Contact). Right cluster: phone chip (icon + number, 14px) + `Book Appointment` primary pill button.
- Dropdowns: white card, radius 16, shadow-md, 2-col for Services (9 items), 1-col for Clinics (7 items); items with icon + label; anim opacity/translate 150ms.
- Mobile: hamburger → full-screen white panel; accordion groups; bottom of panel: Call + Book buttons.

### 6.2 Buttons
| Variant | Style |
|---|---|
| Primary | bg primary, white text, pill, padding 14×28, hover primary-dark, focus ring 3px rgba(21,101,216,.35) |
| Outline | white bg, 1.5px primary border, primary text |
| On-dark | white bg, navy text (as reference white buttons on dark bands) |
| Emergency | bg danger, white text — only on emergency band |
| Sizes | sm 12×20/14px text · md 14×28 · lg 16×32/16px |

### 6.3 Hero (Home)
- Layout: 55/45 split (text left / image right) like reference; bg white with faint blue blob top-left.
- Eyebrow badge: pill `--color-surface-2`, primary text, dot accent — "TRUSTED CARE IN NAIROBI · OPEN 24 HOURS".
- H1 two lines with accent-colored second phrase. Sub-paragraph muted, max 52ch.
- CTAs: primary `Book an Appointment` + outline `Call +254 711 420 359`.
- Image: rounded-24, aspect 4:3, `shadow-lg`; floating mini-card bottom-left of image: heart icon + "Your Health, Our Priority"; second floating badge top-right: teal check + "Open 24 Hours".
- Chips row beneath CTAs: 4 trust chips (icon + 12.5px text): Available 24/7 · 2 Branches · CT · MRI · X-Ray · Since 2005.

### 6.4 Section header (reusable)
Centered variant (services, testimonials, FAQ): eyebrow + H2 + 1-line sub, max 640px centered — matches reference "OUR SERVICES / Comprehensive Diagnostic Services". Left-aligned variant for split sections (why-choose-us, imaging band) with `View all →` link right-aligned on desktop.

### 6.5 Service card (grid)
White, radius 24, 1px border + shadow-sm; padding 24; icon chip top-left; title 17px/700; blurb 14px muted, 2 lines; arrow bottom-left (anim translate-x on hover, card raises to shadow-md). Grid: 3 cols desktop / 2 tablet / 1 mobile; gap 24.

### 6.6 Split feature ("Why choose us")
Left text: eyebrow `WHY CHOOSE US`, H2, paragraph, 4 check bullets (teal circular check icons), primary button. Right: image rounded-24 with floating caption card ("Modern Facilities · World-Class Care") bottom-right — mirror reference composition. Background: white (section alternates with surface).

### 6.7 Stats band
Full-width navy gradient (`navy → navy-2`, 12° diagonal), radius 32 inset container, padding 48; 4 stat cells: white icon chip (translucent) + value 32px/800 + label 14px `--color-on-dark` 80% white. Mobile: 2×2.

### 6.8 Process band ("Easy Steps")
Surface bg. 4 columns, each: icon chip (blue tint) → title 16px/700 → 2-line muted text; thin dashed connector line between steps on desktop (as in reference). Numbered chips optional (01–04).

### 6.9 Imaging band (dark, media right)
Navy gradient container, radius 32, padding 64 desktop; left: eyebrow (blue-300 accent), H2 white, paragraph 80% white, outline-on-dark button; right: radiology image rounded-24 with slight overlap outside band (shadow-lg) — as reference "Advanced Technology" block.

### 6.10 Emergency strip
Site-wide above footer. Bar: `navy` bg with subtle ECG line SVG watermark right; left: pulse icon (danger) + "Having an Emergency? Our line is answered 24/7." + numbers bold; right: Emergency button (danger) + `Get Directions` (outline-on-dark). Mobile: stacks, call button full-width.

### 6.11 Testimonials
3-card row on surface bg: card radius 24, border, padding 24; 5 orange stars row; quote 15px; author: 40px round avatar (initials fallback), name 600, role/area muted 13px; slider arrows top-right of section (desktop), swipe on mobile. Disclaimer footnote 12px muted.

### 6.12 FAQ accordion
White cards, radius 16, 1px border; question 15.5px/600 with plus icon rotating to ×; answer 14.5px muted, max-w 60ch; single-open behavior; height auto-animate 200ms. Paired with FAQPage JSON-LD (same strings — single source in content model).

### 6.13 Locations / branch cards
2-col grid: white card radius 24, border; inner: map embed (16:9, rounded-top-24, lazy), branch name 18px/700, address lines muted, `Open 24 Hours` teal chip, phone + Directions buttons row.

### 6.14 Forms (appointment)
Card radius 24 on surface bg; 2-col field grid (mobile 1-col) inside white form card; inputs: 48px height, radius 12, 1px border, focus border-primary + ring; labels 13px/600;error text 13px danger with icon; honeypot hidden field; consent checkbox custom-styled; submit primary full-width on mobile. Success state: teal check circle + "Thank you — we'll call you shortly to confirm." (and WhatsApp fallback link).

### 6.15 Footer
`navy` background. Top area 5 columns (Brand+blurb+socials / Quick Links / Clinics / Services / Contact) — mirrors reference footer; headings 14px/700 white, links 14px 70% white hover 100%. Divider → bottom bar: © line + Privacy + medical disclaimer 12px 55% white. Emergency number repeated top-right of footer.

### 6.16 Mobile sticky action bar (site-wide)
Fixed bottom bar (mobile only, hidden when form in view): 3 equal targets — **Call** (tel, primary bg), **WhatsApp** (teal), **Directions** (outline). 56px tall, safe-area padded.

## 7. Imagery

- Source: current WP uploads only (per MVP decision) — full asset map in `06-ASSET-INVENTORY.md`.
- Treatment: radius 24, `shadow-md`; duotone-free, natural color; hero/feature images 4:3 or 3:2 (`object-cover`); gallery masonry 3-col desktop.
- Every image gets descriptive alt including "Lifeline Group of Hospitals" + subject + location variant (e.g. "Radiology unit at Lifeline Group of Hospitals, Nairobi").
- Dark overlay `linear-gradient(0deg, rgba(11,36,71,.35), transparent 40%)` only on cards with text over image.

## 8. Motion

- Durations 150–250ms; easing `cubic-bezier(.2,.6,.2,1)`.
- Scroll reveal: sections fade-up 16px once (IntersectionObserver, `prefers-reduced-motion` disables).
- Hover: card raise + arrow slide; buttons darken 8%; no parallax; image zoom ≤ 1.04 in gallery.
- Count-up on stats only when in view, respects reduced-motion (instant values).

## 9. Responsive Breakpoints

`sm 640 · md 768 · lg 1024 · xl 1280`. Grid collapses: 3→2→1 (services), 4→2 (stats/process), 2→1 (branches, split sections). Header dropdowns → accordions < lg. All interactive targets ≥ 44×44 under lg.

## 10. Design QA Checklist (applied at M3)

- [ ] Contrast audit on all text/background pairs (AA)
- [ ] Focus-visible rings on every interactive element
- [ ] No layout shift from images (dimensions reserved)
- [ ] Dropdown/accordion keyboard operable (Enter/Space/Escape, arrow nav optional)
- [ ] Form errors announced (aria-live)
- [ ] Sticky bar never overlaps footer content (padding-bottom on body mobile)
