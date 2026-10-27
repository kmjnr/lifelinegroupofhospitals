import type { PostBlock } from "@/content/blog";
import { ShieldCheckIcon } from "../shared/icons";

/** Renders the typed body blocks of a blog post. */
export function PostBody({ blocks }: { blocks: PostBlock[] }) {
  return (
    <div className="flex flex-col gap-5">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "p":
            return (
              <p key={i} className="text-[17px] leading-[1.8] text-ink">
                {block.text}
              </p>
            );
          case "h2":
            return (
              <h2
                key={i}
                className="font-display pt-4 text-[1.375rem] font-bold tracking-tight text-ink"
              >
                {block.text}
              </h2>
            );
          case "ul":
            return (
              <ul key={i} className="flex flex-col gap-2.5 pt-1">
                {block.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex gap-3 text-[16.5px] leading-relaxed text-ink"
                  >
                    <span
                      aria-hidden
                      className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            );
          case "callout":
            return (
              <aside
                key={i}
                className="my-2 rounded-2xl border border-primary/15 bg-surface p-6"
              >
                <p className="flex items-center gap-2 font-display text-base font-bold text-navy">
                  <ShieldCheckIcon className="h-5 w-5 shrink-0 text-primary" aria-hidden />
                  {block.title}
                </p>
                <p className="mt-2 text-[16px] leading-relaxed text-ink">{block.text}</p>
              </aside>
            );
        }
      })}
    </div>
  );
}
