/**
 * Single source of truth for site identity, NAP (Name Address Phone),
 * contact channels and brand facts. Consumed by metadata, JSON-LD,
 * footer, contact page and CTA bands. Change here, nowhere else.
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.thelifelinegroupofhospitals.org";

export const SITE_NAME = "The Lifeline Group of Hospitals";

export const SITE_SHORT_NAME = "Lifeline Hospitals";

export const SITE_LOCALE = "en_KE";

export const SITE_TAGLINE = "Health Care of Excellence — 24-Hour Hospital in Nairobi";

export const SITE_DESCRIPTION =
  "24-hour hospital in Kahawa Wendani & Membley, Nairobi. Emergency care, CT, MRI, X-ray, laboratory, pharmacy, maternity and 7 specialty clinics. Call +254 711 420 359.";

export const SITE_TITLE_TEMPLATE = "%s | The Lifeline Group of Hospitals";

export const SITE_TITLE_DEFAULT =
  "Lifeline Group of Hospitals — 24/7 Hospital in Nairobi, Kenya";

export const PHONES = {
  primary: "+254 711 420 359",
  primaryHref: "tel:+254711420359",
  secondary: "+254 714 313 138",
  secondaryHref: "tel:+254714313138",
} as const;

export const WHATSAPP_HREF =
  "https://wa.me/254714313138?text=Hello%20Lifeline%20Hospitals%2C%20I%20would%20like%20to%20make%20an%20inquiry.";

export const EMAIL = "info@thelifelinegroupofhospitals.org";

export const POSTAL = "P.O. Box 15506-00100, Nairobi, Kenya";

export const FOUNDED_YEAR = 2005;

export interface Branch {
  id: string;
  name: string;
  area: string;
  address: string;
  phone: string;
  phoneHref: string;
  hours: string;
  // Google Maps embed dark-free basic pb (embed without API key).
  mapEmbedUrl: string;
  directionsUrl: string;
}

export const BRANCHES: Branch[] = [
  {
    id: "kahawa-wendani",
    name: "Kahawa Wendani Branch (Main)",
    area: "Kahawa Wendani, Nairobi",
    address:
      "Thika Super Highway, opposite Kahawa Barracks, Kahawa Wendani, Nairobi, Kenya",
    phone: PHONES.primary,
    phoneHref: PHONES.primaryHref,
    hours: "Open 24 hours, every day",
    // Using a Maps search embed (no API key needed)
    mapEmbedUrl:
      "https://www.google.com/maps?q=Kahawa+Wendani,+Nairobi,+Kenya&output=embed",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Kahawa+Wendani+Hospital,+Thika+Super+Highway,+Nairobi",
  },
  {
    id: "membley",
    name: "Membley Branch",
    area: "Membley Estate, Nairobi",
    address: "Membley Estate, Kiambu Road, Nairobi, Kenya",
    phone: PHONES.secondary,
    phoneHref: PHONES.secondaryHref,
    hours: "Open 24 hours, every day",
    mapEmbedUrl:
      "https://www.google.com/maps?q=Membley+Estate,+Nairobi,+Kenya&output=embed",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Membley+Estate,+Kiambu+Road,+Nairobi",
  },
];

/** Social profiles — replace with real URLs when client supplies them. */
export const SOCIALS = {
  facebook: "https://www.facebook.com/thelifelinegroupofhospitals",
  instagram: "https://www.instagram.com/thelifelinegroupofhospitals",
  twitter: "https://twitter.com/lifelinehospke",
} as const;

export const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Clinics",
    href: "/clinics",
    children: [
      { label: "ENT Services", href: "/clinics/ent" },
      { label: "Cardiac Unit", href: "/clinics/cardiac" },
      { label: "Dental Services", href: "/clinics/dental" },
      { label: "Eye Care", href: "/clinics/eye-care" },
      { label: "Pediatrics", href: "/clinics/pediatrics" },
      { label: "Orthopedic Unit", href: "/clinics/orthopedic" },
      { label: "Physiotherapy", href: "/clinics/physiotherapy" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Intensive Care Unit", href: "/services/intensive-care" },
      { label: "Emergency Services", href: "/services/emergency" },
      { label: "Pharmacy Services", href: "/services/pharmacy" },
      { label: "Antenatal Clinic", href: "/services/antenatal" },
      { label: "Laboratory Services", href: "/services/laboratory" },
      { label: "Radiology Services", href: "/services/radiology" },
      { label: "Family Planning", href: "/services/family-planning" },
      { label: "Nutrition Consultancy", href: "/services/nutrition" },
      { label: "Ward Services", href: "/services/wards" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;
