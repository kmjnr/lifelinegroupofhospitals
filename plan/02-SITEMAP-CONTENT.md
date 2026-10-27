# 02 — Sitemap, Redirects & Full Copy Deck

**Project:** Lifeline Group of Hospitals redesign · **Status:** ready for build
This document contains the complete target sitemap, the 301 redirect map, per-page section architecture, and the **final rewritten copy** for every page — optimized for SEO, AEO (answer engines), GEO (generative engine optimization), and local SEO. Copy marked ✏️ **REWRITE** is new editorial content grounded in facts verified from the current site (see `../site-content/`); nothing material is invented.

---

## 1. Target Sitemap (20 public routes)

```
/                               Home (merged single homepage)
/about                          About Us
/clinics                        Specialized Clinics (hub)
/clinics/ent                    ENT Services
/clinics/cardiac                Cardiac Unit
/clinics/dental                 Dental Services
/clinics/eye-care               Eye Care
/clinics/pediatrics             Pediatrics
/clinics/orthopedic             Orthopedic Unit
/clinics/physiotherapy          Physiotherapy
/services                       Services (hub)
/services/intensive-care        Intensive Care Unit
/services/emergency             Emergency & Ambulance
/services/pharmacy              Pharmacy
/services/antenatal             Antenatal & Mother-Child Clinic
/services/laboratory            Laboratory
/services/radiology             Radiology & Medical Imaging (X-ray/CT/MRI/US/Mammography)
/services/family-planning       Family Planning
/services/nutrition             Nutrition Consultancy
/services/wards                 Inpatient Wards
/gallery                        Gallery
/contact                        Contact & Branches
/health-library                 Health Library (stub, P2)
/privacy                        Privacy Policy (short legal page)
/404                            Not Found (helpful links + emergency CTA)
```

Global systems: sticky header, mega-footer (all 16 clinic/service links), emergency band, mobile sticky action bar, appointment form (on `/contact` + embedded CTA band site-wide).

## 2. Titles & Meta Descriptions (final, unique per page)

| Route | Title (≤ 60 chars) | Meta description (≤ 155 chars) |
|---|---|---|
| `/` | Lifeline Group of Hospitals — 24/7 Hospital in Nairobi, Kenya | 24-hour hospital in Kahawa Wendani & Membley, Nairobi. Emergency care, CT, MRI, X-ray, lab, pharmacy, maternity & 7 specialty clinics. Call +254 711 420 359. |
| `/about` | About Us — Lifeline Group of Hospitals, Nairobi (Est. 2005) | A Level-5 private hospital group in Nairobi since 2005. Our story, vision, mission, leadership and commitment to affordable, quality Kenyan healthcare. |
| `/clinics` | Specialty Clinics in Nairobi — Lifeline Group of Hospitals | Seven specialty outpatient clinics in Nairobi: ENT, cardiac, dental, eye care, pediatrics, orthopedic and physiotherapy. Book a clinic visit today. |
| `/clinics/ent` | ENT Clinic Nairobi — Ear, Nose & Throat Care \| Lifeline | Consultative and diagnostic ENT care in Nairobi for adults and children. Ear, nose and throat checkups, early defect detection. Open 24 hours. |
| `/clinics/cardiac` | Cardiac Unit Nairobi — Heart Diagnosis & Care \| Lifeline | Heart care in Nairobi: cardiac diagnosis and treatment supported by on-site imaging — ECG-guided workups, CT and ultrasound. Don't wait on chest symptoms. |
| `/clinics/dental` | Dental Clinic Nairobi — Fillings, Root Canal, Braces \| Lifeline | Full dental services in Nairobi: fillings, root canal, cleaning, fluoride therapy, extractions, dentures, dental x-rays and orthodontics. Book today. |
| `/clinics/eye-care` | Eye Clinic Nairobi — Eye Exams & Treatment \| Lifeline | Comprehensive eye care in Nairobi: routine eye checkups, diagnosis and advanced treatment using modern ophthalmology equipment. Open 24 hours. |
| `/clinics/pediatrics` | pediatric Clinic Nairobi — Child Health & Immunization | Pediatric care in Nairobi from infancy to adolescence: checkups, immunization guidance, treatment of childhood illness, and follow-up care. |
| `/clinics/orthopedic` | Orthopedic Clinic Nairobi — Bones, Joints & Ligaments | Orthopedic care in Nairobi: diagnosis and treatment of bone, joint and ligament conditions with X-ray, CT, bone density and ultrasound support. |
| `/clinics/physiotherapy` | Physiotherapy Nairobi — Rehab & Pain Relief \| Lifeline | Physiotherapy in Nairobi combining modern equipment and proven techniques for pain relief, injury recovery and rehabilitation. Book a session. |
| `/services` | Hospital Services Nairobi — ICU, Lab, Imaging, Pharmacy | Full-service 24/7 hospital in Nairobi: ICU, emergency & ambulance, laboratory, pharmacy, radiology (CT/MRI/X-ray), antenatal, family planning & wards. |
| `/services/intensive-care` | Intensive Care Unit (ICU) Nairobi — 24/7 Critical Care | 24-hour ICU in Nairobi with close monitoring by trained critical-care staff for life-threatening injuries and illness. Call +254 711 420 359. |
| `/services/emergency` | 24/7 Emergency & Ambulance Services Nairobi \| Lifeline | Emergency room and fully equipped ambulances in Nairobi, 24 hours a day. Fast response along Thika Super Highway, Kahawa Wendani & Membley. |
| `/services/pharmacy` | Hospital Pharmacy Nairobi — In-House, 24 Hours \| Lifeline | Fully stocked in-house pharmacy in Nairobi so prescriptions are filled before you leave — open 24 hours at both Lifeline branches. |
| `/services/antenatal` | Antenatal Clinic Nairobi — Pregnancy & Mother-Child Care | Antenatal and mother-child health clinic in Nairobi: pregnancy checkups, maternity guidance, immunization and family planning, affordable and caring. |
| `/services/laboratory` | Medical Laboratory Nairobi — Tests, 24/7 \| Lifeline | 24-hour medical laboratory in Nairobi delivering a wide range of diagnostic tests with fast, accurate results tailored to your doctor's request. |
| `/services/radiology` | CT Scan, MRI, X-Ray & Ultrasound in Nairobi \| Lifeline | Digital medical imaging in Nairobi: X-ray, CT scans (Eastleigh/Membley), MRI, ultrasound and mammography. Walk in or book — results fast. |
| `/services/family-planning` | Family Planning Services Nairobi — Counseling & Methods | Confidential family planning in Nairobi: counseling and a full range of modern contraceptive methods with qualified, non-judgmental providers. |
| `/services/nutrition` | Nutrition Clinic Nairobi — Dietitian Consultation | Nutrition and dietetic consultancy in Nairobi: personalized meal plans and nutrition therapy for diabetes, hypertension, pregnancy and wellness. |
| `/services/wards` | Inpatient Wards Nairobi — Comfortable 24/7 Care | Inpatient wards in Nairobi with male, female and pediatric wings — nursing care, meals and medication included in your inpatient treatment. |
| `/gallery` | Gallery — Inside Lifeline Group of Hospitals, Nairobi | Photo tour of our Nairobi hospital: ICU, theaters, radiology, laboratory, pharmacy, wards and clinics at Kahawa Wendani and Membley branches. |
| `/contact` | Contact & Branches — Lifeline Group of Hospitals Nairobi | Reach Lifeline: Kahawa Wendani (Thika Super Hwy, opp. Kahawa Barracks) & Membley, Nairobi. Open 24 hrs. +254 711 420 359 · info@thelifelinegroupofhospitals.org |
| `/health-library` | Health Library — Coming Soon \| Lifeline Group of Hospitals | Practical health guides from Lifeline's clinical team, coming soon. Subscribe to be notified when articles go live. |

