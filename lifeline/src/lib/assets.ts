/** Map of asset keys → public media paths (see plan 06-ASSET-INVENTORY.md). */
export const ASSETS: Record<string, string> = {
  "logo-full": "/media/logo-full.png",
  "logo-header": "/media/logo-header.png",
  "logo-mark": "/media/logo-mark.png",
  "signature-director": "/media/signature-director.png",
  "director-cutout": "/media/director-cutout.png",
  "hero-hospital": "/media/hero-hospital.jpg",
  "clinics-hub": "/media/clinics-hub.jpg",
  "usp-easy-access": "/media/usp-easy-access.jpg",
  "usp-latest-tech": "/media/usp-latest-tech.jpg",
  "clinic-ent": "/media/clinic-ent.jpg",
  "clinic-cardiac": "/media/clinic-cardiac.jpg",
  "clinic-dental": "/media/clinic-dental.jpg",
  "clinic-eye": "/media/clinic-eye.jpg",
  "clinic-pediatrics": "/media/clinic-pediatrics.jpg",
  "clinic-orthopedic": "/media/clinic-orthopedic.jpg",
  "clinic-physiotherapy": "/media/clinic-physiotherapy.png",
  "svc-icu": "/media/svc-icu.jpg",
  "svc-emergency": "/media/svc-emergency.jpg",
  "svc-laboratory": "/media/svc-laboratory.jpg",
  "svc-pharmacy": "/media/svc-pharmacy.jpg",
  "svc-radiology": "/media/svc-radiology.jpg",
  "svc-wards": "/media/svc-wards.jpg",
  "svc-antenatal": "/media/svc-antenatal.jpg",
  "svc-mother-child": "/media/svc-mother-child.jpg",
  "svc-family-planning": "/media/svc-family-planning.jpg",
  "svc-nutrition": "/media/svc-nutrition.jpg",
  "svc-theater": "/media/svc-theater.jpg",
  "hero-reception": "/media/hero-reception.jpg",
  "pediatric-care": "/media/pediatric-care.jpg",
  "ambulance-fleet": "/media/ambulance-fleet.jpg",
  "ultrasound-care": "/media/ultrasound-care.jpg",
  "video-thumbnail": "/media/video-thumbnail.jpg",
};

export function asset(key: string): string {
  return ASSETS[key] ?? "/media/hero-hospital.jpg";
}
