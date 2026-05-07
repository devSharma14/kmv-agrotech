import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, ArrowLeft, ExternalLink, ShieldCheck } from "lucide-react";
import { products, getProduct, relatedProducts } from "@/data/products";
import { getCategory } from "@/data/categories";
import { Crumbs } from "@/components/Crumbs";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { WhatsAppGlyph } from "@/components/WhatsAppFAB";
import { whatsappProductInquiry } from "@/lib/whatsapp";

export function generateStaticParams() {
  return products.map((p) => ({ category: p.category, slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { category: string; slug: string };
}): Promise<Metadata> {
  const p = getProduct(params.slug);
  if (!p) return {};
  return { title: `${p.name}`, description: p.summary };
}

export default function ProductDetail({ params }: { params: { category: string; slug: string } }) {
  const product = getProduct(params.slug);
  const category = getCategory(params.category);
  if (!product || !category || product.category !== params.category) notFound();

  const related = relatedProducts(product.slug, product.category, 3);
  const isMailto = product.externalUrl?.startsWith("mailto:");
  const waUrl = whatsappProductInquiry(product.name);

  return (
    <>
      {/* HERO */}
      <section className="bg-surface-alt border-b border-slate-200">
        <div className="container-x grid lg:grid-cols-12 gap-10 lg:gap-14 py-10 md:py-14 items-start">
          {/* Left: text */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <Crumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Products", href: "/products" },
                { label: category.short, href: `/products/${category.slug}` },
                { label: product.name },
              ]}
            />

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="chip-brand">{category.name}</span>
              {product.featured && <span className="chip-accent">Featured</span>}
            </div>

            <h1 className="mt-4 font-display font-extrabold text-display-lg text-ink tracking-tight">
              {product.name}
            </h1>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed max-w-2xl">
              {product.summary}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {product.externalUrl && (
                <a
                  href={product.externalUrl}
                  target={isMailto ? undefined : "_blank"}
                  rel={isMailto ? undefined : "noopener noreferrer"}
                  className="btn-accent"
                >
                  {isMailto ? "Inquire to buy" : "Buy from manufacturer"}
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 text-sm font-semibold rounded transition-all duration-200 hover:bg-[#1EBE5A] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/30"
              >
                <WhatsAppGlyph className="h-4 w-4" />
                Chat on WhatsApp
              </a>
              <Link href="/contact" className="btn-outline">
                Request a quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href={`/products/${category.slug}`} className="btn-ghost">
                <ArrowLeft className="h-4 w-4" /> Back to {category.short}
              </Link>
            </div>

            {/* Trust strip */}
            <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-slate-600">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-brand" />
                <span>Authorised distributor</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-brand" />
                <span>Calibration & training included</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-brand" />
                <span>24-hour service response</span>
              </div>
            </div>
          </div>

          {/* Right: image */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative aspect-square card overflow-hidden bg-white p-4">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(min-width:1024px) 40vw, 100vw"
                className="object-contain p-6"
                priority
              />
              <div className="absolute top-4 left-4 chip-brand">{category.name}</div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW + SPECS */}
      <section className="py-section bg-white">
        <div className="container-x grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <SectionLabel className="mb-4">Overview</SectionLabel>
            <p className="text-lg text-slate-700 leading-relaxed max-w-prose">
              {product.description}
            </p>

            {product.features.length > 0 && (
              <div className="mt-12">
                <SectionLabel className="mb-4">Key features</SectionLabel>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 card p-4">
                      <Check className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                      <span className="text-sm text-ink leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.applications.length > 0 && (
              <div className="mt-12">
                <SectionLabel className="mb-4">Applications</SectionLabel>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((a) => (
                    <span key={a} className="chip">{a}</span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar — buy / spec / why-buy */}
          <aside className="lg:col-span-5">
            <div className="lg:sticky lg:top-24 space-y-4">
              {/* Buy panel */}
              <div className="card p-7 bg-brand text-white border-brand">
                <div className="text-xs uppercase tracking-[0.14em] font-semibold text-accent mb-2">
                  Buy this product
                </div>
                <div className="font-display text-lg font-bold leading-snug">
                  {product.name}
                </div>
                <p className="mt-3 text-sm text-white/75 leading-relaxed">
                  KMV Agrotech is the supplier — we represent multiple international brands.
                  Send a quote request and our team will respond within one working day with
                  pricing, lead time and supported variants.
                </p>

                <div className="mt-6 flex flex-col gap-2.5">
                  {product.externalUrl && (
                    <a
                      href={product.externalUrl}
                      target={isMailto ? undefined : "_blank"}
                      rel={isMailto ? undefined : "noopener noreferrer"}
                      className="btn-accent w-full justify-center"
                    >
                      {isMailto ? "Inquire to buy" : "Buy from manufacturer"}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 text-sm font-semibold rounded transition-all duration-200 hover:bg-[#1EBE5A] active:scale-[0.98] w-full"
                  >
                    <WhatsAppGlyph className="h-4 w-4" />
                    Chat on WhatsApp
                  </a>
                  <Link href="/contact" className="btn-ghost-light w-full justify-center">
                    Send project brief
                  </Link>
                </div>
              </div>

              {/* Specs */}
              {product.specs && product.specs.length > 0 && (
                <div className="card p-6">
                  <div className="text-xs uppercase tracking-[0.14em] font-semibold text-accent-dark mb-4">
                    Specifications
                  </div>
                  <dl className="divide-y divide-slate-200">
                    {product.specs.map((s) => (
                      <div key={s.label} className="flex items-baseline justify-between gap-4 py-2.5">
                        <dt className="text-xs text-slate-500 uppercase tracking-wide font-semibold shrink-0">
                          {s.label}
                        </dt>
                        <dd className="font-mono text-sm text-ink text-right">{s.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}

              {/* Why-KMV */}
              <div className="card p-6">
                <div className="text-xs uppercase tracking-[0.14em] font-semibold text-accent-dark mb-4">
                  Why buy from KMV
                </div>
                <ul className="space-y-2.5 text-sm text-slate-700">
                  <li className="flex gap-2"><Check className="h-4 w-4 text-brand shrink-0 mt-0.5" /> Authorised multi-brand distributor</li>
                  <li className="flex gap-2"><Check className="h-4 w-4 text-brand shrink-0 mt-0.5" /> Commissioning + operator training</li>
                  <li className="flex gap-2"><Check className="h-4 w-4 text-brand shrink-0 mt-0.5" /> NABL-traceable calibration</li>
                  <li className="flex gap-2"><Check className="h-4 w-4 text-brand shrink-0 mt-0.5" /> 24-hour service response</li>
                  <li className="flex gap-2"><Check className="h-4 w-4 text-brand shrink-0 mt-0.5" /> GeM-listed (Seller ID 73AF180000516029)</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="py-section bg-surface-alt border-t border-slate-200">
          <div className="container-x">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
              <div>
                <SectionLabel className="mb-4">Related instruments</SectionLabel>
                <h2 className="section-heading">More from {category.short}</h2>
              </div>
              <Link
                href={`/products/${category.slug}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark"
              >
                View all <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.05}>
                  <ProductCard product={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
