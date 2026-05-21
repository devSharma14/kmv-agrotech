import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories, getCategory } from "@/data/categories";
import { productsByCategory } from "@/data/products";
import { PageHeader } from "@/components/PageHeader";
import { Crumbs } from "@/components/Crumbs";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

export function generateStaticParams() {
  // hydrology has its own dedicated page at /products/hydrology
  return categories.filter((c) => c.slug !== "hydrology").map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { category: string };
}): Promise<Metadata> {
  const c = getCategory(params.category);
  if (!c) return {};
  return { title: c.name, description: c.description };
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = getCategory(params.category);
  if (!category) notFound();

  const list = productsByCategory(category.slug);
  const otherCategories = categories.filter((c) => c.slug !== category.slug);

  return (
    <>
      <PageHeader
        eyebrow={`Category ${category.number} of 05`}
        title={category.name}
        description={category.description}
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

      {/* Products */}
      <section className="py-section bg-white">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <SectionLabel className="mb-4">{list.length} products</SectionLabel>
              <h2 className="section-heading">Field-tested. Service-backed.</h2>
            </div>
          </div>

          {list.length === 0 ? (
            <p className="text-slate-600">No products in this category yet.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {list.map((p, i) => (
                <Reveal key={p.slug} delay={Math.min(i * 0.04, 0.4)}>
                  <ProductCard product={p} index={i} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

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
                <div className="text-xs font-mono text-slate-400 mb-2">
                  {c.number} / 05
                </div>
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
