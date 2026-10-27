import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { POSTS, formatDate, postBySlug, readingMinutes, relatedPosts } from "@/content/blog";
import { buildMetadata } from "@/lib/seo";
import { asset } from "@/lib/assets";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { PHONES } from "@/content/site";
import { JsonLd } from "@/components/shared/JsonLd";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CtaBand } from "@/components/shared/CtaBand";
import { PostBody } from "@/components/blog/PostBody";
import { PostCard } from "@/components/blog/PostCard";
import { ClockIcon, HeartPulseIcon } from "@/components/shared/icons";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) return {};
  const meta = buildMetadata({
    path: `/blog/${post.slug}`,
    title: post.title,
    description: post.metaDescription,
  });
  return {
    ...meta,
    openGraph: {
      ...meta.openGraph,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      section: post.category,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) notFound();

  const path = `/blog/${post.slug}`;
  const minutes = readingMinutes(post);

  return (
    <>
      <JsonLd
        data={articleSchema({
          headline: post.h1,
          description: post.metaDescription,
          path,
          dateISO: post.date,
          author: post.author,
          section: post.category,
          image: asset(post.imageKey),
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.h1, path },
        ])}
      />

      <section className="gradient-soft border-b border-border-soft">
        <div className="mx-auto max-w-6xl px-4 pb-12 pt-8 sm:px-6 lg:px-6 lg:pb-16">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Blog", path: "/blog" },
              { name: post.h1, path },
            ]}
          />
          <div className="max-w-3xl">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-[13px] font-semibold text-primary">
              {post.category}
            </span>
            <h1 className="mt-5 font-display text-balance text-display font-bold tracking-tight text-ink">
              {post.h1}
            </h1>
            <p className="mt-4 max-w-[58ch] text-lg leading-relaxed text-ink">
              {post.excerpt}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-3 text-sm text-ink-muted">
              <span className="flex items-center gap-2.5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <HeartPulseIcon className="h-5 w-5" aria-hidden />
                </span>
                <span className="font-semibold text-ink">{post.author}</span>
              </span>
              <span aria-hidden>·</span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden>·</span>
              <span className="flex items-center gap-1.5">
                <ClockIcon className="h-4 w-4" aria-hidden />
                {minutes} min read
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pt-12 sm:px-6 lg:px-8">
        <figure className="mx-auto max-w-5xl">
          <span className="relative block aspect-[16/9] overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
            <Image
              src={asset(post.imageKey)}
              alt={post.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
          </span>
        </figure>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <PostBody blocks={post.body} />

          <div className="mt-10 rounded-2xl border border-border-soft bg-surface p-5 text-[14px] leading-relaxed text-ink-muted">
            This article is general information from our clinical team and is not a
            substitute for professional medical advice, diagnosis or treatment. If you
            feel unwell, call{" "}
            <a
              href={PHONES.primaryHref}
              className="whitespace-nowrap font-semibold text-primary hover:underline focus-ring rounded"
            >
              {PHONES.primary}
            </a>{" "}
            or visit either branch — both are open 24 hours, every day.
          </div>

          <div className="mt-6 flex items-center gap-4 rounded-2xl border border-border-soft bg-white p-5 shadow-[var(--shadow-card)]">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <HeartPulseIcon className="h-6 w-6" aria-hidden />
            </span>
            <div>
              <p className="font-display font-bold text-ink">{post.author}</p>
              <p className="text-sm leading-relaxed text-ink-muted">
                The Lifeline Group of Hospitals — Kahawa Wendani &amp; Membley,
                Nairobi
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border-soft bg-surface px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title="Continue Reading"
            sub="More plain-language guides from the Lifeline clinical team."
            align="left"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPosts(post.slug, 3).map((related) => (
              <PostCard key={related.slug} post={related} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
