"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { nav, site } from "@/lib/site";
import { categories } from "@/data/categories";
import { Logo } from "./Logo";
import clsx from "clsx";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden md:block bg-brand-deep text-white text-xs">
        <div className="container-x flex items-center justify-between h-9">
          <div className="flex items-center gap-5">
            <span className="text-white/70">ISO 9001:2015 · MSME · Make in India</span>
          </div>
          <div className="flex items-center gap-5">
            <a href={`tel:${site.phoneRaw}`} className="flex items-center gap-1.5 hover:text-accent-soft transition-colors">
              <Phone className="h-3 w-3" /> {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-1.5 hover:text-accent-soft transition-colors">
              <Mail className="h-3 w-3" /> {site.email}
            </a>
          </div>
        </div>
      </div>

      <header
        className={clsx(
          "sticky top-0 inset-x-0 z-40 bg-white transition-shadow duration-200",
          scrolled ? "shadow-card border-b border-slate-200" : "border-b border-slate-100"
        )}
      >
        <div className="container-x flex h-[88px] items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3.5" aria-label="KMV Agrotech home">
            <Logo className="h-16 w-16" />
            <div className="leading-tight hidden sm:block">
              <div className="font-display text-[1.15rem] md:text-[1.25rem] font-bold text-ink tracking-tight">
                KMV Agrotech &amp; Engineering Works
              </div>
              <div className="text-[0.7rem] uppercase tracking-[0.12em] text-slate-500 mt-1 font-medium">
                Est. 2017 · Roorkee, India
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center" aria-label="Primary">
            <Link
              href="/"
              className={clsx(
                "px-4 py-2 text-sm font-semibold transition-colors",
                pathname === "/" ? "text-brand" : "text-slate-700 hover:text-brand"
              )}
            >
              Home
            </Link>

            {/* Products with dropdown */}
            <div className="relative group">
              <Link
                href="/products"
                className={clsx(
                  "flex items-center gap-1 px-4 py-2 text-sm font-semibold transition-colors",
                  pathname.startsWith("/products") ? "text-brand" : "text-slate-700 hover:text-brand"
                )}
              >
                Products <ChevronDown className="h-3.5 w-3.5" />
              </Link>
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150 absolute top-full -left-4 pt-2 w-[320px]">
                <div className="bg-white border border-slate-200 rounded-md shadow-card-hover overflow-hidden">
                  {categories.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/products/${c.slug}`}
                      className="block px-5 py-3 hover:bg-brand-50 border-b border-slate-100 last:border-b-0 group/item"
                    >
                      <div className="text-sm font-semibold text-ink group-hover/item:text-brand">{c.name}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{c.short}</div>
                    </Link>
                  ))}
                  <Link
                    href="/products"
                    className="block px-5 py-3 bg-slate-50 text-xs font-semibold text-brand uppercase tracking-wider hover:bg-brand-50"
                  >
                    View all products →
                  </Link>
                </div>
              </div>
            </div>

            {nav.slice(1).map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    "px-4 py-2 text-sm font-semibold transition-colors",
                    active ? "text-brand" : "text-slate-700 hover:text-brand"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/contact" className="hidden md:inline-flex btn-accent text-sm py-2.5 px-5">
              Request a Quote
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden inline-flex items-center justify-center h-11 w-11 -mr-2 text-ink rounded hover:bg-slate-100"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={clsx(
          "fixed inset-0 z-30 lg:hidden transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!open}
      >
        <div className="absolute inset-0 bg-brand-deep/40 backdrop-blur-sm" onClick={() => setOpen(false)} />
        <div
          className={clsx(
            "absolute top-0 right-0 bottom-0 w-full max-w-sm bg-white transition-transform duration-300",
            open ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="h-[76px] border-b border-slate-200 flex items-center justify-between px-5">
            <span className="font-semibold text-ink">Menu</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="h-10 w-10 flex items-center justify-center text-ink rounded hover:bg-slate-100"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-col" aria-label="Mobile">
            <Link href="/" className="px-5 py-4 border-b border-slate-100 text-base font-semibold text-ink hover:bg-slate-50">
              Home
            </Link>
            <details className="border-b border-slate-100 group">
              <summary className="px-5 py-4 text-base font-semibold text-ink hover:bg-slate-50 cursor-pointer flex items-center justify-between">
                Products <ChevronDown className="h-4 w-4 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="bg-slate-50">
                {categories.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/products/${c.slug}`}
                    className="block pl-9 pr-5 py-3 text-sm text-slate-700 hover:bg-white hover:text-brand"
                  >
                    {c.name}
                  </Link>
                ))}
                <Link
                  href="/products"
                  className="block pl-9 pr-5 py-3 text-sm font-semibold text-brand hover:bg-white"
                >
                  All products →
                </Link>
              </div>
            </details>
            {nav.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-5 py-4 border-b border-slate-100 text-base font-semibold text-ink hover:bg-slate-50"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="p-5 space-y-2.5">
            <Link href="/contact" className="btn-accent w-full justify-center">
              Request a Quote
            </Link>
            <a href={`tel:${site.phoneRaw}`} className="btn-ghost w-full justify-center">
              <Phone className="h-4 w-4" /> {site.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

