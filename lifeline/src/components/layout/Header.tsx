"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV, PHONES } from "@/content/site";
import { ButtonLink } from "../shared/Button";
import {
  CalendarIcon,
  ChevronDownIcon,
  ClockIcon,
  MenuIcon,
  PhoneIcon,
  XIcon,
} from "../shared/icons";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Submenu opened by tapping the parent link on touch devices (no hover).
  const [touchSubmenu, setTouchSubmenu] = useState<string | null>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change; lock scroll while mobile menu is open
  useEffect(() => {
    setOpen(false);
    setTouchSubmenu(null);
  }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Escape closes the mobile menu and returns focus to the toggle
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Auto-close when the viewport grows past lg (e.g. device rotation):
  // the overlay is display:none there but the scroll lock would persist.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (mq.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Move focus into the menu when it opens; toggle regains focus on close.
  const panelRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (open) panelRef.current?.focus();
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
    <header
      className={`sticky top-0 z-50 border-b bg-white/95 backdrop-blur transition-shadow ${
        scrolled ? "border-border-soft shadow-[var(--shadow-card)]" : "border-transparent"
      }`}
    >
      {/* Utility bar */}
      <div className="hidden bg-navy text-white lg:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-1.5 text-[13px]">
          <p className="text-on-dark-muted">
            Open 24 hours · Kahawa Wendani & Membley, Nairobi
          </p>
          <a
            href={PHONES.primaryHref}
            className="flex items-center gap-1.5 font-semibold hover:text-sky-300 focus-ring rounded"
          >
            <PhoneIcon className="h-3.5 w-3.5" aria-hidden />
            24-Hour Line: {PHONES.primary}
          </a>
        </div>
      </div>

      {/* Main bar */}
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-[76px] lg:px-6">
        <Link href="/" className="flex shrink-0 items-center focus-ring rounded" aria-label="The Lifeline Group of Hospitals — home">
          <Image
            src="/media/logo-header.png"
            alt="The Lifeline Group of Hospitals logo"
            width={140}
            height={47}
            priority
            className="h-auto w-[128px] lg:w-[140px]"
          />
        </Link>

        <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => {
            const hasChildren = "children" in item && item.children;
            const submenuOpen = hasChildren && touchSubmenu === item.href;
            return (
            <div key={item.href} className="relative group">
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                aria-expanded={hasChildren ? submenuOpen : undefined}
                onClick={(e) => {
                  // Touch devices have no hover: first tap opens the submenu,
                  // second tap (or tap when already open) navigates.
                  if (
                    hasChildren &&
                    window.matchMedia("(hover: none)").matches &&
                    !submenuOpen
                  ) {
                    e.preventDefault();
                    setTouchSubmenu(item.href);
                  }
                }}
                className={`flex items-center gap-1 whitespace-nowrap rounded-lg px-3 py-2 text-[15px] font-semibold transition-colors focus-ring ${
                  isActive(item.href) ? "text-primary" : "text-ink hover:text-primary"
                }`}
              >
                {item.label}
                {hasChildren && (
                  <ChevronDownIcon className="h-3.5 w-3.5 opacity-60" aria-hidden />
                )}
              </Link>
              {hasChildren && (
                <div className={`invisible absolute left-0 top-full z-50 w-64 translate-y-1 rounded-2xl border border-border-soft bg-white p-2 opacity-0 shadow-[var(--shadow-card-md)] transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 ${
                  submenuOpen ? "visible translate-y-0 opacity-100" : ""
                }`}>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={`block rounded-xl px-3 py-2.5 text-sm font-medium transition-colors focus-ring ${
                        pathname === child.href
                          ? "bg-surface-2 text-primary"
                          : "text-ink hover:bg-surface"
                      }`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink href="/contact" size="sm" className="shrink-0">
            <CalendarIcon className="h-4 w-4" aria-hidden />
            Book Appointment
          </ButtonLink>
        </div>

        <button
          type="button"
          ref={toggleRef}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 items-center justify-center rounded-xl text-ink hover:bg-surface focus-ring lg:hidden"
        >
          {open ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>
    </header>

    {/* Mobile nav overlay — sibling of the header on purpose: the header's
        backdrop-filter would otherwise become the containing block for this
        fixed overlay and collapse it to zero height. */}
      {open && (
        <div
          ref={panelRef}
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          tabIndex={-1}
          className="menu-in fixed inset-0 top-[64px] z-40 overflow-y-auto bg-white outline-none lg:hidden"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col px-5 pb-28 pt-4">
            {NAV.map((item) => (
              <div key={item.href} className="border-b border-border-soft py-1">
                {"children" in item && item.children ? (
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between py-3.5 text-[16px] font-semibold text-ink focus-ring rounded">
                      {item.label}
                      <ChevronDownIcon
                        className="h-4 w-4 text-ink-muted transition-transform group-open:rotate-180"
                        aria-hidden
                      />
                    </summary>
                    <div className="pb-2 pl-3">
                      <Link
                        href={item.href}
                        className="block py-2.5 text-sm font-semibold text-primary focus-ring rounded"
                      >
                        Overview
                      </Link>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block py-2.5 text-sm text-ink-muted hover:text-primary focus-ring rounded"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`block py-3.5 text-[16px] font-semibold focus-ring rounded ${
                      isActive(item.href) ? "text-primary" : "text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-6 flex flex-col gap-3">
              <ButtonLink href="/contact" size="lg" className="w-full">
                <CalendarIcon className="h-4 w-4" aria-hidden />
                Book an Appointment
              </ButtonLink>
              <ButtonLink href={PHONES.primaryHref} variant="outline" size="lg" className="w-full">
                <PhoneIcon className="h-4 w-4" aria-hidden />
                Call {PHONES.primary}
              </ButtonLink>
              <p className="flex items-center justify-center gap-1.5 pt-1 text-[13px] text-ink-muted">
                <ClockIcon className="h-3.5 w-3.5 text-accent" aria-hidden />
                Open 24 hours · Kahawa Wendani &amp; Membley
              </p>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
