import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Layers } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Crumbs } from "@/components/Crumbs";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { getCategory, categories } from "@/data/categories";
import {
  hydrologyIntro,
  hydrologySubCategories,
  type HydroProduct,
} from "@/data/hydrology";

const category = getCategory("hydrology")!;
const ACCENT = category.color; // cyan

// Product photos extracted from the source catalogue, keyed by product name.
const PRODUCT_IMAGES: Record<string, string> = {
  "Staff Gauges": "/products/hydrology/staff-gauges.jpeg",
  "Water Level Recorders": "/products/hydrology/water-level-recorders.jpeg",
  "Level Measurement Devices": "/products/hydrology/level-measurement-devices.jpeg",
  "Solinst Dataloggers": "/products/hydrology/solinst-dataloggers.png",
  "Odyssey Dataflow Environmental Loggers": "/products/hydrology/odyssey-dataflow.png",
  "Radar & Ultrasonic Level Sensors": "/products/hydrology/radar-ultrasonic-sensors.jpeg",
  "Current Meters": "/products/hydrology/current-meters.jpeg",
  "Ultrasonic & Radar Flow Meters": "/products/hydrology/flow-meters.jpeg",
  "Weirs": "/products/hydrology/weirs.png",
  "Flumes": "/products/hydrology/flumes.png",
  "Runoff Samplers": "/products/hydrology/runoff-samplers.png",
  "KISTERS iLevel-GW IP Groundwater Logger": "/products/hydrology/ilevel-gw.png",
  "KISTERS HyPremo Hydrostatic Pressure Sensor": "/products/hydrology/hypremo.png",
  "Suspended Solids Monitoring Systems": "/products/hydrology/suspended-solids.png",
  "Water Quality Monitoring Systems": "/products/hydrology/kisters-water-quality.png",
  "UG5 Series Water Quality Meters": "/products/hydrology/spectrum-ug5.png",
  "Data Acquisition & Telemetry Systems": "/products/hydrology/kisters-telemetry.jpeg",
};

export const metadata: Metadata = {
  title: category.name,
  description:
    "Hydrological instruments — water level, flow, groundwater, sediment, water quality and telemetry systems from Solinst, KISTERS, JDC, Decatur, Odyssey, Sino-Inst, InsiteIG and Spectrum Technologies.",
};

