"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const FEATURED = {
  src: "/products/microscopes/research.jpg",
  name: "Research Microscope",
  href: "/products/microscopes/research-microscope",
  caption: "Research / Trinocular",
};

const TILES = [
  { src: "/products/biotech/plant-growth-chamber.jpg", name: "Plant Growth Chamber", href: "/products/biotech/plant-growth-chamber" },
  { src: "/products/balances/analytical-balance.jpg", name: "Analytical Balance", href: "/products/balances/analytical-balance" },
  { src: "/products/laboratory/spectrophotometers-uv-vis.jpg", name: "UV-Vis Spectrophotometer", href: "/products/laboratory/spectrophotometer-uv-vis" },
  { src: "/products/biotech/centrifuges.jpg", name: "Centrifuge", href: "/products/biotech/centrifuge" },
];

export function HeroVisual() {
  return (
    <div className="relative w-full max-w-[600px] mx-auto">
      {/* Featured large product card */}
      <div className="relative">
        <Link
          href={FEATURED.href}
          className="group relative block aspect-[5/4] bg-white border border-slate-200 rounded-md overflow-hidden shadow-card-hover"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-50/40 via-transparent to-white" aria-hidden />
          <Image
            src={FEATURED.src}
            alt={FEATURED.name}
            fill
            sizes="(min-width:1024px) 40vw, 90vw"
            priority
            className="object-contain p-8 group-hover:scale-[1.03] transition-transform duration-500"
          />
          <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-2.5 py-1 rounded-sm bg-accent text-white text-[0.65rem] font-bold uppercase tracking-[0.16em]">
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
            Featured
          </div>
          <div className="absolute bottom-0 inset-x-0 bg-white/95 backdrop-blur-sm border-t border-slate-200 px-5 py-4 flex items-center justify-between">
            <div>
              <div className="text-[0.65rem] font-semibold uppercase tracking-wider text-accent-dark">
                {FEATURED.caption}
              </div>
              <div className="font-display text-base font-bold text-ink">{FEATURED.name}</div>
            </div>
            <span className="h-9 w-9 flex items-center justify-center bg-brand text-white rounded-full group-hover:bg-brand-dark transition-colors">
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </div>
        </Link>

        {/* small floating spec card top-right */}
        <div className="absolute -top-4 -right-4 hidden md:block">
          <div className="bg-brand-deep text-white border border-brand-dark rounded-md shadow-card-hover px-4 py-3">
            <div className="text-[0.6rem] uppercase tracking-wider font-semibold text-accent">
              Catalogue
            </div>
            <div className="font-display text-2xl font-extrabold leading-none mt-1">
              60<span className="text-accent">+</span>
            </div>
            <div className="text-[0.65rem] text-white/65 mt-0.5">products in stock</div>
          </div>
        </div>
      </div>

      {/* 4 product tiles */}
      <div className="mt-4 grid grid-cols-4 gap-2.5">
        {TILES.map((t) => (
          <Link
            key={t.href}
            href={t.href}
            className="group relative aspect-square bg-white border border-slate-200 rounded-md overflow-hidden hover:border-brand/40 hover:shadow-card transition-all"
          >
            <Image
              src={t.src}
              alt={t.name}
              fill
              sizes="100px"
              className="object-contain p-2 group-hover:scale-[1.05] transition-transform duration-500"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