## 3. Per-Page Section Architecture (shared skeleton)

**Service/Clinic detail skeleton (16 pages):**
1. Breadcrumb (Home › Clinics/Services › Page)
2. Hero: eyebrow, H1, 1-sentence value prop, CTAs (Book / Call), hero image
3. "Overview" — 50–80 word answer-first paragraph (AEO extract)
4. "What we offer / Conditions we treat" — bullet grid with icons
5. "Why Lifeline for [service]" — 4 USP bullets
6. FAQ accordion (4–6 Q&A, mirrors FAQPage JSON-LD)
7. Related services (3–4 cards)
8. CTA band + emergency line

**Home skeleton:** (see §5.1)

---

## 4. 301 Redirect Map (old WP URL → new route)

| # | Legacy URL | New URL | Status |
|---|-----------|---------|--------|
| 1 | `/` (WP splash) | `/` | replaced in place |
| 2 | `/homepage` | `/` | 301 |
| 3 | `/about-us` | `/about` | 301 |
| 4 | `/specialized-clinics` | `/clinics` | 301 |
| 5 | `/ent-services` | `/clinics/ent` | 301 |
| 6 | `/cardiac-unit` | `/clinics/cardiac` | 301 |
| 7 | `/dental-services` | `/clinics/dental` | 301 |
| 8 | `/eye-care` | `/clinics/eye-care` | 301 |
| 9 | `/pediatrics` | `/clinics/pediatrics` | 301 |
| 10 | `/orthopedic-unit` | `/clinics/orthopedic` | 301 |
| 11 | `/physiotherapy` | `/clinics/physiotherapy` | 301 |
| 12 | `/services` | `/services` | kept |
| 13 | `/intensive-care-unit-2` | `/services/intensive-care` | 301 |
| 14 | `/emergency-services-2` | `/services/emergency` | 301 |
| 15 | `/pharmacy-services-3` | `/services/pharmacy` | 301 |
| 16 | `/antenatal-clinic` | `/services/antenatal` | 301 |
| 17 | `/laboratory-services-2` | `/services/laboratory` | 301 |
| 18 | `/radiology-services-3` | `/services/radiology` | 301 |
| 19 | `/family-services` | `/services/family-planning` | 301 |
| 20 | `/nutrition-consultancy` | `/services/nutrition` | 301 |
| 21 | `/ward-services-2` | `/services/wards` | 301 |
| 22 | `/gallery` | `/gallery` | kept |
| 23 | `/contact-us` | `/contact` | 301 |

