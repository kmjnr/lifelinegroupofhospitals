import Link from "next/link";
import { Fragment } from "react";
import { ChevronDownIcon } from "../shared/icons";

export interface Crumb {
  name: string;
  path: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-ink-muted">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <Fragment key={item.path}>
              {i > 0 && (
                <ChevronDownIcon className="h-3 w-3 -rotate-90 text-ink-muted/60" aria-hidden />
              )}
              {last ? (
                <li aria-current="page" className="font-semibold text-ink">
                  {item.name}
                </li>
              ) : (
                <li>
                  <Link href={item.path} className="hover:text-primary focus-ring rounded">
                    {item.name}
                  </Link>
                </li>
              )}
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
