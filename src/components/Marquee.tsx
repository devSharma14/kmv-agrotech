"use client";

import clsx from "clsx";

export function Marquee({ items, className }: { items: string[]; className?: string }) {
  const doubled = [...items, ...items];
  return (
    <div className={clsx("relative overflow-hidden gradient-edge-mask", className)}>
      <div className="flex w-max animate-marquee-x">
        {doubled.map((item, i) => (
          <div
            key={`${item}-${i}`}
            className="flex items-center gap-8 px-8 text-base md:text-lg font-semibold text-slate-500 whitespace-nowrap shrink-0"
          >
            <span>{item}</span>
            <span className="text-slate-300">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}
