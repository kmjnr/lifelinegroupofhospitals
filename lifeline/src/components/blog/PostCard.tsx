import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/assets";
import { formatDate, type Post } from "@/content/blog";
import { ArrowRightIcon } from "../shared/icons";

/** Blog post card — mirrors the services-grid card language. */
export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-3xl border border-border-soft bg-white shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-md)] focus-ring"
    >
      <span className="relative block aspect-[16/10]">
        <Image
          src={asset(post.imageKey)}
          alt={post.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </span>
      <span className="flex flex-1 flex-col gap-2 p-6">
        <span className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px]">
          <span className="rounded-full bg-primary/10 px-3 py-1 font-semibold text-primary">
            {post.category}
          </span>
          <span className="text-ink-muted">{formatDate(post.date)}</span>
        </span>
        <span className="font-display text-lg font-bold leading-snug text-ink transition-colors group-hover:text-primary">
          {post.h1}
        </span>
        <span className="line-clamp-2 text-[15px] leading-relaxed text-ink-muted">
          {post.excerpt}
        </span>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-3 text-sm font-semibold text-primary">
          Read article
          <ArrowRightIcon
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            aria-hidden
          />
        </span>
      </span>
    </Link>
  );
}
