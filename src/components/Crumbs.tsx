import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Crumbs({ items, light }: { items: { label: string; href?: string }[]; light?: boolean }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, i) => (
          <li key={`${item.label}-${i}`} className="flex items-center gap-1.5">
            {item.href ? (
              <Link
                href={item.href}
                className={
                  light
                    ? "text-white/60 hover:text-white transition-colors"
                    : "text-slate-500 hover:text-brand transition-colors"
                }
              >
                {item.label}
              </Link>
            ) : (
              <span className={light ? "text-white font-semibold" : "text-ink font-semibold"}>{item.label}</span>
            )}
            {i < items.length - 1 && (
              <ChevronRight className={light ? "h-3 w-3 text-white/30" : "h-3 w-3 text-slate-400"} />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
