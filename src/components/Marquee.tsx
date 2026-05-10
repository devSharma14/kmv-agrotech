"use client";

import Image from "next/image";
import clsx from "clsx";
import type { Brand } from "@/data/brands";

export function Marquee({ items, className }: { items: Brand[]; className?: string }) {
  const doubled = [...items, ...items];
  return (
    <div className={clsx("relative overflow-hidden gradient-edge-mask", className)}>
      <div className="flex w-max animate-marquee-x items-center">
        {doubled.map((item, i) => (
          <div
            key={`${item.name}-${i}`}
            className="flex items-center justify-center px-8 shrink-0"
            title={item.name}
          >
            <div className="relative h-12 w-32 md:h-14 md:w-36">
              <Image
                src={item.logo}
                alt={item.name}
                fill
                sizes="160px"
                className="object-contain hover:scale-110 transition-transform duration-300"
                unoptimized
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