Link equity consolidation: `/homepage` links, footers, and old menu URLs collapse into canonical `/`.

---

## 5. FULL COPY DECK

> ✏️ = rewritten/expanded. Quotes in "…" are preserved verbatim facts from the current site.

### 5.1 HOME (`/`)

**Hero**
- Eyebrow: `TRUSTED CARE IN NAIROBI · OPEN 24 HOURS`
- H1: `Quality Healthcare, Close to Home` *(accent: "Close to Home")*
- Sub: ✏️ "The Lifeline Group of Hospitals is a 24-hour private hospital serving Kahawa Wendani, Membley and greater Nairobi from two convenient branches — with emergency care, advanced imaging, laboratory, pharmacy, and specialist clinics all under one roof."
- CTAs: `Book an Appointment` (primary) · `Call +254 711 420 359` (tel link, outlined) · trust chips under hero: `Open 24 Hours` · `2 Branches in Nairobi` · `CT · MRI · X-Ray · Ultrasound` · `Est. 2005`
- Hero image: `hero-hospital` (24-HOURS.jpg) with floating badge card "Your Health, Our Priority"

**USP chips row (icon + label):**
`Advanced Technology` · `Expert Clinicians` · `Fast & Accurate Results` · `Trusted by Nairobi Since 2005`

**Services section** (eyebrow `OUR SERVICES`, H2 `Comprehensive Care for Your Whole Family`)
✏️ Intro: "From 24/7 emergency response and intensive care to diagnostics, maternity and seven specialty clinics, Lifeline provides a wide range of inpatient and outpatient services — so your family rarely needs to go elsewhere."
Grid of 8 cards (icon, title, 1 line, arrow → detail): Emergency & Ambulance · Intensive Care (ICU) · Radiology & Imaging · Laboratory · Pharmacy · Antenatal & Mother-Child · Specialty Clinics (→ /clinics) · Wards. `View all services →` link to /services.

**"Why choose us" split section** (eyebrow `WHY CHOOSE US`, H2 `Your Trusted Healthcare Partner`)
✏️ Body: "Lifeline combines advanced medical technology with a compassionate, multidisciplinary team — the Level-5 standard of care our patients have known since 2005."
Check list:
- ✏️ "State-of-the-art laboratory and imaging: X-ray, CT, MRI and ultrasound"
- ✏️ "Experienced doctors, nurses and specialists across 7 clinics"
- ✏️ "Emergency ambulances and ER staffed 24 hours a day"
- ✏️ "Affordable, transparent care for individuals and corporate clients"
Image: `about-clinic` (Doc_Lifeline) + floating card `Modern Facilities · World-Class Care`. CTA `More about us →`

**Stats band (dark navy, icon stats):** ✏️ `24/7` Open every day & night · `2` branches: Kahawa Wendani & Membley · `16+` clinical services & clinics · `2005` Serving Nairobi since  *(no fabricated patient counts — none verifiable on old site)*

**Departments / process band** (eyebrow `WHAT TO EXPECT`, H2 `Easy Steps to Get Care at Lifeline`)
1. `Reach Out` — Call, WhatsApp, or send the appointment form — we answer 24/7.
2. `Visit & Register` — Walk in at Kahawa Wendani or Membley; our front desk gets you seen fast.
3. `Get Diagnosed` — On-site lab and imaging (X-ray, CT, MRI, ultrasound) deliver fast results.
4. `Receive Care` — Consultation, treatment and follow-up from one coordinated team.

**Imaging band (dark, image right):** eyebrow `OUR TECHNOLOGY`, H2 `Advanced Imaging for Accurate Results`
✏️ "Digital X-ray, CT, MRI, ultrasound and mammography — using equipment that meets international standards to ensure fast, reliable diagnosis for the best care." CTA `Explore imaging →` (/services/radiology). Image: `radiology`.

**Emergency band (crimson-tinged navy):** H3 `Having an Emergency?` ✏️ "Our emergency line is answered 24 hours a day, every day."
Phones +254 711 420 359 / +254 714 313 138. Buttons: `Call Emergency Line` · `Get Directions`.

**Testimonials (curated, ethical):** eyebrow `TESTIMONIALS`, H2 `What Our Patients Say` — reuse site testimonials where authentic; v1 shows 3 short quotes with first name + area only and disclaimer "Patient feedback shared with permission. Individual experiences vary." *(Client to confirm 3 quotes — placeholder slot marked in content model.)*

**Locations section (GEO/AEO critical):** eyebrow `OUR LOCATIONS`, H2 `Two Branches Across Nairobi`
- **Kahawa Wendani Branch** — Thika Super Highway, opposite Kahawa Barracks, Kahawa Wendani, Nairobi · P.O. Box 15506-00100 · +254 711 420 359 · Open 24 hours
- **Membley Branch** — Membley Estate, Nairobi (full street address to confirm) · +254 714 313 138 · Open 24 hours
Each with `Get Directions` (Google Maps) and map embed.

