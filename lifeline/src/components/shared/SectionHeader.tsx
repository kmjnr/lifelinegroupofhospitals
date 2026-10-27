import type { ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  sub?: string;
  align?: "center" | "left";
  action?: ReactNode;
  dark?: boolean;
  as?: "h1" | "h2";
}

export function SectionHeader({
  title,
  sub,
  align = "center",
  action,
  dark = false,
  as: Tag = "h2",
}: SectionHeaderProps) {
  const alignCls =
    align === "center" ? "mx-auto items-center text-center" : "items-start text-left";
  return (
    <div className={`flex flex-col gap-3 ${alignCls} ${action ? "sm:flex-row sm:items-end sm:justify-between sm:text-left" : ""}`}>
      <div className={`flex flex-col gap-3 ${align === "center" && !action ? "items-center" : "items-start"}`}>
        <Tag
          className={`font-display text-balance font-bold tracking-tight text-heading ${
            dark ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </Tag>
        {sub && (
          <p className={`max-w-[640px] leading-relaxed ${dark ? "text-on-dark-muted" : "text-ink"}`}>
            {sub}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
