import type { NextConfig } from "next";

const legacySources: [string, string][] = [
  ["/homepage", "/"],
  ["/about-us", "/about"],
  ["/specialized-clinics", "/clinics"],
  ["/ent-services", "/clinics/ent"],
  ["/cardiac-unit", "/clinics/cardiac"],
  ["/dental-services", "/clinics/dental"],
  ["/eye-care", "/clinics/eye-care"],
  ["/pediatrics", "/clinics/pediatrics"],
  ["/orthopedic-unit", "/clinics/orthopedic"],
  ["/physiotherapy", "/clinics/physiotherapy"],
  ["/intensive-care-unit-2", "/services/intensive-care"],
  ["/emergency-services-2", "/services/emergency"],
  ["/pharmacy-services-3", "/services/pharmacy"],
  ["/antenatal-clinic", "/services/antenatal"],
  ["/laboratory-services-2", "/services/laboratory"],
  ["/radiology-services-3", "/services/radiology"],
  ["/family-services", "/services/family-planning"],
  ["/nutrition-consultancy", "/services/nutrition"],
  ["/ward-services-2", "/services/wards"],
  ["/contact-us", "/contact"],
  // Blog posts live at /blog now; the old "coming soon" stub moves there.
  ["/health-library", "/blog"],
];

const nextConfig: NextConfig = {
  // Allows validating a production build (`NEXT_DIST_DIR=.next-prod npm run build`)
  // without clobbering the artifacts of a concurrently running dev server.
  ...(process.env.NEXT_DIST_DIR ? { distDir: process.env.NEXT_DIST_DIR } : {}),
  trailingSlash: false,
  poweredByHeader: false,
  async redirects() {
    return legacySources.map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
  async headers() {
    return [
      {
        source: "/media/:path*",
        headers: [
          {
            // Filenames are stable (asset-key indirection), so use a moderate
            // TTL rather than immutable to allow content reshoots to propagate.
            key: "Cache-Control",
            value: "public, max-age=604800, stale-while-revalidate=86400",
          },
        ],
      },
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(self), payment=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
