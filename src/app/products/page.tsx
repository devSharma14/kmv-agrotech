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

export const metadata: Metadata = {
  title: "Products",
  description:
    "The full KMV Agrotech catalogue: hydrology, meteorology, agricultural research, scientific & survey, and geological & geotechnical instruments.",
};

export default function ProductsIndex() {
  return (
    <>
      <PageHeader
        eyebrow="Products"
        title="Field-grade instruments, organised for procurement."
        description={`A curated portfolio of ${products.length}+ instruments from ${brands.length}+ international manufacturers, across five disciplines.`}
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
          <SectionLabel className="mb-4">By discipline</SectionLabel>
          <h2 className="section-heading mb-12 max-w-3xl">
            Five disciplines. Pick a category to start.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
              <SectionLabel className="mb-4">Complete catalogue</SectionLabel>
              <h2 className="section-heading">All {products.length} instruments.</h2>
            </div>
            <p className="md:max-w-md text-sm text-slate-600 leading-relaxed">
              Need something not listed here? Our team can source it from one of our 24+ partner
              manufacturers — usually within two working days.
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
          <SectionLabel className="mb-4">Partner brands</SectionLabel>
          <h2 className="section-heading max-w-3xl mb-12">
            Authorised distributor for {brands.length}+ international manufacturers.
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-px bg-slate-200 border border-slate-200 rounded-md overflow-hidden">
            {brands.map((b) => (
              <div
                key={b}
                className="bg-white px-4 py-7 flex items-center justify-center text-center font-display text-sm font-bold text-ink hover:bg-brand-50 hover:text-brand transition-colors"
              >
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
