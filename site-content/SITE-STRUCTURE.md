# The Lifeline Group of Hospitals — Site Structure & Content Overview
Source: https://www.thelifelinegroupofhospitals.org/ (WordPress site)
Scraped: 2026-10-27, all 23 pages, via Firecrawl

## 1. INFORMATION ARCHITECTURE (current site)

```
Home (/)
├── Homepage (/homepage)          ← "Home" menu actually points here
├── About Us (/about-us)
├── Specialized Clinics (/specialized-clinics)   [parent page]
│   ├── ENT Services (/ent-services)
│   ├── Cardiac Unit (/cardiac-unit)
│   ├── Dental Services (/dental-services)
│   ├── Eye Care (/eye-care)
│   ├── Pediatrics (/pediatrics)
│   ├── Orthopedic Unit (/orthopedic-unit)
│   └── Physiotherapy (/physiotherapy)
├── Services (/services)          [parent page]
│   ├── Intensive Care Unit (/intensive-care-unit-2)
│   ├── Emergency Services (/emergency-services-2)
│   ├── Pharmacy Services (/pharmacy-services-3)
│   ├── Antenatal Clinic (/antenatal-clinic)
│   ├── Laboratory Services (/laboratory-services-2)
│   ├── Radiology Services (/radiology-services-3)
│   ├── Family Planning Services (/family-services)
│   ├── Nutrition Consultancy (/nutrition-consultancy)
│   └── Ward Services (/ward-services-2)
├── Gallery (/gallery)
└── Contact Us (/contact-us)
```

Note: `/` (home) is a separate minimal landing page from `/homepage`. URLs contain
legacy numeric suffixes (`-2`, `-3`) — a sign of WordPress revision clutter, bad for SEO.

## 2. GLOBAL ELEMENTS (identical across pages)

### Header
- Logo: Hospital-New-Logo (345x152 / 245x82 variants)
- Menu: Home, About Us, Specialized Clinics (7 subs), Services (9 subs), Gallery, Contact Us
- CTA button: "MAKE AN APPOINTMENT"
- Social icons: Instagram, Facebook, Twitter (all currently link back to the site root — broken)

### Footer
- Blurb: "We aim at providing timely and efficient medical services both in and out patient on a wide range of services among them general and specialized treatments and consultations."
- Clinics list links ×7, Services list links ×8 (Ward Services missing from footer)
- Get in touch: Kahawa Wendani, Nairobi, Kenya. P.O Box 15506 - 00100
  +254 711 420 359 | +254 714 313 138, info@thelifelinegroupofhospitals.org
- Copyright © 2026 LIFELINE GROUP OF HOSPITALS.

### Contact facts (from Contact page)
- Locations: Kahawa Wendani, Nairobi, Kenya AND Membley, Nairobi, Kenya (two branches)
- Opening hours: 24 hours
- Phones: +254 711 420 359 / +254 714 313 138
- Email: info@thelifelinegroupofhospitals.org
- Contact form (WPForms): First/Last name*, Email*, Phone, Message → Submit

### Home page USP cards (4)
1. 24 Hour Service — "We operate on a 24 hour basis to provide timely and efficient medical services both in and out patient."
2. Easy Access — "Located along Thika super highway at Kahawa Wendani opp Kahawa barracks, close to the road."
3. Appointment — "Make an appointment with us today for quality and efficient medical [services]" (text truncated on live site)
4. Latest Technology — "We have invested in world class technology and equipment for quality and reliable healthcare."

### Emergency strip (home)
"Have an Emergency or Want to book an Appointment?" → Call +254 711 420 359/+254 714 313 138 [CALL US!] [Book An Appointment]

### Leadership quote (home)
SALAMA MUGENDI — DIRECTOR

## 3. SEO / AEO / GEO AUDIT NOTES (observed during scrape)

- Meta descriptions: NONE found on any page (Firecrawl metadata empty).
- Title tags: generic pattern "Page – LIFELINE GROUP OF HOSPITALS"; home = "LIFELINE GROUP OF HOSPITALS – Health Care of Excellence".
- No structured data (schema.org) evident; a hospital site should have MedicalOrganization/LocalBusiness, Hospital, Physician, FAQ, BreadcrumbList schema.
- Home page is a thin splash page (421 words) separate from /homepage — duplicate homepages dilute SEO and confuse crawlers and AI answer engines.
- Legacy URL suffixes (-2, -3) on 6 service pages.
- Social links point to site root, not real profiles.
- "Appointment" USP card text is truncated mid-sentence ("quality and efficient medical").
- No blog / content hub despite an /author/admin and /comments/feed existing.
- Location info good for GEO: two Nairobi locations (Kahawa Wendani + Membley), P.O. Box, phones — should be in NAP-consistent LocalBusiness schema + Google Business Profile.

## 4. WORD COUNTS PER PAGE

| Page | Words |
|------|-------|
| home (/) | 421 |
| homepage | 611 |
| about-us | 621 |
| services | 677 |
| specialized-clinics | 522 |
| ent-services | 407 |
| cardiac-unit | 441 |
| dental-services | 496 |
| eye-care | 424 |
| pediatrics | 463 |
| orthopedic-unit | 458 |
| physiotherapy | 376 |
| intensive-care-unit-2 | 559 |
| emergency-services-2 | 544 |
| pharmacy-services-3 | 581 |
| antenatal-clinic | 484 |
| laboratory-services-2 | 549 |
| radiology-services-3 | 964 |
| family-services | 553 |
| nutrition-consultancy | 656 |
| ward-services-2 | 556 |
| gallery | 349 |
| contact-us | 326 |
**Total: ~11,700 words of copy across 23 pages**