**FAQ section (H2 `Frequently Asked Questions`, 6 items — mirrors FAQPage JSON-LD):**
1. **Is Lifeline Hospital open 24 hours?** ✏️ "Yes. Both our Kahawa Wendani and Membley branches operate 24 hours a day, every day — including emergency services, laboratory and pharmacy."
2. **Where is Lifeline Hospital located?** ✏️ "Our Kahawa Wendani branch is on Thika Super Highway opposite Kahawa Barracks, Nairobi. Our second branch is in Membley, Nairobi. Both are easily accessible from the highway."
3. **What services does Lifeline offer?** ✏️ "Emergency and ambulance services, intensive care, radiology (X-ray, CT, MRI, ultrasound, mammography), laboratory, pharmacy, antenatal and mother-child health, family planning, nutrition consultancy, inpatient wards, plus ENT, cardiac, dental, eye, pediatric, orthopedic and physiotherapy clinics."
4. **How do I book an appointment?** ✏️ "Call +254 711 420 359 or +254 714 313 138, send us a WhatsApp message, or fill in the appointment form on this website — we will get back to you to confirm your visit."
5. **Does Lifeline have CT and MRI scans?** ✏️ "Yes. We offer digital X-ray and ultrasound at our hospital, CT scans at our imaging facility, and MRI scans through our imaging center in Nairobi, alongside mammography services."
6. **Which areas do you serve?** ✏️ "We primarily serve Kahawa Wendani, Kahawa Barracks, Roysambu, Garden Estate, Membley, Ruiru and the greater Nairobi area along the Thika Super Highway corridor."

**Final CTA band (dark navy):** H2 `Ready to Take the Next Step?` ✏️ "Your health can't wait. Book an appointment today and experience world-class care, close to home." Buttons: `Book an Appointment` · `Call Us` · decorative ECG/heart motif per reference.

### 5.2 ABOUT (`/about`)

- Hero: eyebrow `ABOUT LIFELINE`, H1 `Caring for Nairobi Since 2005`, sub ✏️ "From a single medical clinic to a Level-5 hospital group with two branches — our story is Nairobi's story."
- **Our story** ✏️: "The Lifeline Group of Hospitals is a health center of excellence which seeks to transform patient care delivery. A duly incorporated Kenyan company (Companies Act, Cap 486), we began in 2005 as Estate Medical Clinic Limited, became Health Care Nursing Home in 2006, then Kahawa Wendani Hospital in 2009 — and today operate as The Lifeline Group of Hospitals with branches in Kahawa Wendani and Membley, Nairobi. We are a Level-5 institution with a multidisciplinary team committed to delivering the best patient care possible, on a 24-hour basis."
- **Mission / Vision / Values cards (icons):**
  - Vision 🎯: "To be the hospital of choice within Nairobi and the rest of Kenya — top-notch services founded on experienced people and state-of-the-art medical equipment, for individuals and corporate clients alike."
  - Mission 🤝: "To make quality private medical services exciting, affordable and easily accessible to low- and middle-income earners, growing into a one-stop shop for all medical services and equipment."
  - Values 💙 (✏️ formed from stated commitments): Compassion ("treat with love"), Excellence ("world-class technology"), Accessibility ("affordable and easy to reach"), Integrity ("trustworthy, high-quality service").
- **Leadership:** section `Our Leadership` — Salama Mugendi, Director (signature image + quote: "We aim at providing timely and efficient medical services, both inpatient and outpatient, across a wide range of services including general and specialized treatments and consultations."); Dr. Benson — Director, Lifeline Hospital.
- **Milestones timeline:** 2005 Estate Medical Clinic → 2006 Health Care Nursing Home → 2009 Kahawa Wendani Hospital → Today: The Lifeline Group of Hospitals, 2 branches, 16+ services.
- FAQ (4): history/ownership · branches · hours · how to visit. CTA band.

### 5.3 CLINICS HUB (`/clinics`)

- H1 `Specialty Clinics, One Hospital` · sub ✏️ "Plan a single visit — our clinics share one lab, one imaging suite and one patient record."
- 7 clinic cards (image, title, 1-line blurb, arrow): ENT · Cardiac · Dental · Eye Care · Pediatrics · Orthopedic · Physiotherapy.
- Cross-sell band "Not sure which clinic?" ✏️ "Start with a general consultation — we'll route you to the right specialist." + CTA.
- Mini-FAQ (3): walk-ins accepted? · referral needed? · clinic hours? ✏️ answers: walk-ins welcome 24/7; no referral needed for most clinics; clinics run daily with 24-hour backup care — call to confirm specialist hours.

### 5.4–5.10 CLINIC DETAIL PAGES (shared skeleton; per-page copy)

**FAQ SETS (per clinic, reused in JSON-LD):**

