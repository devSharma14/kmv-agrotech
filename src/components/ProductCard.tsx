import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product; index?: number }) {
  return (
    <Link
      href={`/products/${product.category}/${product.slug}`}
      className="group flex flex-col card card-hover h-full overflow-hidden"
    >
      {/* Photo area */}
      <div className="relative aspect-[4/3] bg-white border-b border-slate-200 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width:1280px) 25vw, (min-width:768px) 33vw, 50vw"
          className="object-contain p-4 group-hover:scale-[1.03] transition-transform duration-500"
        />
        {product.featured && (
          <div className="absolute top-3 right-3 badge bg-accent text-white">Featured</div>
        )}
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-display text-base font-bold text-ink leading-snug group-hover:text-brand transition-colors">
          {product.name}
        </h3>
        <p className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-2">{product.summary}</p>

        <div className="mt-auto pt-4 flex items-center justify-between border-t border-slate-100">
          <span className="text-xs font-semibold text-brand uppercase tracking-wider">View details</span>
          <ArrowRight className="h-4 w-4 text-brand group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
