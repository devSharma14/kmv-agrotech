import type { Metadata } from "next";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { brands } from "@/data/brands";
import { CategoryCard } from "@/components/CategoryCard";
import { ProductCard } from "@/components/ProductCard";
import { PageHeader } from "@/components/PageHeader";
import { Crumbs } from "@/components/Crumbs";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { CatalogueButton } from "@/components/CatalogueButton";
import { LogoTile } from "@/components/LogoTile";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse the KMV Agrotech catalogue — microscopes, weighing balances, scientific instruments and biotech equipment.",
};

export default function ProductsIndex() {
  return (
    <>
      <PageHeader
        eyebrow="Products"
        title="Everything we sell, in one place."
        description={`${products.length}+ products, sorted into 4 simple categories. Pick a category below to see what's inside.`}
        meta={
          <div className="flex flex-col gap-5">
            <Crumbs items={[{ label: "Home", href: "/" }, { label: "Products" }]} />
            <div className="flex flex-wrap gap-3">
              <CatalogueButton variant="primary" />
            </div>
          </div>
        }
      />

      {/* Categories */}
      <section className="py-section bg-white">
        <div className="container-x">
          <SectionLabel className="mb-4">Categories</SectionLabel>
          <h2 className="section-heading mb-12 max-w-3xl">
            Tap any category to see its products.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.05}>
                <CategoryCard category={c} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* All products */}
      <section className="py-section bg-surface-alt border-t border-slate-200">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <SectionLabel className="mb-4">All products</SectionLabel>
              <h2 className="section-heading">All {products.length} products.</h2>
            </div>
            <p className="md:max-w-md text-sm text-slate-600 leading-relaxed">
              Can't find what you need? Just tell us — we work with {brands.length}+ brands
              and can usually get it in a day or two.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={Math.min(i * 0.03, 0.4)}>
                <ProductCard product={p} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partner brands */}
      <section className="py-section bg-white">
        <div className="container-x">
          <SectionLabel className="mb-4">Brands we sell</SectionLabel>
          <h2 className="section-heading max-w-3xl mb-12">
            We are official sellers for {brands.length}+ brands.
          </h2>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {brands.map((b) => (
              <LogoTile
                key={b.name}
                name={b.name}
                src={b.logo}
                variant="light"
                className="h-20 w-36 md:h-24 md:w-44 rounded-md border border-slate-200 bg-white shadow-sm hover:shadow-card-hover hover:border-brand/30 hover:-translate-y-0.5 transition-all duration-200"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
