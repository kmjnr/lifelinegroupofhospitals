import type { DeptRecord } from "./types";

/** The 9 hospital services. Copy per plan 02-SITEMAP-CONTENT.md §5.12–5.20. */
export const SERVICES: DeptRecord[] = [
  {
    kind: "service",
    slug: "intensive-care",
    navLabel: "Intensive Care Unit",
    name: "Intensive Care Unit (ICU)",
    title: "Intensive Care Unit (ICU) Nairobi — 24/7 Critical Care",
    metaDescription:
      "24-hour ICU in Nairobi with close monitoring by trained critical-care staff for life-threatening injuries and illness. Call +254 711 420 359.",
    eyebrow: "Critical Care",
    h1: "Intensive Care Unit in Nairobi",
    heroLine:
      "Close, constant attention from highly trained experts — around the clock.",
    overview:
      "People with life-threatening injuries or ailments need more than critical care — they need close, constant attention from highly trained experts. The Lifeline Group of Hospitals operates a 24-hour Intensive Care Unit in Nairobi with dedicated monitoring and life-support equipment, admitting patients directly from our emergency room, operating theatres and wards.",
    imageKey: "svc-icu",
    offerLabel: "What our ICU provides",
    offer: [
      "24/7 critical monitoring by trained ICU staff",
      "Life-support and monitoring equipment",
      "Post-surgical intensive care",
      "Emergency admissions from the ER and ambulances",
      "Daily family updates from the care team",
      "On-site escalation to specialists at any hour",
    ],
    whyUs: [
      "ICU staff work rotating shifts — the unit never closes",
      "Direct pipeline from our 24-hour emergency unit",
      "Laboratory and imaging results available without leaving the hospital",
      "Families kept informed with structured daily updates",
    ],
    faqs: [
      {
        q: "What is an ICU?",
        a: "An Intensive Care Unit is a dedicated ward where patients with life-threatening conditions receive close and constant monitoring by highly trained health experts.",
      },
      {
        q: "Is the ICU open 24 hours?",
        a: "Yes — the ICU, like the whole hospital, operates on a 24-hour basis with staff on rotating shifts.",
      },
      {
        q: "Can family visit ICU patients?",
        a: "Yes — coordinated visits are allowed, and our team keeps families updated on their loved one's progress daily.",
      },
      {
        q: "How are ICU admissions handled?",
        a: "Admissions come through our emergency unit, operating theatres or wards whenever a patient needs critical care. Call +254 711 420 359 in an emergency.",
      },
    ],
    related: [
      { label: "Emergency Services", href: "/services/emergency", imageKey: "svc-emergency" },
      { label: "Laboratory Services", href: "/services/laboratory", imageKey: "svc-laboratory" },
      { label: "Ward Services", href: "/services/wards", imageKey: "svc-wards" },
    ],
  },
  {
    kind: "service",
    slug: "emergency",
    navLabel: "Emergency Services",
    name: "Emergency & Ambulance Services",
    title: "24/7 Emergency & Ambulance Services Nairobi | Lifeline",
    metaDescription:
      "Emergency room and fully equipped ambulances in Nairobi, 24 hours a day. Fast response along Thika Super Highway, Kahawa Wendani & Membley.",
    eyebrow: "Emergency Care",
    h1: "24/7 Emergency & Ambulance Services in Nairobi",
    heroLine:
      "Modern, fully equipped ambulances and an emergency room that never closes.",
    overview:
      "Our ambulances are modern and fully equipped, with highly trained personnel ready to provide emergency services whenever they are needed — and our emergency room never closes. The Lifeline Group of Hospitals answers emergency calls 24 hours a day across Kahawa Wendani, Membley, Roysambu, Ruiru and the wider Thika Super Highway corridor in Nairobi.",
    imageKey: "svc-emergency",
    offerLabel: "Emergency services we provide",
    offer: [
      "24/7 emergency room — no appointment needed",
      "Modern, fully equipped ambulances",
      "Highly trained emergency personnel",
      "Accident & emergency response",
      "Urgent admissions to ICU and wards",
      "Dedicated 24-hour emergency line",
    ],
    whyUs: [
      "Emergency line answered 24 hours, every day",
      "Ambulances staffed by trained personnel, fully equipped",
      "ER, ICU, laboratory, pharmacy and imaging all on site",
      "Easy access from Thika Super Highway at Kahawa Wendani and Membley",
    ],
    faqs: [
      {
        q: "Do you have ambulances?",
        a: "Yes — modern, fully equipped ambulances staffed by highly trained personnel, available whenever they are needed.",
      },
      {
        q: "What is the emergency number?",
        a: "Call +254 711 420 359 or +254 714 313 138 — the line is answered 24 hours a day, every day.",
      },
      {
        q: "Which areas do your ambulances cover?",
        a: "Kahawa Wendani, Membley, Roysambu, Ruiru and the wider Thika Super Highway corridor in Nairobi.",
      },
      {
        q: "Can I walk into the ER without an appointment?",
        a: "Absolutely — emergency care never requires an appointment and is available 24 hours a day at both branches.",
      },
    ],
    related: [
      { label: "Intensive Care Unit", href: "/services/intensive-care", imageKey: "svc-icu" },
      { label: "Radiology & Imaging", href: "/services/radiology", imageKey: "svc-radiology" },
      { label: "Contact & Branches", href: "/contact", imageKey: "usp-easy-access" },
    ],
  },
  {
    kind: "service",
    slug: "pharmacy",
    navLabel: "Pharmacy Services",
    name: "Pharmacy Services",
    title: "Hospital Pharmacy Nairobi — In-House, 24 Hours | Lifeline",
    metaDescription:
      "Fully stocked in-house pharmacy in Nairobi so prescriptions are filled before you leave — open 24 hours at both Lifeline branches.",
    eyebrow: "Pharmaceutical Care",
    h1: "In-Hospital Pharmacy in Nairobi — Open 24 Hours",
    heroLine: "Fully stocked, in-house — so you never leave without your prescription.",
    overview:
      "The Lifeline Group of Hospitals runs a fully stocked in-house pharmacy to ensure our patients get their prescriptions before they leave — conveniently and reliably. With pharmacists on the hospital's 24-hour schedule at both Nairobi branches, even late-night emergencies are covered.",
    imageKey: "svc-pharmacy",
    offerLabel: "Pharmacy services",
    offer: [
      "Prescription dispensing for outpatients",
      "Inpatient medication as part of ward care",
      "Over-the-counter medicines",
      "Pharmacist guidance on dosage and use",
      "Pediatric formulations for children",
      "24-hour pharmaceutical access for emergencies",
    ],
    whyUs: [
      "Inside the hospital — no separate trip after your consultation",
      "Open on the hospital's 24-hour schedule",
      "Dispenses valid prescriptions from outside doctors too",
      "Stocked for both adult and pediatric needs",
    ],
    faqs: [
      {
        q: "Is the pharmacy open at night?",
        a: "Yes — the pharmacy operates on the hospital's 24-hour schedule at both branches.",
      },
      {
        q: "Can I fill a prescription from an outside doctor?",
        a: "Yes — valid prescriptions from qualified practitioners can be dispensed at our pharmacy.",
      },
      {
        q: "Do you stock children's medicines?",
        a: "Yes, including pediatric formulations suitable for children of all ages.",
      },
      {
        q: "Where is the pharmacy located?",
        a: "Inside both hospital branches — Kahawa Wendani (main) and Membley — so prescriptions are filled before you leave.",
      },
    ],
    related: [
      { label: "Laboratory Services", href: "/services/laboratory", imageKey: "svc-laboratory" },
      { label: "Ward Services", href: "/services/wards", imageKey: "svc-wards" },
      { label: "All Services", href: "/services", imageKey: "clinics-hub" },
    ],
  },
  {
    kind: "service",
    slug: "antenatal",
    navLabel: "Antenatal Clinic",
    name: "Antenatal & Mother-Child Clinic",
    title: "Antenatal Clinic Nairobi — Pregnancy & Mother-Child Care",
    metaDescription:
      "Antenatal and mother-child health clinic in Nairobi: pregnancy checkups, maternity guidance, immunization and family planning — affordable and caring.",
    eyebrow: "Mother & Child",
    h1: "Antenatal & Mother-Child Clinic in Nairobi",
    heroLine: "Quality, affordable care for mothers and children — every step of the way.",
    overview:
      "Visit our clinics for quality, affordable mother-and-child care. From pregnancy checkups to your baby's immunizations, the antenatal and mother-child health services at The Lifeline Group of Hospitals walk with your family through every stage — with ultrasound scans done safely on site.",
    imageKey: "svc-antenatal",
    offerLabel: "Mother & child services",
    offer: [
      "Antenatal (ANC) visits and pregnancy monitoring",
      "Obstetric ultrasound scans — no radiation",
      "Maternal health counseling",
      "Mother-child health consultancy",
      "Child immunization guidance",
      "Links to family planning services",
    ],
    whyUs: [
      "Affordable care for low- and middle-income families — our core mission",
      "Ultrasound in pregnancy performed in-house",
      "Pediatricians on site for your newborn's care",
      "Coordinated with our family planning and pediatric clinics",
    ],
    faqs: [
      {
        q: "When should I start antenatal visits?",
        a: "As soon as you learn you are pregnant — early and regular antenatal visits protect both mother and baby.",
      },
      {
        q: "Do you do pregnancy ultrasounds?",
        a: "Yes — our radiology unit provides ultrasound scans, which doctors use to examine the fetus safely, with no radiation exposure.",
      },
      {
        q: "How much do visits cost?",
        a: "We keep mother-child services affordable for low- and middle-income families. Call +254 711 420 359 for the current fee schedule.",
      },
      {
        q: "Do you provide family planning too?",
        a: "Yes — see our Family Planning services for counseling and methods, coordinated with your antenatal care.",
      },
    ],
    related: [
      { label: "Family Planning", href: "/services/family-planning", imageKey: "svc-family-planning" },
      { label: "Pediatrics Clinic", href: "/clinics/pediatrics", imageKey: "clinic-pediatrics" },
      { label: "Nutrition Consultancy", href: "/services/nutrition", imageKey: "svc-nutrition" },
    ],
  },
  {
    kind: "service",
    slug: "laboratory",
    navLabel: "Laboratory Services",
    name: "Laboratory Services",
    title: "Medical Laboratory Nairobi — Tests, 24/7 | Lifeline",
    metaDescription:
      "24-hour medical laboratory in Nairobi delivering a wide range of diagnostic tests with fast, accurate results tailored to your doctor's request.",
    eyebrow: "Diagnostics",
    h1: "Medical Laboratory in Nairobi — Fast, Accurate Tests",
    heroLine: "State-of-the-art labs, personalized testing — 24 hours a day.",
    overview:
      "State-of-the-art laboratories enable us to carry out a wide range of laboratory tests, personalized to every patient's needs — 24 hours a day. From routine blood work to emergency diagnostics, our laboratory supports doctors across all Lifeline clinics with fast, accurate results.",
    imageKey: "svc-laboratory",
    offerLabel: "Laboratory services",
    offer: [
      "Full hematology and biochemistry tests",
      "Blood tests supporting cardiac and orthopedic diagnosis",
      "Microbiology and cultures",
      "Rapid tests for emergencies",
      "Sample collection for inpatients on the wards",
      "Pediatric sample collection handled gently",
    ],
    whyUs: [
      "Open 24 hours — emergencies never wait",
      "Same-day processing for most routine tests",
      "Results delivered directly to your consulting doctor",
      "State-of-the-art equipment, personalized to every patient",
    ],
    faqs: [
      {
        q: "Is the laboratory open 24 hours?",
        a: "Yes — emergencies don't wait, so neither does our laboratory. It runs on the hospital's 24-hour schedule.",
      },
      {
        q: "How long do results take?",
        a: "Many routine tests are processed same-day; your doctor will tell you exactly when to expect results.",
      },
      {
        q: "Do I need to prepare for a blood test?",
        a: "Some tests (such as fasting blood sugar) require preparation. Our staff will inform you when booking or on the doctor's request form.",
      },
      {
        q: "Are lab tests available for children?",
        a: "Yes — pediatric sample collection is handled gently by experienced staff.",
      },
    ],
    related: [
      { label: "Radiology & Imaging", href: "/services/radiology", imageKey: "svc-radiology" },
      { label: "Pharmacy Services", href: "/services/pharmacy", imageKey: "svc-pharmacy" },
      { label: "Intensive Care Unit", href: "/services/intensive-care", imageKey: "svc-icu" },
    ],
  },
  {
    kind: "service",
    slug: "radiology",
    navLabel: "Radiology Services",
    name: "Radiology & Medical Imaging",
    title: "CT Scan, MRI, X-Ray & Ultrasound in Nairobi | Lifeline",
    metaDescription:
      "Digital medical imaging in Nairobi: X-ray, CT scans, MRI, ultrasound and mammography. Walk in or book — fast, accurate results.",
    eyebrow: "Medical Imaging",
    h1: "CT Scan, MRI, X-Ray & Ultrasound in Nairobi",
    heroLine: "Digital imaging for fast, accurate diagnosis — painless and easy.",
    overview:
      "Our radiology unit in Nairobi carries out digital X-ray, ultrasound and mammography — with CT scans at our imaging facility and excellent MRI facilities at our imaging center — for fast, accurate diagnosis of a wide range of conditions. X-ray exams are painless, fast and easy, using a very small amount of radiation.",
    imageKey: "svc-radiology",
    offerLabel: "Imaging services",
    offer: [
      "Digital X-ray — bones, lungs, abdomen, dental",
      "CT scans at our imaging facility — broken bones, cancers, blood clots, internal bleeding, signs of heart disease",
      "MRI scans at our imaging center — from torn ligaments to tumors",
      "Ultrasound — heart, vessels, kidneys, liver, pregnancy (no radiation)",
      "Mammography — early breast cancer detection in seconds",
      "Reports read by experienced clinicians",
    ],
    whyUs: [
      "Full modality range: X-ray, CT, MRI, ultrasound, mammography",
      "Painless exams with minimal radiation exposure",
      "Imaging results feed directly into your consultation",
      "Available 24 hours through the hospital",
    ],
    faqs: [
      {
        q: "Do you have MRI in Nairobi?",
        a: "Yes — excellent MRI facilities at our imaging center, used to diagnose conditions from torn ligaments to tumors.",
      },
      {
        q: "Where can I get a CT scan?",
        a: "At our imaging facility, which uses X-ray technology and powerful computers to create cross-sectional images of your body.",
      },
      {
        q: "Are X-rays safe?",
        a: "Yes — the radiation exposure during an X-ray exam is small, and exams are painless, fast and easy. Bones appear white, soft tissues gray, and air black on the radiograph.",
      },
      {
        q: "Can I get a mammogram?",
        a: "Yes. A mammogram is a special breast X-ray that can show tumors long before they are large enough to feel — it takes only a few seconds and can save your life. Our physicians advise when to start and how often.",
      },
    ],
    related: [
      { label: "Laboratory Services", href: "/services/laboratory", imageKey: "svc-laboratory" },
      { label: "Orthopedic Unit", href: "/clinics/orthopedic", imageKey: "clinic-orthopedic" },
      { label: "Antenatal Clinic", href: "/services/antenatal", imageKey: "svc-antenatal" },
    ],
  },
  {
    kind: "service",
    slug: "family-planning",
    navLabel: "Family Planning",
    name: "Family Planning Services",
    title: "Family Planning Services Nairobi — Counseling & Methods",
    metaDescription:
      "Confidential family planning in Nairobi: counseling and a full range of modern contraceptive methods with qualified, non-judgmental providers.",
    eyebrow: "Reproductive Health",
    h1: "Family Planning Services in Nairobi",
    heroLine: "Comfortable, confidential counseling to help you choose with confidence.",
    overview:
      "Family planning in the modern day involves a wide variety of methods and practices. Our counselors at The Lifeline Group of Hospitals help you choose confidently, confidentially and comfortably — with all consultations private and your information protected.",
    imageKey: "svc-family-planning",
    offerLabel: "Family planning services",
    offer: [
      "Counseling on all modern contraceptive methods",
      "Short-acting and long-acting reversible contraceptives",
      "Postpartum family planning",
      "Couples counseling",
      "Integration with antenatal and mother-child care",
      "Follow-up and method-switching support",
    ],
    whyUs: [
      "Completely confidential consultations",
      "Qualified, non-judgmental providers",
      "Coordinated with antenatal and maternity services",
      "Affordable — accessibility is core to our mission",
    ],
    faqs: [
      {
        q: "Is family planning confidential?",
        a: "Completely — consultations are private and your information is protected.",
      },
      {
        q: "Which methods are available?",
        a: "A wide variety of modern methods. Your counselor will explain the options and help you choose what suits you best.",
      },
      {
        q: "Can I start family planning after delivery?",
        a: "Yes — postpartum family planning is offered and coordinated with your maternity care.",
      },
      {
        q: "Is it affordable?",
        a: "Yes — making quality private medical services affordable for low- and middle-income families is core to our mission.",
      },
    ],
    related: [
      { label: "Antenatal Clinic", href: "/services/antenatal", imageKey: "svc-antenatal" },
      { label: "Nutrition Consultancy", href: "/services/nutrition", imageKey: "svc-nutrition" },
      { label: "Pediatrics Clinic", href: "/clinics/pediatrics", imageKey: "clinic-pediatrics" },
    ],
  },
  {
    kind: "service",
    slug: "nutrition",
    navLabel: "Nutrition Consultancy",
    name: "Nutrition & Dietetics Consultancy",
    title: "Nutrition Clinic Nairobi — Dietitian Consultation | Lifeline",
    metaDescription:
      "Nutrition and dietetic consultancy in Nairobi: personalized meal plans and nutrition therapy for diabetes, hypertension, pregnancy and wellness.",
    eyebrow: "Nutrition & Wellness",
    h1: "Nutrition & Dietetics Clinic in Nairobi",
    heroLine: "Diet is one of the most important weapons against health issues.",
    overview:
      "Diet is one of the most important weapons when it comes to health issues. Our nutrition consultants at The Lifeline Group of Hospitals build personalized plans that treat food as medicine — practical, affordable and suited to Kenyan households.",
    imageKey: "svc-nutrition",
    offerLabel: "Nutrition services",
    offer: [
      "One-on-one dietetic consultations",
      "Weight management programs",
      "Nutrition therapy for diabetes and hypertension",
      "Antenatal nutrition guidance",
      "Pediatric nutrition support",
      "Personalized, practical meal plans",
    ],
    whyUs: [
      "Plans built for real Kenyan meals and budgets",
      "Integrated with your medical care — diabetes, hypertension, pregnancy",
      "Follow-up sessions that keep you on track",
      "Clinic located inside the hospital, with lab results on hand",
    ],
    faqs: [
      {
        q: "What happens in a nutrition consultation?",
        a: "An assessment of your health, diet and goals, followed by a personalized meal plan and scheduled follow-up sessions.",
      },
      {
        q: "Can nutrition help manage diabetes?",
        a: "Yes — nutrition therapy is central to managing diabetes, hypertension and related conditions, alongside medical care.",
      },
      {
        q: "Do you offer meal plans for pregnancy?",
        a: "Yes — antenatal nutrition is one of our core consultations, coordinated with your antenatal clinic visits.",
      },
      {
        q: "How often should I visit?",
        a: "Typically an initial consultation plus reviews every two to four weeks, adjusted to your plan and progress.",
      },
    ],
    related: [
      { label: "Antenatal Clinic", href: "/services/antenatal", imageKey: "svc-antenatal" },
      { label: "Laboratory Services", href: "/services/laboratory", imageKey: "svc-laboratory" },
      { label: "Physiotherapy", href: "/clinics/physiotherapy", imageKey: "clinic-physiotherapy" },
    ],
  },
  {
    kind: "service",
    slug: "wards",
    navLabel: "Ward Services",
    name: "Inpatient Wards",
    title: "Inpatient Wards Nairobi — Comfortable 24/7 Care | Lifeline",
    metaDescription:
      "Inpatient wards in Nairobi with male, female and pediatric wings — nursing care, meals and medication included in your inpatient treatment.",
    eyebrow: "Inpatient Care",
    h1: "Inpatient Wards in Nairobi — Comfortable 24/7 Care",
    heroLine: "Nursing care, meals and medication — all part of your inpatient treatment.",
    overview:
      "The Lifeline Group of Hospitals provides the best inpatient services — including meals, general nursing and medication as part of your inpatient treatment — in comfortable male, female and pediatric wards, with nurses on duty 24 hours and the ICU on site for escalation.",
    imageKey: "svc-wards",
    offerLabel: "Ward services",
    offer: [
      "Male and female wards",
      "Dedicated pediatric ward for children",
      "24-hour nursing care",
      "Meals and medication included in inpatient treatment",
      "Daily doctor rounds",
      "On-site ICU escalation when needed",
    ],
    whyUs: [
      "Nurses on duty around the clock",
      "Children cared for in their own pediatric ward",
      "Meals, nursing and medication bundled in treatment",
      "Laboratory, imaging and pharmacy a corridor away",
    ],
    faqs: [
      {
        q: "What is included in inpatient care?",
        a: "General nursing, meals and drugs are included as part of your inpatient treatment at Lifeline.",
      },
      {
        q: "Is there a children's ward?",
        a: "Yes — a dedicated pediatric ward cares for young inpatients.",
      },
      {
        q: "Can a relative stay overnight?",
        a: "Caregiver arrangements follow ward policy — call +254 711 420 359 to confirm current visiting rules.",
      },
      {
        q: "What if my condition worsens at night?",
        a: "Staff are on duty 24 hours, and the ICU is on site for immediate escalation.",
      },
    ],
    related: [
      { label: "Intensive Care Unit", href: "/services/intensive-care", imageKey: "svc-icu" },
      { label: "Pharmacy Services", href: "/services/pharmacy", imageKey: "svc-pharmacy" },
      { label: "Emergency Services", href: "/services/emergency", imageKey: "svc-emergency" },
    ],
  },
];

export const SERVICE_BY_SLUG = Object.fromEntries(
  SERVICES.map((s) => [s.slug, s]),
) as Record<string, DeptRecord>;
