"use client";

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col items-center px-4 py-20 text-center sm:py-28">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-danger">Something went wrong</p>
      <h1 className="font-display text-display font-bold text-navy">
        We could not load this page
      </h1>
      <p className="mt-4 max-w-lg text-lg leading-relaxed text-ink">
        Please try again. If the problem continues, call us on{" "}
        <a href="tel:+254711420359" className="font-semibold text-primary hover:underline">
          +254 711 420 359
        </a>{" "}
        — our lines are open 24/7.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={reset}
          className="focus-ring inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white transition hover:bg-primary-dark"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
