# 06 — Asset Inventory (current website images → new build)

**Source:** live WordPress uploads on thelifelinegroupofhospitals.org · **Plan:** download all to `public/media/` at build; referenced via typed `AssetKey`. Sizes displayed are display intents — original files may differ; `next/image` handles resizing/format (AVIF/WebP).

Naming: `media/<assetKey><original-extension>`; the keys below are the contract used by content files and components.

## 1. Brand

| AssetKey | Source URL | Used in | Suggested alt |
|---|---|---|---|
| `logo-full` | `wp-content/uploads/2023/04/Hospital-New-Logo-345x152.png` (+ `cropped-Hospital-New-Logo-245x82.png` variant) | header, footer, OG, schema logo | "The Lifeline Group of Hospitals logo" |
| `logo-mark` | `wp-content/uploads/2023/04/LIFELINE_SOLO_LOGO-removebg-preview.png` | favicon source, floating cards, print | "Lifeline logo mark" |
| `signature-director` | `wp-content/uploads/2023/03/horticulture-founder-signature.png` | About leadership | "Signature of Salama Mugendi, Director" |
| `director-cutout` | `wp-content/uploads/2023/03/Doc_Lifeline-removebg-preview.png` | Why-Us / About feature | "Lifeline clinician illustration" |
| `avatar-generic` | `wp-content/uploads/2021/08/lotus-spa-template-testimonial-avatar-img.jpg` | testimonials fallback avatar | (initials fallback preferred over this generic image) |

## 2. Home / Feature imagery

| AssetKey | Source URL | Used in | Suggested alt |
|---|---|---|---|
| `hero-hospital` | `2023/03/24-HOURS.jpg` | Home hero, About story | "Front entrance of the Lifeline Group of Hospitals at night — open 24 hours in Nairobi" |
| `usp-24-hours` | `2023/03/24-HOURS.jpg` | duplicate use avoided; reserve | "24-hour hospital building at Lifeline" |
| `usp-easy-access` | `2023/03/easy-access.jpg` | Why-Us / Gallery "Facilities" | "Hospital location along Thika Super Highway, Kahawa Wendani, Nairobi" |
| `usp-appointment` | `2023/03/appointment.jpg` | Appointment CTA support | "Reception desk booking an appointment at Lifeline Hospital Nairobi" |
| `usp-latest-tech` | `2023/03/latest-tech.jpg` | Imaging band alternate | "Modern medical equipment at the Lifeline Group of Hospitals" |
| `about-clinic` | `2023/03/attending-to-client.jpg` | Why-Us split section, ENT hero | "Nurse attending to a patient at Lifeline Hospital, Nairobi" |

## 3. Clinics (7 heroes)

| AssetKey (clinic) | Source URL | Suggested alt |
|---|---|---|
| `clinic-ent`* | `2023/03/attending-to-client.jpg` (hero dup — fine to reuse) or `2023/03/LIFELINE-ent.jpg` for card | "ENT consultation at the Lifeline ENT clinic in Nairobi" |
| `clinic-cardiac` | `2023/03/cardiac-lifeline.jpg` (card) · `2023/03/cardiac-lifeline-1.jpg` (gallery alt) | "Cardiac care team at the Lifeline cardiac unit, Nairobi" |
| `clinic-dental` | `2023/03/Dentistry-lifeline.jpg` (hero) · `2023/03/dental-lifeline.jpg` (card) · `2023/03/dental-lifeline-1.jpg` (gallery) | "Dentist treating a patient at the Lifeline dental clinic, Nairobi" |
| `clinic-eye` | `2023/03/eye-care-2.jpg` (hero) · `2023/03/lifeline-eye-care.jpg` / `-1.jpg` (cards/gallery) | "Eye examination at the Lifeline eye clinic in Nairobi" |
| `clinic-pediatrics` | `2023/03/pediatrics-lifeline.jpg` (hero) · `2023/03/pediatrics-lifeline-1.jpg` (gallery) | "Pediatrician examining a child at the Lifeline pediatric clinic, Nairobi" |
| `clinic-orthopedic` | `2023/03/Lifeline-orthopedic-1.jpg` (hero) · `2023/03/Lifeline-orthopedic.jpg` (card/gallery) | "Orthopedic assessment at the Lifeline orthopedic unit, Nairobi" |
| `clinic-physiotherapy` | `2023/03/lifeline-physiotherapy.png` (hero/card) · `2023/03/lifeline-physiotherapy-1.png` (gallery) | "Physiotherapy session at the Lifeline physiotherapy unit, Nairobi" |

