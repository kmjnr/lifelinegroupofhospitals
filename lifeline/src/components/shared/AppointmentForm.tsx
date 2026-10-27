"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { SERVICES } from "@/content/services";
import { CLINICS } from "@/content/clinics";
import { WHATSAPP_HREF } from "@/content/site";
import { Button } from "./Button";
import { CheckIcon, WhatsappIcon } from "./icons";

type Status = "idle" | "submitting" | "success" | "error";

const inputCls =
  "h-12 w-full rounded-xl border border-border-soft bg-white px-4 text-[16px] text-ink placeholder:text-ink-muted/60 focus:border-primary focus:outline-none focus:ring-3 focus:ring-primary/25";

const labelCls = "mb-1.5 block text-[13px] font-semibold text-ink";

export function AppointmentForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const successRef = useRef<HTMLDivElement>(null);

  // Move focus to the confirmation so keyboard/SR users hear the result.
  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const raw = Object.fromEntries(new FormData(form).entries());
    // Normalize: checkbox yields the string "true"; the API expects a boolean.
    // Drop empty optional fields so the server schema receives clean data.
    const data: Record<string, unknown> = {
      ...raw,
      consent: raw.consent === "true",
    };
    if (!data.preferredDate) delete data.preferredDate;
    if (!data.message) delete data.message;
    if (!data.company) delete data.company;

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(body?.error ?? "Something went wrong. Please call us instead.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please call us instead.");
    }
  }

  if (status === "success") {
    return (
      <div
        ref={successRef}
        role="status"
        tabIndex={-1}
        className="flex flex-col items-center gap-4 rounded-3xl border border-accent/30 bg-white p-10 text-center shadow-[var(--shadow-card)] outline-none"
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/15 text-[#149583]">
          <CheckIcon className="h-8 w-8" aria-hidden />
        </span>
        <h3 className="font-display text-2xl font-bold text-ink">Thank you!</h3>
        <p className="max-w-[45ch] text-[16px] leading-relaxed text-ink-muted">
          Your appointment request has been received. Our team will call you
          shortly to confirm your visit.
        </p>
        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#149583] hover:underline focus-ring rounded"
        >
          <WhatsappIcon className="h-4 w-4" aria-hidden />
          Need us sooner? Message us on WhatsApp
        </a>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-sm font-semibold text-primary hover:underline focus-ring rounded"
        >
          Book another appointment
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate={false}
      className="rounded-3xl border border-border-soft bg-white p-6 shadow-[var(--shadow-card-md)] sm:p-8"
    >
      {/* Honeypot */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="pointer-events-none absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      {/* [&>div]:min-w-0 — native selects have a large intrinsic width; without
          this the field wrappers blow out the grid on narrow screens. */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 [&>div]:min-w-0">
        <div>
          <label htmlFor="firstName" className={labelCls}>
            First name <span aria-hidden className="text-danger">*</span>
          </label>
          <input id="firstName" name="firstName" required minLength={2} maxLength={80} autoComplete="given-name" className={inputCls} />
        </div>
        <div>
          <label htmlFor="lastName" className={labelCls}>
            Last name <span aria-hidden className="text-danger">*</span>
          </label>
          <input id="lastName" name="lastName" required minLength={2} maxLength={80} autoComplete="family-name" className={inputCls} />
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>
            Email address <span aria-hidden className="text-danger">*</span>
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={inputCls} />
        </div>
        <div>
          <label htmlFor="phone" className={labelCls}>
            Phone number <span aria-hidden className="text-danger">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="07XX XXX XXX or +2547XX XXX XXX"
            autoComplete="tel"
            pattern="(?:\+254|0)(?:7|1)\d{8}"
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="branch" className={labelCls}>
            Preferred branch <span aria-hidden className="text-danger">*</span>
          </label>
          <select id="branch" name="branch" required defaultValue="" className={inputCls}>
            <option value="" disabled>
              Select a branch
            </option>
            <option value="kahawa-wendani">Kahawa Wendani (Main)</option>
            <option value="membley">Membley</option>
          </select>
        </div>
        <div>
          <label htmlFor="service" className={labelCls}>
            Service needed <span aria-hidden className="text-danger">*</span>
          </label>
          <select id="service" name="service" required defaultValue="" className={inputCls}>
            <option value="" disabled>
              Select a service
            </option>
            <optgroup label="Services">
              {SERVICES.map((s) => (
                <option key={s.slug} value={s.name}>
                  {s.name}
                </option>
              ))}
            </optgroup>
            <optgroup label="Specialty Clinics">
              {CLINICS.map((c) => (
                <option key={c.slug} value={c.name}>
                  {c.name}
                </option>
              ))}
            </optgroup>
            <option value="General consultation">General consultation</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="preferredDate" className={labelCls}>
            Preferred date <span className="font-normal text-ink-muted">(optional)</span>
          </label>
          <input id="preferredDate" name="preferredDate" type="date" className={inputCls} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelCls}>
            Your message <span className="font-normal text-ink-muted">(optional)</span>
          </label>
          <textarea id="message" name="message" rows={4} maxLength={1000} className={`${inputCls} h-auto py-3`} placeholder="Tell us briefly how we can help…" />
        </div>
      </div>

      <div className="mt-5">
        <label className="flex items-start gap-2.5 text-[15px] text-ink">
          <input type="checkbox" name="consent" value="true" required className="mt-1 h-4 w-4 rounded border-border-soft text-primary focus:ring-primary/25" />
          <span>
            I agree that The Lifeline Group of Hospitals may contact me about this
            appointment request. See our{" "}
            <a href="/privacy" className="font-semibold text-primary hover:underline focus-ring rounded">
              privacy policy
            </a>
            . <span aria-hidden className="text-danger">*</span>
          </span>
        </label>
      </div>

      {status === "error" && (
        <p role="alert" className="mt-4 rounded-xl bg-[#e23d3d]/10 px-4 py-3 text-[15px] font-semibold text-[#b02525]">
          {errorMsg || "Something went wrong. Please call us on +254 711 420 359."}
        </p>
      )}

      <div className="mt-6">
        <Button type="submit" size="lg" className="w-full" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Request Appointment"}
        </Button>
      </div>
    </form>
  );
}
