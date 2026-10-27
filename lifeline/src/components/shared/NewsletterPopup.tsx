"use client";

import { useCallback, useEffect, useRef, useState, type FormEvent, type PointerEvent as ReactPointerEvent } from "react";
import Image from "next/image";
import { asset } from "@/lib/assets";
import { CheckIcon, XIcon } from "./icons";

/**
 * Newsletter exit popup (frontend only — email delivery comes later).
 *
 * Trigger logic
 * - Desktop (hover pointer): real exit intent — cursor leaves through the
 *   viewport top. Ignored when the tab is being backgrounded (document.hidden).
 * - Touch devices (no cursor to leave): "fast fling upward" heuristic — a
 *   sustained ≥450px upward scroll while deep on the page.
 * - Arming: never during the first seconds of a visit; never on conversion
 *   pages (/contact) or where it would be redundant (/privacy, /blog);
 *   never while the mobile menu or another scroll-locked overlay is open.
 * - Frequency: at most once per 7 days after a dismissal, never again after a
 *   successful signup. Stored in localStorage.
 *
 * UX: bottom sheet on touch/phone, centered two-panel dialog on desktop;
 * focus is moved in and trapped while open and restored on close; Escape,
 * scrim click and (on touch) drag-down all dismiss. Subtle haptics where
 * supported. `navigator.vibrate` is a no-op on iOS — intentional.
 */

const STORAGE_KEY = "ll:newsletter";
const COOLDOWN_MS = 7 * 24 * 60 * 60 * 1000;
const ARM_DELAY_MS = 8000;
const EXCLUDED_ROUTES = ["/contact", "/privacy", "/blog"];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type Store = { status: "seen" | "dismissed" | "subscribed"; at: number };

function readStore(): Store | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Store) : null;
  } catch {
    return null;
  }
}

function writeStore(status: Store["status"]) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ status, at: Date.now() }));
  } catch {
    /* storage unavailable (private mode) — popup may re-show; acceptable */
  }
}

function buzz(pattern: number | number[]) {
  try {
    navigator.vibrate?.(pattern);
  } catch {
    /* unsupported */
  }
}

type OpenStatus = "closed" | "open";
type FormStatus = "idle" | "submitting" | "success";