*ENT (/clinics/ent):* H1 `ENT Clinic in Nairobi`
- Overview ✏️: "Lifeline's ENT clinic provides superior, timely consultative and diagnostic care for ear, nose and throat conditions — for adults and children. Routine ENT checkups are especially important for children, who are most susceptible to ENT infections, and help detect and avert defects early in life."
- What we offer ✏️ bullets: ENT consultation & diagnosis · ear infection management · throat and tonsil assessment · nasal and sinus care · hearing concerns evaluation · pediatric ENT checkups.
- FAQs: ① "Do children need ENT checkups?" → "Yes — children are the most susceptible to ear, nose and throat infections. Routine checkups help detect and avert defects early in life." ② "Do I need an appointment?" → "Walk-ins are welcome, but booking by phone or form guarantees shorter waiting time." ③ "Where is the ENT clinic?" → "At our Kahawa Wendani branch, Thika Super Highway opposite Kahawa Barracks, Nairobi — open 24 hours." ④ "What conditions do you treat?" → "Ear infections, hearing concerns, tonsillitis and throat conditions, sinus and nasal problems, and other ENT conditions requiring diagnosis."

*Cardiac (/clinics/cardiac):* H1 `Cardiac Unit in Nairobi`
- Overview ✏️: "Heart disease affects more than just the heart. At Lifeline's cardiac unit we focus not only on the heart condition, but on the underlying cause — with specialists able to diagnose and treat cardiac conditions, supported by advanced diagnostic imaging on site."
- Offer ✏️: cardiac consultation · heart condition diagnosis · blood-pressure and cholesterol management · ECG-supported workups · imaging-backed cardiac evaluation (echocardiography via ultrasound, CT where indicated) · ongoing cardiac care plans.
- FAQs: ① "What heart symptoms should I never ignore?" → "Chest pain or pressure, shortness of breath, palpitations, dizziness or fainting, and swelling of the legs. If symptoms are severe, call our 24-hour emergency line immediately." ② "Do you have equipment to diagnose heart problems?" → "Yes. Our cardiac team is supported by on-site diagnostic imaging, including ultrasound and CT." ③ "Can heart disease be managed, not just treated?" → "Yes — we focus on the underlying cause, with care plans covering medication, lifestyle and follow-up." ④ "Is the cardiac unit open at night?" → "The hospital operates 24 hours; urgent cardiac cases are handled through our emergency unit at any time."

*Dental (/clinics/dental):* H1 `Dental Clinic in Nairobi`
- Overview ✏️: "Oral health is just as important as any other aspect of your health — poor oral health has been linked to heart and lung disease, diabetes, stroke and premature births. Lifeline's dental clinic combines great equipment with an excellent dental team to keep your whole mouth healthy."
- Offer list (verbatim from current site, corrected): Fillings · Root canal · Teeth cleaning · Fluoride therapy · Tooth replacement (dentures) · Dental X-rays · Restorative dentistry for decayed teeth · Extraction of erupted teeth and removal of fractured roots · Treatment of serious injuries to teeth and mouth soft tissues · Orthodontic treatment (correction of crooked teeth).
- FAQs: ① "What dental services do you offer?" → list above condensed. ② "Is poor oral health really linked to other diseases?" → "Yes — research links poor oral health to heart and lung disease, diabetes, stroke and premature births, and many diseases first show warning signs in the mouth." ③ "Do you do braces?" → "Yes — orthodontic treatment for the correction of crooked teeth." ④ "Are dental X-rays available on site?" → "Yes, dental X-rays are part of our in-house radiology services."

*Eye Care (/clinics/eye-care):* H1 `Eye Clinic in Nairobi`
- Overview ✏️: "Your eyes are among your most important organs — sensitive and deserving of great care. Lifeline's eye clinic has invested in modern ophthalmology equipment for excellent diagnosis and treatment, from routine checkups to advanced treatment."
- Offer ✏️: comprehensive eye exams · routine vision checkups · diagnosis of eye conditions · advanced eye treatment · eye care for children and adults · referral pathways for specialized ophthalmology.
- FAQs: ① "How often should I have my eyes checked?" → "Adults should have a routine eye exam at least every one to two years — earlier and more often if you have diabetes, hypertension or a family history of eye disease." ② "Do you treat children's eyes?" → "Yes, our clinic examines and treats both children and adults." ③ "What equipment do you use?" → "We have invested in modern ophthalmology equipment to enable excellent diagnosis and treatment." ④ "Can I just walk in for a checkup?" → "Yes — walk-ins are welcome 24/7, though booking shortens your wait."

*Pediatrics (/clinics/pediatrics):* H1 `Pediatric Clinic in Nairobi`
- Overview ✏️: "Our pediatric unit is committed to the healthy growth of your children — from conception to adulthood. Our pediatricians pay close attention to signs of illness, advise parents on immunization schedules, and follow up every diagnosis and treatment as conditions dictate."
- Offer ✏️: well-child checkups · immunization guidance · treatment of common childhood illnesses (colds, fevers) · growth and development monitoring · newborn and infant care · pediatric inpatient ward access.
- FAQs: ① "From what age do you see children?" → "From conception onwards — we support mothers through pregnancy (antenatal clinic) and care for children through to adulthood." ② "Do you advise on immunization?" → "Yes. Beyond treating common ailments such as colds, our pediatricians advise parents on any immunization their child needs." ③ "Is there a children's ward?" → "Yes — our pediatric ward cares for young inpatients, alongside male and female wards." ④ "Can my child be seen at night?" → "Yes, pediatric care is available 24 hours through the hospital."

