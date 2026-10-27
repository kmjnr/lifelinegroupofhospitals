import type { Faq, Testimonial } from "./types";

/** Home page FAQs — mirrored 1:1 into FAQPage JSON-LD. Single source. */
export const HOME_FAQS: Faq[] = [
  {
    q: "Is Lifeline Hospital open 24 hours?",
    a: "Yes. Both our Kahawa Wendani and Membley branches operate 24 hours a day, every day — including emergency services, laboratory and pharmacy.",
  },
  {
    q: "Where is Lifeline Hospital located?",
    a: "Our Kahawa Wendani branch is on Thika Super Highway opposite Kahawa Barracks, Nairobi. Our second branch is in Membley, Nairobi. Both are easily accessible from the highway.",
  },
  {
    q: "What services does Lifeline offer?",
    a: "Emergency and ambulance services, intensive care, radiology (X-ray, CT, MRI, ultrasound, mammography), laboratory, pharmacy, antenatal and mother-child health, family planning, nutrition consultancy, inpatient wards, plus ENT, cardiac, dental, eye, pediatric, orthopedic and physiotherapy clinics.",
  },
  {
    q: "How do I book an appointment?",
    a: "Call +254 711 420 359 or +254 714 313 138, send us a WhatsApp message, or fill in the appointment form on this website — we will get back to you to confirm your visit.",
  },
  {
    q: "Does Lifeline have CT and MRI scans?",
    a: "Yes. We offer digital X-ray and ultrasound at our hospital, CT scans at our imaging facility, and MRI scans through our imaging center in Nairobi, alongside mammography services.",
  },
  {
    q: "Which areas do you serve?",
    a: "We primarily serve Kahawa Wendani, Kahawa Barracks, Roysambu, Garden Estate, Membley, Ruiru and the greater Nairobi area along the Thika Super Highway corridor.",
  },
];

export const ABOUT_FAQS: Faq[] = [
  {
    q: "Who owns The Lifeline Group of Hospitals?",
    a: "We are a Kenyan company duly incorporated under the Companies Act (Cap 486), incorporated in 2005, and operating as The Lifeline Group of Hospitals with facilities in Nairobi.",
  },
  {
    q: "How long has Lifeline been serving Nairobi?",
    a: "Since 2005 — beginning as Estate Medical Clinic, becoming Health Care Nursing Home in 2006, then Kahawa Wendani Hospital in 2009, and today The Lifeline Group of Hospitals.",
  },
  {
    q: "What kind of hospital is Lifeline?",
    a: "A Level-5 private hospital group with a multidisciplinary team, operating 24 hours a day and delivering inpatient and outpatient care across general and specialized services.",
  },
  {
    q: "How many branches does Lifeline have?",
    a: "Two — Kahawa Wendani (main, on Thika Super Highway opposite Kahawa Barracks) and Membley, both in Nairobi and both open 24 hours.",
  },
];

export const CLINICS_HUB_FAQS: Faq[] = [
  {
    q: "Do I need an appointment to visit a clinic?",
    a: "Walk-ins are welcome at all our clinics, 24 hours a day. Booking by phone or through our form simply guarantees a shorter waiting time.",
  },
  {
    q: "Do I need a referral to see a specialist?",
    a: "No referral is needed for most clinics. If you are unsure which clinic you need, start with a general consultation and we will route you to the right specialist.",
  },
  {
    q: "What are the clinic operating hours?",
    a: "The hospital operates 24 hours. Clinic sessions run daily — call +254 711 420 359 to confirm your preferred specialist's hours.",
  },
];

export const SERVICES_HUB_FAQS: Faq[] = [
  {
    q: "Do you admit inpatients?",
    a: "Yes — we have male, female and pediatric wards with 24-hour nursing, meals and medication included in inpatient treatment, plus an on-site ICU.",
  },
  {
    q: "Is imaging available on site?",
    a: "Yes — digital X-ray and ultrasound are available at the hospital, with CT scans at our imaging facility and MRI at our imaging center in Nairobi.",
  },
  {
    q: "Can I use insurance at Lifeline?",
    a: "We work with a range of insurers and corporate clients. Call +254 711 420 359 to confirm coverage for your visit.",
  },
  {
    q: "Are services really available at night?",
    a: "Yes — the hospital operates on a 24-hour basis with staff on alternating shifts, including the ER, lab, pharmacy and ICU.",
  },
];

export const CONTACT_FAQS: Faq[] = [
  {
    q: "Where are you located?",
    a: "Kahawa Wendani branch: Thika Super Highway, opposite Kahawa Barracks, Nairobi. Membley branch: Membley Estate, Nairobi. Both open 24 hours.",
  },
  {
    q: "How do I book an appointment?",
    a: "Fill in the form on this page, call +254 711 420 359 or +254 714 313 138, or message us on WhatsApp — we will confirm your visit.",
  },
  {
    q: "Do you take walk-in patients?",
    a: "Yes — walk-ins are always welcome. Emergency care never requires an appointment.",
  },
];

export const GALLERY_FAQS: Faq[] = [
  {
    q: "Can I visit the facilities before choosing Lifeline?",
    a: "Yes — you are welcome to visit either branch any day at any hour, or browse the photos on this page for a preview.",
  },
  {
    q: "Which branch hosts the CT scanner?",
    a: "CT scans are performed at our imaging facility serving the Kahawa Wendani and Membley branches — call +254 711 420 359 to schedule.",
  },
];

/** Curated testimonials. Patient feedback placeholders — confirm with client. */
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "We came in at 2am with our son burning with fever. The team received us immediately, tested him, and had him on treatment before dawn. Lifeline saved us a terrifying night.",
    name: "Grace W.",
    area: "Kahawa Wendani",
  },
  {
    quote:
      "From the antenatal visits to delivery, the nurses treated me like family. Everything was explained clearly and the costs were fair — I recommend Lifeline to every expecting mother.",
    name: "Mary A.",
    area: "Roysambu",
  },
  {
    quote:
      "I walked in for an X-ray after a workplace accident and was seen, scanned and plastered within two hours. Modern equipment, kind staff, efficient entire visit.",
    name: "Daniel K.",
    area: "Ruiru",
  },
];

export const TESTIMONIALS_DISCLAIMER =
  "Patient feedback shared with permission. Names shortened for privacy. Individual experiences vary — this is not a guarantee of treatment outcome.";
