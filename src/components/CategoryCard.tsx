import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Category } from "@/data/categories";

// Lead image to feature for each category
const CATEGORY_HERO: Record<string, { src: string; alt: string }> = {
  microscopes: { src: "/products/microscopes/research.jpg", alt: "Research Microscope" },
  balances: { src: "/products/balances/analytical-balance.jpg", alt: "Analytical Balance" },
  laboratory: { src: "/products/laboratory/spectrophotometers-uv-vis.jpg", alt: "UV-Vis Spectrophotometer" },
  biotech: { src: "/products/biotech/plant-growth-chamber.jpg", alt: "Plant Growth Chamber" },
};

export function CategoryCard({ category }: { category: Category }) {
  const hero = CATEGORY_HERO[category.slug];

  return (
    <Link
      href={`/products/${category.slug}`}
      className="group flex flex-col card card-hover h-full overflow-hidden"
    >
      <div className="relative h-48 md:h-52 bg-white border-b border-slate-200 overflow-hidden">
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background: `linear-gradient(135deg, ${category.color}1A 0%, transparent 60%)`,
          }}
          aria-hidden
        />
        {hero && (
          <Image
            src={hero.src}
            alt={hero.alt}
            fill
            sizes="(min-width:1024px) 33vw, 50vw"
            className="object-contain p-6 group-hover:scale-[1.05] transition-transform duration-500"
          />
        )}
        {/* category-color accent rail */}
        <div className="absolute top-0 inset-x-0 h-1" style={{ backgroundColor: category.color }} aria-hidden />
        <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-white border border-slate-200 text-xs font-semibold text-ink shadow-sm">
          <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: category.color }} />
          {category.number} <span className="text-slate-400">/ 04</span>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <div className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] mb-2" style={{ color: category.color }}>
          {category.short}
        </div>
        <h3 className="font-display text-lg font-bold text-ink leading-snug group-hover:text-brand transition-colors">
          {category.name}
        </h3>
        <p className="mt-2 text-sm text-slate-600 leading-relaxed">{category.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {category.applications.slice(0, 3).map((a) => (
            <span key={a} className="chip">{a}</span>
          ))}
        </div>

        <div className="mt-auto pt-5 flex items-center justify-between border-t border-slate-100">
          <span className="text-sm font-semibold text-brand group-hover:text-brand-dark">Explore range</span>
          <span
            className="h-8 w-8 flex items-center justify-center rounded-full transition-colors"
            style={{ backgroundColor: `${category.color}14`, color: category.color }}
          >
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  );
}