*Orthopedic (/clinics/orthopedic):* H1 `Orthopedic Clinic in Nairobi`
- Overview ✏️: "Don't let an orthopedic condition hold back your life. Our orthopedic unit uses the latest diagnostic imaging to treat bone and ligament conditions — from diagnosis through surgery, post-surgery care and healing — with experienced, compassionate treatment using modern procedures and technologies."
- Offer ✏️: bone & joint consultation · fracture care · ligament injury management · diagnosis via blood tests, bone density tests, CT scans and ultrasound · orthopedic surgery & post-op care · physiotherapy-linked rehabilitation.
- FAQs: ① "What diagnostic tests do you use for orthopedic conditions?" → "Blood tests, bone density tests, CT scans and ultrasound, alongside digital X-ray." ② "Do you handle fractures?" → "Yes — from diagnosis to immobilization, surgery where needed, and rehabilitation." ③ "Is physiotherapy available after orthopedic treatment?" → "Yes — our on-site physiotherapy unit supports post-surgery recovery and healing." ④ "Do I need an appointment?" → "Walk-ins are welcome; booked visits guarantee specialist availability."

*Physiotherapy (/clinics/physiotherapy):* H1 `Physiotherapy Clinic in Nairobi`
- Overview ✏️: "Our physiotherapists combine modern technology with proven therapeutic methods to give patients the best physiotherapeutic treatment — relieving pain, restoring movement and speeding recovery."
- Offer ✏️: pain management · post-surgical rehabilitation · injury recovery programs · mobility and strength training · back and neck care · sports injury support.
- FAQs: ① "What conditions does physiotherapy help?" → "Back and neck pain, post-surgical recovery, sports and accident injuries, joint and muscle pain, and mobility problems." ② "Do I need a doctor's referral?" → "No — you can book directly, though we work closely with our orthopedic and surgical teams." ③ "How many sessions will I need?" → "It depends on your condition; your physiotherapist will assess and agree a plan with you at the first visit." ④ "Where do sessions take place?" → "At the hospital's physiotherapy unit, with inpatient and outpatient sessions available."

*(Each clinic page ends with 3 related-page cards + standard CTA band + emergency line.)*

### 5.11 SERVICES HUB (`/services`)

