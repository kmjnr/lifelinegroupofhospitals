"use client";

import { useState } from "react";
import Image from "next/image";

interface Category {
  id: string;
  label: string;
}

export interface GalleryItemLite {
  key: string;
  src: string;
  alt: string;
  category: string;
  caption: string;
}

/**
 * Gallery category filter — accessible tab-style buttons,
 * URL-less local state (shareable URLs reserved for later).
 * Renders the masonry grid itself so all props stay serializable
 * across the server/client boundary.
 */
export function GalleryFilter({
  categories,
  items,
}: {
  categories: Category[];
  items: GalleryItemLite[];
}) {
  const [active, setActive] = useState("all");
  const filtered = active === "all" ? items : items.filter((i) => i.category === active);

  return (
    <div>
      <div role="group" aria-label="Filter gallery by category" className="mb-8 flex flex-wrap justify-center gap-2">
        {categories.map((cat) => {
          const selected = active === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              aria-pressed={selected}
              onClick={() => setActive(cat.id)}
              className={`min-h-[44px] rounded-full px-5 py-2.5 text-sm font-semibold transition-colors focus-ring ${
                selected
                  ? "bg-primary text-white shadow-sm"
                  : "border border-border-soft bg-white text-ink hover:border-primary/40 hover:text-primary"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {filtered.map((item) => (
          <figure
            key={item.key}
            className="group relative break-inside-avoid overflow-hidden rounded-3xl border border-border-soft shadow-[var(--shadow-card)]"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={800}
              height={560}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
            {/* Captions are always visible below sm: touch devices have no hover. */}
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/80 to-transparent p-4 pt-10 text-[15px] font-semibold text-white sm:opacity-0 sm:transition-opacity sm:group-hover:opacity-100">
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
