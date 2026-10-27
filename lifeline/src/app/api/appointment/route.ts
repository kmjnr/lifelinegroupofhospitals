import { NextResponse } from "next/server";
import { appointmentSchema } from "@/lib/validation";
import { EMAIL, SITE_NAME } from "@/content/site";

export const runtime = "nodejs";

/** Simple in-memory rate limit: 5 req/min per IP (per warm instance). */
const hits = new Map<string, { count: number; reset: number }>();
const WINDOW_MS = 60_000;
const MAX_HITS = 5;

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || entry.reset < now) {
    // Opportunistic cleanup to keep the Map bounded on long-running instances.
    if (hits.size > 500) {
      for (const [key, val] of hits) {
        if (val.reset < now) hits.delete(key);
      }
    }
    hits.set(ip, { count: 1, reset: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_HITS;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a minute or call us directly." },
      { status: 429 },
    );
  }

  // Same-origin check (CSRF mitigation)
  const origin = request.headers.get("origin");
  if (origin) {
    try {
      const originHost = new URL(origin).host;
      const requestHost = request.headers.get("host");
      if (requestHost && originHost !== requestHost) {
        return NextResponse.json({ error: "Invalid origin." }, { status: 403 });
      }
    } catch {
      return NextResponse.json({ error: "Invalid origin." }, { status: 403 });
    }
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = appointmentSchema.safeParse(payload);
  if (!parsed.success) {
    const first = parsed.error.issues[0];
    const fieldPath = first?.path.join(".") ?? "";
    const message =
      fieldPath === "phone"
        ? "Please enter a valid Kenyan phone number (e.g. 0712 345 678)."
        : fieldPath === "email"
          ? "Please enter a valid email address."
          : "Please fill in all required fields correctly.";
    return NextResponse.json({ error: message }, { status: 400 });
  }

  const d = parsed.data;

  // Build a plain-text email body (all values escaped/validated by zod)
  const lines = [
    `New appointment request via ${SITE_NAME} website`,
    "",
    `Name: ${d.firstName} ${d.lastName}`,
    `Email: ${d.email}`,
    `Phone: ${d.phone}`,
    `Branch: ${d.branch === "kahawa-wendani" ? "Kahawa Wendani (Main)" : "Membley"}`,
    `Service: ${escapeHtml(d.service)}`,
    d.preferredDate ? `Preferred date: ${d.preferredDate}` : null,
    d.message ? `Message: ${escapeHtml(d.message)}` : null,
    "",
    `Received: ${new Date().toISOString()}`,
  ].filter(Boolean);

  // Delivery: when no provider is configured, log to the server (dev/preview
  // visibility) — never in production, to keep patient PII out of logs. The
  // form contract does not change; plug Resend/SMTP here with the same body.
  if (process.env.RESEND_API_KEY) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        signal: AbortSignal.timeout(8000),
        body: JSON.stringify({
          from: "Lifeline Website <noreply@resend.dev>",
          to: EMAIL,
          subject: `[Appointment Request] ${d.service} — ${d.branch}`,
          text: lines.join("\n"),
        }),
      });
    } catch (err) {
      console.error("Email delivery failed (request still recorded):", err);
    }
  } else {
    console.info("APPOINTMENT_REQUEST", {
      to: EMAIL,
      subject: `[Appointment Request] ${d.service}`,
      body: lines.join("\n"),
    });
  }

  return NextResponse.json({ ok: true });
}