- H1 `Hospital Services in Nairobi, 24/7` · sub ✏️ "Everything from intensive care to pharmacy under one roof — inpatient and outpatient, day and night."
- 9 service cards + 1 clinics card. Intro quote from Director Dr. Benson (verbatim): "Here at Lifeline we offer a variety of services from Intensive Care units to Emergency services, Laboratory services, Pharmacy services, Radiology services, Theaters, Wards, Antenatal Clinics, Family Planning services, Nutrition Consultancy, Mother-Child Health Consultancy and many more services."
- Mini-FAQ (4): inpatient admission? (yes — male, female, pediatric wards) · imaging on site? (X-ray/US on site; CT/MRI at imaging center) · insurance? (subject to client's list) · visiting hours? (confirm with client).

### 5.12–5.20 SERVICE DETAIL PAGES (skeleton + per-page copy)

**Intensive Care `/services/intensive-care`** H1 `Intensive Care Unit in Nairobi`
- Overview ✏️: "People with life-threatening injuries or ailments need more than critical care — they need close, constant attention from highly trained experts. Lifeline's ICU provides exactly that, around the clock."
- Offer ✏️: 24/7 critical monitoring · life-support support equipment · post-surgical intensive care · emergency admissions from ER and ambulances · daily family updates protocol.
- FAQs: ① "When is a patient moved to ICU?" etc. → 4 Q&A on admission criteria, visiting, equipment, transfers.
- FAQs payload: ① "What is an ICU?" → "An Intensive Care Unit is a dedicated ward where patients with life-threatening conditions receive close and constant monitoring by highly trained health experts." ② "Is the ICU open 24 hours?" → "Yes — the ICU, like the whole hospital, operates on a 24-hour basis with staff on rotating shifts." ③ "Can family visit ICU patients?" → "Yes — coordinated visits are allowed; our team keeps families updated on their loved one's progress daily." ④ "How are ICU admissions handled?" → "Admissions come through our emergency unit, operating theatres or wards whenever a patient needs critical care."

**Emergency `/services/emergency`** H1 `24/7 Emergency & Ambulance Services in Nairobi`
- Overview ✏️: "Our ambulances are modern and fully equipped, with highly trained personnel ready to provide emergency services whenever they are needed — and our emergency room never closes."
- Offer ✏️: 24/7 emergency room · fully equipped ambulances (+ trained paramedic staff) · Accident & Emergency response · urgent admissions to ICU/wards · emergency line +254 711 420 359.
- FAQs: ① "Do you have ambulances?" → "Yes — modern, fully equipped ambulances staffed by highly trained personnel, available whenever needed." ② "What is the emergency number?" → "+254 711 420 359 or +254 714 313 138 — answered 24 hours a day." ③ "Which areas do ambulances cover?" → "Kahawa Wendani, Membley, Roysambu, Ruiru and the wider Thika Super Highway corridor in Nairobi." ④ "Can I walk into the ER without an appointment?" → "Absolutely — emergency care never requires an appointment and is available 24/7."

**Pharmacy `/services/pharmacy`** H1 `In-Hospital Pharmacy in Nairobi — Open 24 Hours`
- Overview ✏️: "The Lifeline Group of Hospitals runs a fully stocked in-house pharmacy to ensure our patients get their prescriptions before they leave — conveniently and reliably."
- Offer ✏️: prescription dispensing · inpatient medication · over-the-counter medicines · pharmacist guidance on dosage · 24-hour pharmaceutical access for emergencies.
- FAQs: ① "Is the pharmacy open at night?" → "Yes — the pharmacy operates on the hospital's 24-hour schedule." ② "Can I fill a prescription from an outside doctor?" → "Yes, valid prescriptions from qualified practitioners can be dispensed." ③ "Do you stock children's medicines?" → "Yes, including formulations for pediatric patients." ④ "Where is the pharmacy located?" → "Inside both hospital branches — no need to travel elsewhere after your consultation."

**Antenatal `/services/antenatal`** H1 `Antenatal & Mother-Child Clinic in Nairobi`
- Overview ✏️: "Visit our clinics for quality, affordable mother-and-child care. From pregnancy checkups to your baby's immunizations, our antenatal and mother-child health services walk with your family through every stage."
- Offer ✏️: antenatal (ANC) visits & pregnancy monitoring · maternal health counseling · mother-child health consultancy · child immunization guidance · ultrasound in pregnancy · links to family planning services.
- FAQs: ① "When should I start antenatal visits?" → "As soon as you learn you are pregnant — early and regular antenatal visits protect both mother and baby." ② "Do you do pregnancy ultrasounds?" → "Yes — our radiology unit provides ultrasound scans, which doctors use to examine the fetus safely (no radiation)." ③ "How much do visits cost?" → "We keep mother-child services affordable for low- and middle-income families; call us for the current fee schedule." ④ "Do you provide family planning too?" → "Yes — see our Family Planning services for counseling and methods, coordinated with your antenatal care."

**Laboratory `/services/laboratory`** H1 `Medical Laboratory in Nairobi — Fast, Accurate Tests`
- Overview ✏️: "State-of-the-art laboratories enable us to carry out a wide range of laboratory tests, personalized to every patient's needs — 24 hours a day."
- Offer ✏️: full hematology & biochemistry · blood tests supporting cardiac & orthopedic diagnosis · microbiology · rapid tests for emergencies · sample pickup for inpatients.
- FAQs: ① "Is the laboratory open 24 hours?" → "Yes — emergencies don't wait, so neither does our lab." ② "How long do results take?" → "Many routine tests are processed same-day; your doctor will tell you exactly when to expect results." ③ "Do I need to prepare for a blood test?" → "Some tests (e.g. fasting blood sugar) require preparation; our staff will inform you when booking or on the doctor's request form." ④ "Are lab tests available for children?" → "Yes, with pediatric sample collection handled gently by experienced staff."

**Radiology `/services/radiology`** H1 `CT Scan, MRI, X-Ray & Ultrasound in Nairobi`
- Overview ✏️: "Our radiology unit carries out digital X-ray, ultrasound, mammography — with CT scans at our imaging facility and excellent MRI facilities at our imaging center — for fast, accurate diagnosis of a wide range of conditions."
- Modality blocks (from verbatim site content, corrected):
  - **Digital X-Ray:** ✏️ "X-ray exams are painless, fast and easy, using a very small amount of radiation. We use them to look for broken bones, lung and abdominal problems, dental cavities and more. Bones absorb X-rays most and appear white; soft tissues appear gray; air appears black."
  - **CT Scan (Membley/Eastleigh imaging):** ✏️ "Computed tomography uses special X-ray equipment and powerful computers to create cross-sectional images of your body. Typical uses: broken bones, cancers, blood clots, signs of heart disease, and internal bleeding."
  - **MRI:** ✏️ "Magnetic resonance imaging uses a large magnet and radio waves to look at organs and structures inside your body — from torn ligaments to tumors."
  - **Ultrasound:** ✏️ "Ultrasound views the heart, blood vessels, kidneys, liver and other organs — and examines the fetus during pregnancy — without radiation. A transducer sends sound waves that bounce off internal tissues to create images."
  - **Mammography:** ✏️ "A mammogram is a special breast X-ray that can show tumors long before they are large enough to feel — detecting breast cancer early, when it matters most. It takes only a few seconds and can save your life."
- FAQs: ① "Do you have MRI in Nairobi?" → "Yes — excellent MRI facilities at our imaging center, used to diagnose conditions from torn ligaments to tumors." ② "Where can I get a CT scan?" → "At our imaging facility (Eastleigh/Membley branch)." ③ "Are X-rays safe?" → "Yes — the radiation exposure during an X-ray exam is small, and exams are painless, fast and easy." ④ "Can I get a mammogram?" → "Yes. Our medical team recommends mammograms especially for women with symptoms or high risk; our physicians advise when to start and how often."

**Family Planning `/services/family-planning`** H1 `Family Planning Services in Nairobi`
- Overview ✏️: "Family planning today involves a wide variety of methods and practices. Our counselors help you choose confidently, confidentially and comfortably."
- Offer ✏️: counseling on all modern methods · short- & long-acting contraceptives · postpartum family planning · couples counseling · integration with antenatal care.
- FAQs: ① "Is family planning confidential?" → "Completely — consultations are private and your information is protected." ② "Which methods are available?" → "A wide variety of modern methods; your counselor will explain options and help you choose what suits you." ③ "Can I start family planning after delivery?" → "Yes — postpartum family planning is offered and coordinated with your maternity care." ④ "Is it affordable?" → "Yes — accessibility for low- and middle-income families is core to our mission."

**Nutrition `/services/nutrition`** H1 `Nutrition & Dietetics Clinic in Nairobi`
- Overview ✏️: "Diet is one of the most important weapons when it comes to health issues. Our nutrition consultants build personalized plans that treat food as medicine — practical, affordable and Kenyan."
- Offer ✏️: dietetic consultations · weight management · nutrition therapy for diabetes & hypertension · antenatal nutrition · pediatric nutrition guidance · wellness meal plans.
- FAQs: ① "What happens in a nutrition consultation?" → "Assessment of your health, diet and goals, followed by a personalized meal plan and follow-up sessions." ② "Can nutrition help manage diabetes?" → "Yes — nutrition therapy is central to managing diabetes, hypertension and related conditions, alongside medical care." ③ "Do you offer meal plans for pregnancy?" → "Yes — antenatal nutrition is one of our core consultations." ④ "How often should I visit?" → "Typically an initial consult plus reviews every 2–4 weeks, adjusted to your plan."

**Wards `/services/wards`** H1 `Inpatient Wards in Nairobi — Comfortable 24/7 Care`
- Overview ✏️: "Lifeline provides the best inpatient services — including meals, general nursing and medication as part of your inpatient treatment — in male, female and pediatric wards."
- Offer ✏️: male & female wards · pediatric ward · 24-hour nursing care · meals & medication included · daily doctor rounds · ICU escalation on site.
- FAQs: ① "What's included in inpatient care?" → "General nursing, meals and drugs as part of your inpatient treatment." ② "Is there a children's ward?" → "Yes — a dedicated pediatric ward for young inpatients." ③ "Can a relative stay overnight?" → "Partner/caregiver arrangements per ward policy — call us to confirm current visiting rules." ④ "What if my condition worsens at night?" → "Staff are on duty 24 hours, and the ICU is on site for escalation."

### 5.21 GALLERY (`/gallery`)
H1 `Inside Lifeline Group of Hospitals` · sub ✏️ "A look inside our facilities — ICU, theaters, radiology, laboratory, pharmacy, wards and clinics across our Nairobi branches."
- Filter tabs: `All` · `Facilities` · `Equipment & Services` · `Clinics` — 30+ images with descriptive alts (see 06-ASSET-INVENTORY.md). Lightbox.

### 5.22 CONTACT (`/contact`)
H1 `Contact Us` · sub ✏️ "Whatever you need — an appointment, an emergency, or just directions — we are here 24 hours."
- **Form** (fields: First name*, Last name*, Email*, Phone*, Branch (Kahawa Wendani/Membley), Service (dropdown of 16), Preferred date, Message; consent checkbox; submit → success state): eyebrow `What are you waiting for…` H2 `Make an appointment`. Reassurance line: "Our team will confirm your appointment by phone or email."
- **Branch cards** (2) with Maps embeds, NAP identical to schema.
- **Quick contact rows:** Call +254 711 420 359 / +254 714 313 138 · info@thelifelinegroupofhospitals.org · P.O. Box 15506-00100, Nairobi · Opening hours: 24 hours, every day.
- FAQ (3): where are you located / how do I book / do you take walk-ins.

### 5.23 FOOTER (all pages)
Col 1: logo + mission blurb (as current, corrected) + socials (real URLs pending). Col 2 Quick Links: Home, About, Clinics, Services, Gallery, Contact. Col 3 Our Clinics: 7 links. Col 4 Our Services: 9 links (include Wards). Col 5 Contact: address, phones, email, hours. Legal line: © 2026 The Lifeline Group of Hospitals. All rights reserved. · Privacy Policy · disclaimer: "This website provides general information and does not replace professional medical advice. In an emergency, call us immediately."

### 5.24 HEADER
Logo · Home · About Us · Clinics (dropdown 7) · Services (dropdown 9) · Gallery · Contact · phone chip `+254 711 420 359` (tel:) · `Book Appointment` button → /contact. Mobile: hamburger → full-screen nav + call/bar.

### 5.25 LEGAL / PRIVACY (`/privacy`)
Short policy: collection (form data), use (responding to requests), no sale of data, data subject contact email, medical disclaimer. Placeholder for DPO name.

### 5.26 404
"Page not found — but we are." Links to Home/Services/Contact + emergency call button.
