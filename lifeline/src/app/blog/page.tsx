import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { POSTS, featuredPost, formatDate, readingMinutes } from "@/content/blog";
import { buildMetadata } from "@/lib/seo";
import { asset } from "@/lib/assets";
import { blogSchema, breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/shared/JsonLd";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CtaBand } from "@/components/shared/CtaBand";
import { PostCard } from "@/components/blog/PostCard";
import { ArrowRightIcon, ClockIcon } from "@/components/shared/icons";

export const metadata: Metadata = {
  ...buildMetadata({
    path: "/blog",
    title: "Health Blog Nairobi — Tips from Lifeline's Clinical Team",
    description:
      "Practical, plain-language health guides from the clinical team at The Lifeline Group of Hospitals — emergency care, maternal and child health, heart health and lab tests explained.",
  }),
};

export default function BlogHubPage() {
  const featured = featuredPost();
  const rest = POSTS.filter((p) => p.slug !== featured.slug);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <JsonLd data={blogSchema(POSTS)} />

      <section className="gradient-soft border-b border-border-soft">
        <div className="mx-auto max-w-6xl px-4 pb-14 pt-8 sm:px-6 lg:px-6 lg:pb-20">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }]} />
          <div className="max-w-3xl">
            <h1 className="font-display text-balance text-display font-bold tracking-tight text-ink">
              The Health Blog — Guides from Our <span className="text-primary">Clinical Team</span>
            </h1>
            <p className="mt-4 max-w-[56ch] text-lg leading-relaxed text-ink">
              Practical articles on emergency care, maternal and child health, the
              heart and your test results — written in plain language for Kenyan
              families by the team behind our 24-hour hospital.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          {/* Featured post */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid overflow-hidden rounded-3xl border border-border-soft bg-white shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-card-md)] focus-ring lg:grid-cols-2"
          >
            <span className="relative block aspect-[16/10]">
              <Image
                src={asset(featured.imageKey)}
                alt={featured.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </span>
            <span className="flex flex-col gap-3 p-7 sm:p-10">
              <span className="flex flex-wrap items-center gap-3 text-[13px]">
                <span className="w-fit rounded-full bg-primary/10 px-3 py-1 font-semibold text-primary">
                  Featured · {featured.category}
                </span>
                <span className="text-ink-muted">{formatDate(featured.date)}</span>
              </span>
              <span className="font-display text-[1.625rem] font-bold leading-snug tracking-tight text-ink transition-colors group-hover:text-primary sm:text-[1.875rem]">
                {featured.h1}
              </span>
              <span className="text-[16px] leading-relaxed text-ink-muted">
                {featured.excerpt}
              </span>
              <span className="flex items-center gap-1.5 text-[13px] text-ink-muted">
                <ClockIcon className="h-3.5 w-3.5" aria-hidden />
                {readingMinutes(featured)} min read · {featured.author}
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

          {/* Remaining posts */}
          <div className="mt-16">
            <SectionHeader
              title="More from the Blog"
              sub="Short, practical reads from our emergency, maternity, paediatric, cardiac and laboratory teams."
              align="left"
            />
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
