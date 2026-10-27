import type { DeptRecord } from "./types";

/** The 7 specialized clinics. Copy per plan 02-SITEMAP-CONTENT.md §5.4–5.10. */
export const CLINICS: DeptRecord[] = [
  {
    kind: "clinic",
    slug: "ent",
    navLabel: "ENT Services",
    name: "ENT Services",
    title: "ENT Clinic Nairobi — Ear, Nose & Throat Care | Lifeline",
    metaDescription:
      "Consultative and diagnostic ENT care in Nairobi for adults and children. Ear, nose and throat checkups, early defect detection. Open 24 hours.",
    eyebrow: "Specialized Clinic",
    h1: "ENT Clinic in Nairobi",
    heroLine:
      "Superior, timely consultative and diagnostic care for ear, nose and throat.",
    overview:
      "Lifeline's ENT clinic provides superior, timely consultative and diagnostic care for ear, nose and throat conditions — for adults and children. Routine ENT checkups are especially important for children, who are most susceptible to ENT infections, and help detect and avert defects early in life.",
    imageKey: "clinic-ent",
    offerLabel: "ENT services",
    offer: [
      "ENT consultation and diagnosis",
      "Ear infection management",
      "Throat and tonsil assessment",
      "Nasal and sinus care",
      "Hearing concerns evaluation",
      "Pediatric ENT checkups",
    ],
    whyUs: [
      "Routine checkups help detect and avert defects early in life",
      "Care for both adults and children",
      "Backed by on-site laboratory and imaging",
      "Available 24 hours through the hospital",
    ],
    faqs: [
      {
        q: "Do children need ENT checkups?",
        a: "Yes — children are the most susceptible to ear, nose and throat infections. Routine checkups help detect and avert defects early in life.",
      },
      {
        q: "Do I need an appointment?",
        a: "Walk-ins are welcome, but booking by phone or through our form guarantees a shorter waiting time.",
      },
      {
        q: "Where is the ENT clinic?",
        a: "At our Kahawa Wendani branch, Thika Super Highway opposite Kahawa Barracks, Nairobi — open 24 hours.",
      },
      {
        q: "What conditions do you treat?",
        a: "Ear infections, hearing concerns, tonsillitis and throat conditions, sinus and nasal problems, and other ENT conditions requiring diagnosis.",
      },
    ],
    related: [
      { label: "Pediatrics", href: "/clinics/pediatrics", imageKey: "clinic-pediatrics" },
      { label: "Eye Care", href: "/clinics/eye-care", imageKey: "clinic-eye" },
      { label: "Dental Services", href: "/clinics/dental", imageKey: "clinic-dental" },
    ],
  },
  {
    kind: "clinic",
    slug: "cardiac",
    navLabel: "Cardiac Unit",
    name: "Cardiac Unit",
    title: "Cardiac Unit Nairobi — Heart Diagnosis & Care | Lifeline",
    metaDescription:
      "Heart care in Nairobi: cardiac diagnosis and treatment supported by on-site imaging — ECG-guided workups, CT and ultrasound. Don't wait on chest symptoms.",
    eyebrow: "Specialized Clinic",
    h1: "Cardiac Unit in Nairobi",
    heroLine:
      "We focus not only on the heart condition, but on the underlying cause.",
    overview:
      "Heart disease affects more than just the heart. At Lifeline's cardiac unit we focus not only on the heart condition, but on the underlying cause — with specialists able to diagnose and treat cardiac conditions, supported by advanced diagnostic imaging including CT and ultrasound on site.",
    imageKey: "clinic-cardiac",
    offerLabel: "Cardiac services",
    offer: [
      "Cardiac consultation and diagnosis",
      "Blood pressure and cholesterol management",
      "ECG-supported cardiac workups",
      "Imaging-backed evaluation — ultrasound and CT where indicated",
      "Ongoing cardiac care plans",
      "Emergency cardiac response through the ER",
    ],
    whyUs: [
      "Focus on the underlying cause, not just symptoms",
      "Advanced diagnostic imaging on site",
      "Specialists able to diagnose and treat cardiac conditions",
      "24-hour emergency backup for acute heart symptoms",
    ],
    faqs: [
      {
        q: "What heart symptoms should I never ignore?",
        a: "Chest pain or pressure, shortness of breath, palpitations, dizziness or fainting, and swelling of the legs. If symptoms are severe, call our 24-hour emergency line immediately.",
      },
      {
        q: "Do you have equipment to diagnose heart problems?",
        a: "Yes — our cardiac team is supported by on-site diagnostic imaging, including ultrasound and CT.",
      },
      {
        q: "Can heart disease be managed, not just treated?",
        a: "Yes — we focus on the underlying cause, with care plans covering medication, lifestyle and follow-up.",
      },
      {
        q: "Is the cardiac unit open at night?",
        a: "The hospital operates 24 hours; urgent cardiac cases are handled through our emergency unit at any time.",
      },
    ],
    related: [
      { label: "Radiology & Imaging", href: "/services/radiology", imageKey: "svc-radiology" },
      { label: "Laboratory Services", href: "/services/laboratory", imageKey: "svc-laboratory" },
      { label: "Physiotherapy", href: "/clinics/physiotherapy", imageKey: "clinic-physiotherapy" },
    ],
  },
  {
    kind: "clinic",
    slug: "dental",
    navLabel: "Dental Services",
    name: "Dental Services",
    title: "Dental Clinic Nairobi — Fillings, Root Canal, Braces | Lifeline",
    metaDescription:
      "Full dental services in Nairobi: fillings, root canal, cleaning, fluoride therapy, extractions, dentures, dental x-rays and orthodontics. Book today.",
    eyebrow: "Specialized Clinic",
    h1: "Dental Clinic in Nairobi",
    heroLine:
      "Oral health is just as important as any other aspect of your health.",
    overview:
      "Oral health care is just as important as any other aspect of your health — poor oral health has been linked to heart and lung disease, diabetes, stroke and premature births, and many diseases give their first warning signs in the mouth. Lifeline's dental clinic combines great equipment with an excellent dental team to keep your whole mouth healthy.",
    imageKey: "clinic-dental",
    offerLabel: "Dental treatments we offer",
    offer: [
      "Fillings and restorative dentistry for decayed teeth",
      "Root canal treatment",
      "Teeth cleaning and fluoride therapy",
      "Dental X-rays",
      "Extraction of erupted teeth and removal of fractured roots",
      "Tooth replacements (dentures)",
      "Treatment of serious injuries to teeth and mouth soft tissues",
      "Orthodontic treatment — correction of crooked teeth",
    ],
    whyUs: [
      "Invested in great dental equipment and an excellent dental team",
      "Full treatment range from cleaning to orthodontics",
      "Dental X-rays in-house",
      "Oral health issues often signal other disease — we look at the whole picture",
    ],
    faqs: [
      {
        q: "What dental services do you offer?",
        a: "Fillings, root canal, teeth cleaning, fluoride therapy, tooth replacements, dental X-rays, extractions, treatment of dental injuries, and orthodontic correction of crooked teeth.",
      },
      {
        q: "Is poor oral health really linked to other diseases?",
        a: "Yes — research links poor oral health to heart and lung disease, diabetes, stroke and premature births, and many diseases first show warning signs in the mouth.",
      },
      {
        q: "Do you do braces?",
        a: "Yes — orthodontic treatment for the correction of crooked teeth.",
      },
      {
        q: "Are dental X-rays available on site?",
        a: "Yes — dental X-rays are part of our in-house radiology services.",
      },
    ],
    related: [
      { label: "Eye Care", href: "/clinics/eye-care", imageKey: "clinic-eye" },
      { label: "Radiology & Imaging", href: "/services/radiology", imageKey: "svc-radiology" },
      { label: "Nutrition Consultancy", href: "/services/nutrition", imageKey: "svc-nutrition" },
    ],
  },
  {
    kind: "clinic",
    slug: "eye-care",
    navLabel: "Eye Care",
    name: "Eye Care",
    title: "Eye Clinic Nairobi — Eye Exams & Treatment | Lifeline",
    metaDescription:
      "Comprehensive eye care in Nairobi: routine eye checkups, diagnosis and advanced treatment using modern ophthalmology equipment. Open 24 hours.",
    eyebrow: "Specialized Clinic",
    h1: "Eye Clinic in Nairobi",
    heroLine:
      "Your eyes are among your most important organs — they deserve great care.",
    overview:
      "Our eyes are among our most important organs — sensitive and requiring great care. The Lifeline Group of Hospitals has invested in great ophthalmology equipment to enable excellent diagnosis and treatment, from routine eye checkups to advanced treatment of the human eye.",
    imageKey: "clinic-eye",
    offerLabel: "Eye care services",
    offer: [
      "Comprehensive eye examinations",
      "Routine vision checkups",
      "Diagnosis of eye conditions",
      "Advanced eye treatment",
      "Eye care for children and adults",
      "Referral pathways for specialized ophthalmology",
    ],
    whyUs: [
      "Invested in great ophthalmology equipment",
      "From routine checkups to advanced treatment",
      "Gentle, thorough exams for all ages",
      "Coordinated care with the hospital's lab and pharmacy",
    ],
    faqs: [
      {
        q: "How often should I have my eyes checked?",
        a: "Adults should have a routine eye exam at least every one to two years — earlier and more often if you have diabetes, hypertension or a family history of eye disease.",
      },
      {
        q: "Do you treat children's eyes?",
        a: "Yes — our clinic examines and treats both children and adults.",
      },
      {
        q: "What equipment do you use?",
        a: "We have invested in great ophthalmology equipment to enable excellent diagnosis and treatment.",
      },
      {
        q: "Can I just walk in for a checkup?",
        a: "Yes — walk-ins are welcome 24/7, though booking shortens your wait.",
      },
    ],
    related: [
      { label: "Pediatrics", href: "/clinics/pediatrics", imageKey: "clinic-pediatrics" },
      { label: "Diabetes & Nutrition", href: "/services/nutrition", imageKey: "svc-nutrition" },
      { label: "Cardiac Unit", href: "/clinics/cardiac", imageKey: "clinic-cardiac" },
    ],
  },
  {
    kind: "clinic",
    slug: "pediatrics",
    navLabel: "Pediatrics",
    name: "Pediatrics",
    title: "Pediatric Clinic Nairobi — Child Health & Immunization | Lifeline",
    metaDescription:
      "Pediatric care in Nairobi from infancy to adolescence: checkups, immunization guidance, treatment of childhood illness, and follow-up care.",
    eyebrow: "Specialized Clinic",
    h1: "Pediatric Clinic in Nairobi",
    heroLine: "Committed to the healthy growth of your children — conception to adulthood.",
    overview:
      "Our pediatric unit is committed to the healthy growth of your children — from conception till they reach adulthood. Our pediatricians pay close attention to your kids for signs of any pertinent illness, advise parents on immunization, and follow up on every diagnosis and treatment as conditions dictate.",
    imageKey: "clinic-pediatrics",
    offerLabel: "Pediatric services",
    offer: [
      "Well-child checkups from infancy",
      "Immunization guidance for parents",
      "Treatment of common childhood illnesses — colds, fevers and more",
      "Growth and development monitoring",
      "Newborn and infant care",
      "Pediatric inpatient ward access",
    ],
    whyUs: [
      "Pediatricians who follow up diagnosis and treatment as conditions dictate",
      "Close attention to signs of pertinent illness",
      "Dedicated pediatric ward for young inpatients",
      "Care coordinated from antenatal visits onwards",
    ],
    faqs: [
      {
        q: "From what age do you see children?",
        a: "From conception onwards — we support mothers through pregnancy (see our antenatal clinic) and care for children through to adulthood.",
      },
      {
        q: "Do you advise on immunization?",
        a: "Yes. Beyond treating common ailments such as colds, our pediatricians advise parents on any immunization their child needs.",
      },
      {
        q: "Is there a children's ward?",
        a: "Yes — our pediatric ward cares for young inpatients, alongside male and female wards.",
      },
      {
        q: "Can my child be seen at night?",
        a: "Yes — pediatric care is available 24 hours through the hospital.",
      },
    ],
    related: [
      { label: "Antenatal Clinic", href: "/services/antenatal", imageKey: "svc-antenatal" },
      { label: "Mother-Child Health", href: "/services/antenatal", imageKey: "svc-mother-child" },
      { label: "Nutrition for Kids", href: "/services/nutrition", imageKey: "svc-nutrition" },
    ],
  },
  {
    kind: "clinic",
    slug: "orthopedic",
    navLabel: "Orthopedic Unit",
    name: "Orthopedic Unit",
    title: "Orthopedic Clinic Nairobi — Bones, Joints & Ligaments | Lifeline",
    metaDescription:
      "Orthopedic care in Nairobi: diagnosis and treatment of bone, joint and ligament conditions with X-ray, CT, bone density and ultrasound support.",
    eyebrow: "Specialized Clinic",
    h1: "Orthopedic Clinic in Nairobi",
    heroLine:
      "Don't let an orthopedic condition hold back your life — from diagnosis to healing.",
    overview:
      "Don't let your current orthopedic conditions hinder your life. Our orthopedic unit uses the latest diagnostic imaging to help our medical team administer the best treatment for bone and ligament conditions — from diagnosis, through surgery, to the post-surgery healing period — with experienced, compassionate and professional treatment using some of the latest procedures and technologies.",
    imageKey: "clinic-orthopedic",
    offerLabel: "Orthopedic services",
    offer: [
      "Bone, joint and ligament consultation",
      "Fracture care",
      "Ligament injury management",
      "Diagnosis via blood tests, bone density tests, CT scans and ultrasound",
      "Orthopedic surgery and post-operative care",
      "Physiotherapy-linked rehabilitation",
    ],
    whyUs: [
      "Latest diagnostic imaging supporting every treatment decision",
      "One team from diagnosis, through surgery, to healing",
      "Experienced, compassionate surgeons and therapists",
      "On-site physiotherapy for rehabilitation",
    ],
    faqs: [
      {
        q: "What diagnostic tests do you use for orthopedic conditions?",
        a: "Blood tests, bone density tests, CT scans and ultrasound, alongside digital X-ray.",
      },
      {
        q: "Do you handle fractures?",
        a: "Yes — from diagnosis to immobilization, surgery where needed, and rehabilitation.",
      },
      {
        q: "Is physiotherapy available after orthopedic treatment?",
        a: "Yes — our on-site physiotherapy unit supports post-surgery recovery and the healing period.",
      },
      {
        q: "Do I need an appointment?",
        a: "Walk-ins are welcome; booked visits guarantee specialist availability.",
      },
    ],
    related: [
      { label: "Physiotherapy", href: "/clinics/physiotherapy", imageKey: "clinic-physiotherapy" },
      { label: "Radiology & Imaging", href: "/services/radiology", imageKey: "svc-radiology" },
      { label: "Laboratory Services", href: "/services/laboratory", imageKey: "svc-laboratory" },
    ],
  },
  {
    kind: "clinic",
    slug: "physiotherapy",
    navLabel: "Physiotherapy",
    name: "Physiotherapy",
    title: "Physiotherapy Nairobi — Rehab & Pain Relief | Lifeline",
    metaDescription:
      "Physiotherapy in Nairobi combining modern equipment and proven techniques for pain relief, injury recovery and rehabilitation. Book a session.",
    eyebrow: "Specialized Clinic",
    h1: "Physiotherapy Clinic in Nairobi",
    heroLine: "Modern technology, proven methods — for the best physio-therapeutic care.",
    overview:
      "Our physiotherapists combine modern technology with proven therapeutic methods to give patients the best physiotherapeutic treatment — relieving pain, restoring movement and speeding recovery, whether after surgery, injury or a chronic condition.",
    imageKey: "clinic-physiotherapy",
    offerLabel: "Physiotherapy services",
    offer: [
      "Pain management",
      "Post-surgical rehabilitation",
      "Injury recovery programs",
      "Mobility and strength training",
      "Back and neck care",
      "Sports injury support",
    ],
    whyUs: [
      "Technology combined with proven therapeutic methods",
      "Works hand-in-hand with our orthopedic unit",
      "Programs for both inpatients and outpatients",
      "Personalized recovery plans with measurable milestones",
    ],
    faqs: [
      {
        q: "What conditions does physiotherapy help?",
        a: "Back and neck pain, post-surgical recovery, sports and accident injuries, joint and muscle pain, and mobility problems.",
      },
      {
        q: "Do I need a doctor's referral?",
        a: "No — you can book directly, though we work closely with our orthopedic and surgical teams when needed.",
      },
      {
        q: "How many sessions will I need?",
        a: "It depends on your condition; your physiotherapist will assess and agree a plan with you at the first visit.",
      },
      {
        q: "Where do sessions take place?",
        a: "At the hospital's physiotherapy unit, with inpatient and outpatient sessions available.",
      },
    ],
    related: [
      { label: "Orthopedic Unit", href: "/clinics/orthopedic", imageKey: "clinic-orthopedic" },
      { label: "Nutrition Consultancy", href: "/services/nutrition", imageKey: "svc-nutrition" },
      { label: "Ward Services", href: "/services/wards", imageKey: "svc-wards" },
    ],
  },
];

export const CLINIC_BY_SLUG = Object.fromEntries(
  CLINICS.map((c) => [c.slug, c]),
) as Record<string, DeptRecord>;