\* ENT page hero currently uses `attending-to-client.jpg`; `LIFELINE-ent.jpg` is used as its card image elsewhere — keep both assets.

## 4. Services (9 heroes/cards)

| AssetKey (service) | Source URL | Suggested alt |
|---|---|---|
| `svc-icu` | `2023/03/ICU-Lifeline.jpg` · `2023/03/ICU.jpg` (lab page used this for ICU context) | "Intensive care unit bed at the Lifeline ICU, Nairobi" |
| `svc-emergency` | `2023/03/emergency-services-lifeline.jpg` | "Emergency and ambulance services at Lifeline Hospital, Nairobi" |
| `svc-laboratory` | `2023/03/Lab-services-lifeline.jpg` | "Medical laboratory technologist running tests at Lifeline, Nairobi" |
| `svc-pharmacy` | `2023/03/pharmacy-services.jpg` | "Pharmacist dispensing medication at the Lifeline pharmacy, Nairobi" |
| `svc-radiology` | `2023/03/radiology-services.jpg` | "Radiology imaging equipment at the Lifeline radiology unit, Nairobi" |
| `svc-wards` | `2023/03/ward-services.jpg` | "Inpatient ward at the Lifeline Group of Hospitals, Nairobi" |
| `svc-antenatal` | `2023/03/antenatal-services-lifeline.jpg` · card fallback `mother-child-health-lifeline.jpg` | "Antenatal consultation at the Lifeline antenatal clinic, Nairobi" |
| `svc-mother-child` | `2023/03/mother-child-health-lifeline.jpg` | "Mother and child health checkup at Lifeline Hospital" |
| `svc-family-planning` | `2023/03/family-planning-lifeline.jpg` | "Family planning counseling at the Lifeline clinic, Nairobi" |
| `svc-nutrition` | `2023/03/nutrition-specialist-lifeline.jpg` | "Nutrition consultation at the Lifeline nutrition clinic, Nairobi" |
| `svc-theater` | `2023/03/theater-services-lifeline.jpg` | "Operating theatre at the Lifeline Group of Hospitals, Nairobi" |
| `clinics-hub` (specialized-clinics) | `2023/03/specialized-clinics.jpg` | "Specialist consultation at the Lifeline specialized clinics, Nairobi" |

## 5. Gallery set (per current /gallery page)

`theater, ward, radiology, pharmacy, nutrition, mother-child, lab, ICU, family-planning, emergency, antenatal (services set)` + clinic gallery variants (`pediatrics-1, cardiac-1, dental-1, eye-1, orthopedic-1, physiotherapy-1`) + branch/venue shots `LF-1 … LF-12` (12 venue/lifestyle photos).

Gallery categories for filter:
- **Facilities:** LF-1…LF-12, theater, wards
- **Equipment & Services:** ICU, lab, radiology, pharmacy, emergency
- **Clinics & Care:** all clinic images, antenatal, mother-child, family-planning, nutrition

Every gallery item: descriptive alt (subject + branch), assetKey `gallery-lf-01 … 12` etc.

## 6. Download & processing plan

1. Script step at M2: `curl` loop downloading all URLs above → `public/media/<assetKey>.<ext>` (127 endpoints; dedupe repeats).
2. Strip query/resize suffixes; keep original filenames in a `manifest.json` for provenance (credit: client's existing photo library).
3. Reference only via `AssetKey → src` map (`lib/assets.ts`), so swapping to professional reshoots later is a one-file change.
4. Alt text: use the suggested strings verbatim (they follow the SEO alt pattern: subject + brand + location).
5. Note: `usp-24-hours` duplicates `hero-hospital` — components must not render the same photo twice on one page (visual variety rule); CT connects LF images to correct categories by visual check at M2.