export function NewsletterPopup() {
  const [openStatus, setOpenStatus] = useState<OpenStatus>("closed");
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [dragY, setDragY] = useState(0);
  const [shaking, setShaking] = useState(false);

  const dialogRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const restoreFocusRef = useRef<HTMLElement | null>(null);
  const dragStartY = useRef<number | null>(null);
  const autoCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const wasOpen = openStatus === "open";

  /* ---------------------------------- open/close ---------------------------------- */

  const close = useCallback((store: Store["status"]) => {
    setOpenStatus("closed");
    setFormStatus("idle");
    setEmail("");
    setError("");
    setDragY(0);
    if (autoCloseTimer.current) clearTimeout(autoCloseTimer.current);
    writeStore(store);
    restoreFocusRef.current?.focus?.();
  }, []);

  /* ------------------------------- trigger lifecycle ------------------------------- */

  useEffect(() => {
    const stored = readStore();
    if (stored) {
      if (stored.status === "subscribed") return;
      if (stored.status === "dismissed" && Date.now() - stored.at < COOLDOWN_MS) return;
    }

    let shown = false;
    let samples: { y: number; t: number }[] = [];

    // All gating happens before the one-shot latch, so a blocked attempt
    // (e.g. on /contact, or while the mobile menu is open) never consumes it.
    const canShowNow = () => {
      if (document.hidden || document.body.style.overflow) return false; // tab switch / scroll lock
      const path = window.location.pathname;
      return !EXCLUDED_ROUTES.some((r) => path === r || path.startsWith(r + "/"));
    };

    const show = () => {
      if (shown || !canShowNow()) return;
      shown = true;
      document.removeEventListener("mouseout", onMouseOut);
      window.removeEventListener("scroll", onScroll);
      restoreFocusRef.current = document.activeElement as HTMLElement | null;
      setOpenStatus("open");
      setFormStatus("idle");
      buzz(10);
      writeStore("seen");
    };

    // Desktop exit intent: cursor leaves through the top of the viewport.
    const onMouseOut = (e: MouseEvent) => {
      if (!e.relatedTarget && e.clientY <= 0) show();
    };

    // Touch proxy for exit intent: fast, sustained upward fling while deep.
    // Depth is measured at the START of the fling window (samples[0]) —
    // the whole point is that the visitor has already flung back up.
    const onScroll = () => {
      const y = window.scrollY;
      const now = performance.now();
      samples.push({ y, t: now });
      samples = samples.filter((s) => now - s.t <= 1500);
      const doc = document.documentElement;
      const scrollable = Math.max(doc.scrollHeight - window.innerHeight, 1);
      const flingStartDepth = samples[0].y / scrollable;
      if (samples.length >= 2 && samples[0].y - y >= 450 && flingStartDepth > 0.35) show();
    };

    const armTimer = setTimeout(() => {
      document.addEventListener("mouseout", onMouseOut);
      window.addEventListener("scroll", onScroll, { passive: true });
    }, ARM_DELAY_MS);

    return () => {
      clearTimeout(armTimer);
      document.removeEventListener("mouseout", onMouseOut);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /* ----------------------------- open-state side effects ---------------------------- */

  useEffect(() => {
    if (!wasOpen) return;
    document.body.style.overflow = "hidden";
    // Desktop: put the caret in the email field right away. Touch: let people
    // read the sheet first — their keyboard can wait for a tap.
    if (!window.matchMedia("(hover: none)").matches) {
      setTimeout(() => emailRef.current?.focus(), 80);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [wasOpen]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      if (formStatus !== "success") close("dismissed");
      return;
    }
    if (e.key === "Tab") {
      // Focus trap: cycle within the dialog.
      const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusables || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  };

  /* ----------------------------------- drag dismiss ---------------------------------- */

  const onHandlePointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "touch") return;
    // Capture so a fast finger leaving the small handle still receives moves.
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      /* no live pointer (or capture refused) — proceed without it */
    }
    dragStartY.current = e.clientY;
  };
  const onHandlePointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (dragStartY.current === null) return;
    setDragY(Math.max(e.clientY - dragStartY.current, 0));
  };
  const onHandlePointerUp = () => {
    if (dragStartY.current === null) return;
    const shouldClose = dragY > 110;
    dragStartY.current = null;
    if (shouldClose) {
      buzz(8);
      close(formStatus === "success" ? "subscribed" : "dismissed");
    } else {
      setDragY(0);
    }
  };

  /* -------------------------------------- submit ------------------------------------- */

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (formStatus === "submitting") return;
    const value = email.trim();
    if (!EMAIL_RE.test(value)) {
      setError("Please enter a valid email address — e.g. name@example.com.");
      setShaking(true);
      buzz(20);
      emailRef.current?.focus();
      return;
    }
    setError("");
    setFormStatus("submitting");
    // TODO(backend): replace the simulated delay with the real call, e.g.
    //   await fetch("/api/newsletter", { method: "POST", body: JSON.stringify({ email: value }) })
    // Keep this component's success/error states as the single UI surface.
    setTimeout(() => {
      setFormStatus("success");
      buzz([10, 40, 12]);
      writeStore("subscribed");
      autoCloseTimer.current = setTimeout(() => setOpenStatus("closed"), 6000);
    }, 700);
  }

  if (openStatus !== "open") return null;

  const subscribed = formStatus === "success";

  return (
    <div className="fixed inset-0 z-[80]">
      {/* Scrim */}
      <button
        type="button"
        aria-label="Close newsletter popup"
        onClick={() => close(subscribed ? "subscribed" : "dismissed")}
        className="absolute inset-0 h-full w-full cursor-default bg-navy/60 animate-[popup-scrim_.25s_ease-out_both]"
      />

      {/* Dialog — bottom sheet on touch/phone, centered dialog on >= sm */}
      <div className="pointer-events-none absolute inset-0 flex items-end justify-center overflow-y-auto sm:items-center sm:p-6">
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="newsletter-title"
          onKeyDown={onKeyDown}
          style={dragY ? { transform: `translateY(${dragY}px)`, transition: "none" } : undefined}
          className={`pointer-events-auto relative w-full sm:max-w-2xl ${
            subscribed ? "" : "pb-[env(safe-area-inset-bottom)]"
          } animate-[sheet-in_.32s_cubic-bezier(.16,1,.3,1)_both] sm:animate-[modal-in_.3s_cubic-bezier(.16,1,.3,1)_both]`}
        >
          <div
            className={`overflow-hidden bg-white shadow-[var(--shadow-card-lg)] rounded-t-[1.75rem] sm:rounded-[1.75rem] ${
              subscribed ? "rounded-b-[1.75rem]" : ""
            }`}
          >
            {/* Drag handle (touch only) */}
            <div
              onPointerDown={onHandlePointerDown}
              onPointerMove={onHandlePointerMove}
              onPointerUp={onHandlePointerUp}
              onPointerCancel={onHandlePointerUp}
              className="flex h-7 touch-none items-center justify-center bg-white sm:hidden"
              aria-hidden
            >
              <span className="h-1.5 w-10 rounded-full bg-border-soft" />
            </div>

            {subscribed ? (
              /* ------------------------------ success view ----------------------------- */
              <div className="flex flex-col items-center gap-3 px-6 pb-8 pt-6 text-center sm:px-10 sm:pb-10">
                <span className="flex h-14 w-14 animate-[success-pop_.4s_cubic-bezier(.16,1,.3,1)_both] items-center justify-center rounded-full bg-accent/15 text-[#149583]">
                  <CheckIcon className="h-7 w-7" aria-hidden />
                </span>
                <h2 id="newsletter-title" className="font-display text-xl font-bold text-ink sm:text-2xl">
                  You&rsquo;re on the list!
                </h2>
                <p role="status" className="max-w-[42ch] text-[16px] leading-relaxed text-ink-muted">
                  Thank you — we&rsquo;ll email you as soon as the Health Library goes live, with
                  practical health guides from our clinical team.
                </p>
                <button
                  type="button"
                  onClick={() => close("subscribed")}
                  className="mt-3 inline-flex min-h-[44px] items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white transition hover:bg-primary-dark focus-ring"
                >
                  Done
                </button>
              </div>
            ) : (
              /* -------------------------------- signup view ------------------------------ */
              <div className="grid sm:grid-cols-[0.9fr_1.1fr]">
                {/* Image panel — desktop side / mobile strip */}
                <div className="relative h-32 sm:h-auto sm:min-h-[360px]">
                  <Image
                    src={asset("hero-reception")}
                    alt="Reception team welcoming patients at The Lifeline Group of Hospitals, Nairobi"
                    fill
                    sizes="(min-width: 640px) 360px, 100vw"
                    className="object-cover"
                  />
                  <span
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent sm:bg-none"
                  />
                </div>

                <div className="relative px-6 pb-7 pt-4 sm:px-8 sm:py-9">
                  <button
                    type="button"
                    onClick={() => close("dismissed")}
                    aria-label="Close"
                    className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-full text-ink-muted transition hover:bg-surface hover:text-ink focus-ring"
                  >
                    <XIcon className="h-5 w-5" />
                  </button>

                  <h2 id="newsletter-title" className="font-display text-[22px] font-bold leading-tight text-ink sm:text-2xl">
                    Be first to read our <span className="text-primary">Health Library</span>
                  </h2>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-ink-muted">
                    Be first to read our new Health Library — clear, trustworthy tips from
                    Lifeline&rsquo;s clinical team. No spam, unsubscribe anytime.
                  </p>

                  <form onSubmit={onSubmit} noValidate className="mt-5 flex flex-col gap-3">
                    <div className={shaking ? "animate-[shake_.4s_ease-in-out]" : ""} onAnimationEnd={() => setShaking(false)}>
                      <label htmlFor="newsletter-email" className="sr-only">
                        Email address
                      </label>
                      <input
                        ref={emailRef}
                        id="newsletter-email"
                        name="email"
                        type="email"
                        inputMode="email"
                        autoComplete="email"
                        placeholder="Your email address"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (error) setError("");
                        }}
                        aria-invalid={error ? true : undefined}
                        aria-describedby={error ? "newsletter-error" : undefined}
                        className={`h-12 w-full rounded-xl border bg-white px-4 text-[15px] text-ink placeholder:text-ink-muted/60 focus:outline-none ${
                          error
                            ? "border-danger focus:border-danger focus:ring-3 focus:ring-danger/20"
                            : "border-border-soft focus:border-primary focus:ring-3 focus:ring-primary/25"
                        }`}
                      />
                      {error && (
                        <p id="newsletter-error" role="alert" className="mt-1.5 text-[13px] font-semibold text-[#b02525]">
                          {error}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={formStatus === "submitting"}
                      className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-primary px-6 text-[15px] font-semibold text-white shadow-sm transition hover:bg-primary-dark active:scale-[0.98] focus-ring disabled:opacity-60 sm:text-base"
                    >
                      {formStatus === "submitting" ? (
                        <>
                          <span
                            aria-hidden
                            className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
                          />
                          Adding you…
                        </>
                      ) : (
                        "Notify me when it's live"
                      )}
                    </button>

                    <p className="text-center text-[13px] leading-relaxed text-ink-muted">
                      We&rsquo;ll only email you about the Health Library. See our{" "}
                      <a href="/privacy" className="font-semibold text-primary hover:underline focus-ring rounded">
                        privacy policy
                      </a>
                      .
                    </p>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