export default function HydrologyPage() {
  const otherCategories = categories.filter((c) => c.slug !== "hydrology");
  const productCount = hydrologySubCategories.reduce((n, s) => n + s.products.length, 0);

  return (
    <>
      <PageHeader
        eyebrow={`Category ${category.number} of 05`}
        title={category.name}
        description={hydrologyIntro}
        meta={
          <div className="flex flex-col gap-5">
            <Crumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Products", href: "/products" },
                { label: category.short },
              ]}
            />
            <div className="flex flex-wrap gap-2">
              {category.applications.map((a) => (
                <span key={a} className="chip">{a}</span>
              ))}
            </div>
          </div>
        }
      />

      {/* Sub-category quick nav */}
      <section className="bg-white border-b border-slate-200 sticky top-[88px] z-20">
        <div className="container-x py-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          <span className="text-xs uppercase tracking-[0.14em] font-semibold text-slate-400">
            {hydrologySubCategories.length} groups · {productCount} products
          </span>
          {hydrologySubCategories.map((s) => (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              className="font-medium text-slate-600 hover:text-brand transition-colors"
            >
              {s.name.replace(" Instruments", "").replace(" Equipment", "").replace(" Systems", "")}
            </a>
          ))}
        </div>
      </section>

      {hydrologySubCategories.map((sub, si) => (
        <section
          key={sub.slug}
          id={sub.slug}
          className={`py-section scroll-mt-40 ${si % 2 === 0 ? "bg-white" : "bg-surface-alt border-y border-slate-200"}`}
        >
          <div className="container-x">
            <div className="grid lg:grid-cols-12 gap-8 mb-10">
              <div className="lg:col-span-7">
                <span className="accent-rule" style={{ backgroundColor: ACCENT }} />
                <SectionLabel className="mb-4">
                  Group {String(si + 1).padStart(2, "0")}
                </SectionLabel>
                <h2 className="section-heading">{sub.name}</h2>
              </div>
              <p className="lg:col-span-5 lg:pt-12 section-sub">{sub.description}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {sub.products.map((p, pi) => (
                <Reveal key={p.name} delay={Math.min(pi * 0.04, 0.3)}>
                  <ProductCard product={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Other categories */}
      <section className="py-section bg-surface-alt border-t border-slate-200">
        <div className="container-x">
          <SectionLabel className="mb-4">Other categories</SectionLabel>
          <h2 className="section-heading mb-10">Continue browsing the catalogue.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {otherCategories.map((c) => (
              <Link
                key={c.slug}
                href={`/products/${c.slug}`}
                className="group flex flex-col card card-hover p-6"
              >
                <div className="text-xs font-mono text-slate-400 mb-2">{c.number} / 05</div>
                <h3 className="font-display text-base font-bold text-ink leading-snug group-hover:text-brand transition-colors">
                  {c.name}
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-2">{c.short}</p>
                <div className="mt-auto pt-5 flex items-center gap-2 text-brand text-sm font-semibold">
                  Explore <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ProductCard({ product }: { product: HydroProduct }) {
  const img = PRODUCT_IMAGES[product.name];
  return (
    <div className="card p-6 md:p-7 h-full flex flex-col">
      {img && (
        <div className="relative aspect-[16/10] bg-slate-50 rounded-lg border border-slate-200 overflow-hidden mb-5">
          <Image
            src={img}
            alt={product.name}
            fill
            sizes="(min-width:768px) 45vw, 100vw"
            className="object-contain"
          />
        </div>
      )}
      <div className="h-1 w-10 rounded-full mb-4" style={{ backgroundColor: ACCENT }} aria-hidden />

      {product.brand && (
        <div className="text-xs uppercase tracking-[0.14em] font-semibold mb-1.5" style={{ color: ACCENT }}>
          {product.brand}
        </div>
      )}
      <h3 className="font-display text-lg font-bold text-ink tracking-tight leading-snug">
        {product.name}
      </h3>
      <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">{product.description}</p>

      {/* Simple textual variants */}
      {product.variants && product.variants.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {product.variants.map((v) => (
            <span key={v} className="chip">{v}</span>
          ))}
        </div>
      )}

      {/* Distinct models → sub-cards */}
      {product.models && product.models.length > 0 && (
        <div className="mt-5">
          <div className="flex items-center gap-1.5 text-xs uppercase tracking-[0.12em] font-semibold text-slate-400 mb-2.5">
            <Layers className="h-3.5 w-3.5" />
            Available models
          </div>
          <div className="grid sm:grid-cols-2 gap-2">
            {product.models.map((m) =>
              m.href ? (
                <a
                  key={m.name}
                  href={m.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between gap-2 rounded-md border border-slate-200 bg-slate-50 px-3 py-2.5 hover:border-brand/40 hover:bg-white transition-colors"
                >
                  <span className="text-sm font-medium text-ink leading-snug">{m.name}</span>
                  <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-brand shrink-0 mt-0.5" />
                </a>
              ) : (
                <div
                  key={m.name}
                  className="flex items-start gap-2 rounded-md border border-slate-200 bg-slate-50 px-3 py-2.5"
                >
                  <span className="h-1.5 w-1.5 rounded-full shrink-0 mt-1.5" style={{ backgroundColor: ACCENT }} />
                  <span className="text-sm font-medium text-ink leading-snug">{m.name}</span>
                </div>
              )
            )}
          </div>
        </div>
      )}

      {/* Main outbound link */}
      {product.href && (
        <a
          href={product.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 pt-4 border-t border-slate-100 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark"
        >
          Visit {product.brand ?? "product"} site
          <ArrowUpRight className="h-4 w-4" />
        </a>
      )}

      <div className="flex-1" />
    </div>
  );
}
