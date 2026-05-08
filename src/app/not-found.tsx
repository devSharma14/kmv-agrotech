import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative bg-surface-alt min-h-[70vh] flex items-center border-b border-slate-200">
      <div className="absolute inset-0 bg-grid-soft opacity-50" aria-hidden />
      <div className="container-x relative py-section">
        <div className="text-xs uppercase tracking-[0.14em] font-semibold text-accent-dark mb-5">
          Error 404 · Page not found
        </div>
        <h1 className="font-display font-extrabold text-display-xl text-ink tracking-tight max-w-3xl">
          That page isn't in our catalogue.
        </h1>
        <p className="mt-5 text-base md:text-lg text-slate-600 max-w-xl leading-relaxed">
          The link may be outdated, or the page may have been moved. Use the menu above or head
          back to the start.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="btn-primary">
            <ArrowLeft className="h-4 w-4" /> Return home
          </Link>
          <Link href="/products" className="btn-outline">
            Browse products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
