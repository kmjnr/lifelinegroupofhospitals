"use client";

import { useEffect, useState } from "react";
import { PHONES, WHATSAPP_HREF } from "@/content/site";
import { MapPinIcon, PhoneIcon, WhatsappIcon } from "../shared/icons";

/** Mobile-only sticky action bar: Call · WhatsApp · Directions. */
export function MobileActionBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 240);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-border-soft bg-white/95 shadow-[0_-4px_16px_rgba(11,36,71,0.08)] backdrop-blur lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      aria-label="Quick actions"
    >
      <a
        href={PHONES.primaryHref}
        className="flex min-h-[56px] flex-col items-center justify-center gap-0.5 bg-primary text-white focus-ring"
      >
        <PhoneIcon className="h-5 w-5" aria-hidden />
        <span className="text-[13px] font-bold">Call 24/7</span>
      </a>
      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-[56px] flex-col items-center justify-center gap-0.5 text-[#149583] focus-ring"
      >
        <WhatsappIcon className="h-5 w-5" aria-hidden />
        <span className="text-[13px] font-bold">WhatsApp</span>
      </a>
      <a
        href="https://www.google.com/maps/dir/?api=1&destination=Kahawa+Wendani+Hospital,+Thika+Super+Highway,+Nairobi"
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-[56px] flex-col items-center justify-center gap-0.5 text-ink focus-ring"
      >
        <MapPinIcon className="h-5 w-5" aria-hidden />
        <span className="text-[13px] font-bold">Directions</span>
      </a>
    </div>
  );
}
