"use client";

import { useState } from "react";
import Image from "next/image";
import { asset } from "@/lib/assets";
import { PlayIcon } from "./icons";

/**
 * YouTube facade — mirrors the original site's pattern (thumbnail with a
 * play-button overlay, per its Elementor custom-embed markup): the player
 * iframe is only requested after the visitor clicks, keeping ~1MB of
 * third-party JS off the initial page load.
 */
export function VideoEmbed({
  youTubeId,
  title,
  thumbnailAlt,
}: {
  youTubeId: string;
  title: string;
  thumbnailAlt: string;
}) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="relative aspect-video overflow-hidden rounded-3xl shadow-[var(--shadow-card-lg)]">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youTubeId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play video: ${title}`}
      className="group relative block w-full overflow-hidden rounded-3xl shadow-[var(--shadow-card-lg)] focus-ring"
    >
      <span className="relative block aspect-video">
        <Image
          src={asset("video-thumbnail")}
          alt={thumbnailAlt}
          fill
          sizes="(max-width: 896px) 100vw, 896px"
          className="object-cover"
        />
      </span>
      <span aria-hidden className="absolute inset-0 bg-navy/25 transition-colors group-hover:bg-navy/10" />
      <span aria-hidden className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white shadow-[var(--shadow-card-md)] transition-transform group-hover:scale-105 sm:h-20 sm:w-20">
          <PlayIcon className="h-7 w-7 translate-x-0.5 sm:h-9 sm:w-9" />
        </span>
      </span>
      <span
        aria-hidden
        className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/85 to-transparent p-4 pt-12 text-left text-[15px] font-bold text-white sm:p-6 sm:pt-16"
      >
        {title}
      </span>
    </button>
  );
}
