import Link from "next/link";
import Image from "next/image";
import { CLINICS_NAV, SERVICES_NAV } from "./footer-data";
import { BRANCHES, EMAIL, PHONES, POSTAL, SOCIALS } from "@/content/site";
import { MailIcon, MapPinIcon, PhoneIcon, ClockIcon } from "../shared/icons";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-3">
            <Image
              src="/media/logo-full.png"
              alt="The Lifeline Group of Hospitals logo"
              width={172}
              height={76}
              className="h-auto w-[150px] rounded-lg bg-white/95 p-1.5"
            />
            <p className="mt-4 max-w-[30ch] text-[15px] leading-relaxed text-on-dark-muted">
              Providing timely and efficient medical services, inpatient and
              outpatient, across general and specialized treatments — since 2005.
            </p>
            <div className="mt-5 flex gap-2">
              {Object.entries({ Facebook: SOCIALS.facebook, Instagram: SOCIALS.instagram, "X (Twitter)": SOCIALS.twitter }).map(
                ([name, url]) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${name} (opens in new tab)`}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-bold hover:bg-white/20 focus-ring"
                  >
                    {name[0]}
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Quick links" className="lg:col-span-2">
            <h2 className="text-sm font-bold">Quick Links</h2>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-on-dark-muted">
              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["Specialized Clinics", "/clinics"],
                ["Services", "/services"],
                ["Gallery", "/gallery"],
                ["Health Blog", "/blog"],
                ["Contact Us", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white focus-ring rounded">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Clinics */}
          <nav aria-label="Our clinics" className="lg:col-span-2">
            <h2 className="text-sm font-bold">Our Clinics</h2>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-on-dark-muted">
              {CLINICS_NAV.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white focus-ring rounded">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Our services" className="lg:col-span-2">
            <h2 className="text-sm font-bold">Our Services</h2>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-on-dark-muted">
              {SERVICES_NAV.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white focus-ring rounded">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h2 className="text-sm font-bold">Contact</h2>
            <ul className="mt-4 flex flex-col gap-3 text-[15px] text-on-dark-muted">
              {BRANCHES.map((b) => (
                <li key={b.id} className="flex items-start gap-2.5">
                  <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" aria-hidden />
                  <span>
                    <strong className="block text-white">{b.area}</strong>
                    {b.address}
                  </span>
                </li>
              ))}
              <li className="flex items-start gap-2.5">
                <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" aria-hidden />
                <span>
                  <a href={PHONES.primaryHref} className="block hover:text-white focus-ring rounded">
                    {PHONES.primary}
                  </a>
                  <a href={PHONES.secondaryHref} className="block hover:text-white focus-ring rounded">
                    {PHONES.secondary}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" aria-hidden />
                <a href={`mailto:${EMAIL}`} className="break-all hover:text-white focus-ring rounded">
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" aria-hidden />
                <span>
                  {POSTAL} · Open 24 hours, every day
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-[13px] text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} The Lifeline Group of Hospitals. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy" className="hover:text-white focus-ring rounded">
              Privacy Policy
            </Link>
            <Link href="/sitemap.xml" className="hover:text-white focus-ring rounded">
              Sitemap
            </Link>
            <span>
              This website provides general information and does not replace professional medical
              advice. In an emergency, call us immediately.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
