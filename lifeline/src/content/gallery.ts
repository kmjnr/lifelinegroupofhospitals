export interface GalleryItem {
  key: string;
  src: string;
  alt: string;
  category: "facilities" | "equipment" | "clinics";
  caption: string;
}

const g = (
  key: string,
  file: string,
  category: GalleryItem["category"],
  subject: string,
): GalleryItem => ({
  key,
  src: `/media/${file}`,
  alt: `${subject} at The Lifeline Group of Hospitals, Nairobi`,
  category,
  caption: subject,
});

export const GALLERY_ITEMS: GalleryItem[] = [
  g("lf-01", "svc-theater.jpg", "facilities", "Operating theatre"),
  g("lf-02", "svc-wards.jpg", "facilities", "Inpatient ward"),
  g("lf-03", "usp-easy-access.jpg", "facilities", "Hospital entrance on Thika Super Highway"),
  g("lf-04", "clinics-hub.jpg", "facilities", "Specialized clinics reception"),
  g("lf-05", "hero-hospital.jpg", "facilities", "Hospital building — open 24 hours"),
  g("lf-06", "usp-latest-tech.jpg", "equipment", "Modern medical technology"),
  g("lf-07", "svc-icu.jpg", "equipment", "Intensive Care Unit"),
  g("lf-08", "svc-laboratory.jpg", "equipment", "Medical laboratory"),
  g("lf-09", "svc-radiology.jpg", "equipment", "Radiology and imaging suite"),
  g("lf-10", "svc-pharmacy.jpg", "equipment", "In-house pharmacy"),
  g("lf-11", "svc-emergency.jpg", "equipment", "Emergency and ambulance services"),
  g("lf-12", "clinic-physiotherapy.png", "clinics", "Physiotherapy unit"),
  g("lf-13", "clinic-pediatrics.jpg", "clinics", "Pediatrics clinic"),
  g("lf-14", "clinic-cardiac.jpg", "clinics", "Cardiac unit"),
  g("lf-15", "clinic-dental.jpg", "clinics", "Dental clinic"),
  g("lf-16", "clinic-eye.jpg", "clinics", "Eye care clinic"),
  g("lf-17", "clinic-orthopedic.jpg", "clinics", "Orthopedic unit"),
  g("lf-18", "clinic-ent.jpg", "clinics", "ENT consultation"),
  g("lf-19", "svc-antenatal.jpg", "clinics", "Antenatal clinic"),
  g("lf-20", "svc-mother-child.jpg", "clinics", "Mother & child health"),
  g("lf-21", "svc-family-planning.jpg", "clinics", "Family planning services"),
  g("lf-22", "svc-nutrition.jpg", "clinics", "Nutrition consultancy"),
];

export const GALLERY_CATEGORIES = [
  { id: "all", label: "All" },
  { id: "facilities", label: "Facilities" },
  { id: "equipment", label: "Equipment & Services" },
  { id: "clinics", label: "Clinics & Care" },
] as const;
