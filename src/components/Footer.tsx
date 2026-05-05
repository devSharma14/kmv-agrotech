import Link from "next/link";
import { ArrowRight, MapPin, Phone, Mail, Clock, ShieldCheck } from "lucide-react";
import { site, nav } from "@/lib/site";
import { categories } from "@/data/categories";
import { WhatsAppGlyph } from "./WhatsAppFAB";
import { WHATSAPP_DEFAULT } from "@/lib/whatsapp";
import { CatalogueButton } from "./CatalogueButton";

export function Footer() {
  return (
    <footer className="bg-brand-deep text-white">
      {/* CTA strip */}
      <div className="bg-brand-dark border-b border-white/10">
        <div className="container-x py-10 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight">
              Have a project? Let's talk specifications.
            </h2>
            <p className="mt-2 text-white/70 text-sm">
              Tenders, RFQs and pilot enquiries answered within one working day.
            </p>
          </div>
          <div className="flex flex-wrap md:justify-end gap-3">
            <Link href="/contact" className="btn-accent">
              Request a Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={`mailto:${site.email}`} className="btn-ghost-light">
              <Mail className="h-4 w-4" /> Email us
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-x py-14 grid sm:grid-cols-2 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <div className="font-display text-xl font-bold tracking-tight">{site.name}</div>
          <p className="mt-4 text-sm text-white/65 leading-relaxed max-w-sm">
            {site.description}
          </p>
          <div className="mt-6 space-y-2.5 text-sm">
            <div className="flex gap-3">
              <MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" />
              <span className="text-white/80 leading-relaxed">
                {site.address.line1}<br />
                {site.address.line2}<br />
                {site.address.region} {site.address.postal}
              </span>
            </div>
            <a href={`tel:${site.phoneRaw}`} className="flex gap-3 hover:text-accent-soft transition-colors">
              <Phone className="h-4 w-4 text-accent shrink-0 mt-0.5" />
              <span>{site.phone}</span>
            </a>
            <a href={`mailto:${site.email}`} className="flex gap-3 hover:text-accent-soft transition-colors">
              <Mail className="h-4 w-4 text-accent shrink-0 mt-0.5" />
              <span className="break-all">{site.email}</span>
            </a>
            <a
              href={WHATSAPP_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3 hover:text-[#25D366] transition-colors"
            >
              <WhatsAppGlyph className="h-4 w-4 text-[#25D366] shrink-0 mt-0.5" />
              <span>WhatsApp · {site.whatsapp}</span>
            </a>
            <div className="flex gap-3 text-white/65">
              <Clock className="h-4 w-4 text-accent shrink-0 mt-0.5" />
              <span>{site.hours}</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <FooterTitle>Company</FooterTitle>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/" className="text-white/75 hover:text-white">Home</Link></li>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/75 hover:text-white">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <FooterTitle>Product Categories</FooterTitle>
          <ul className="space-y-2.5 text-sm">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/products/${c.slug}`} className="text-white/75 hover:text-white">{c.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <FooterTitle>Certifications</FooterTitle>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <ShieldCheck className="h-4 w-4 text-accent shrink-0 mt-0.5" />
              <div>
                <div className="text-white font-semibold">ISO 9001:2015</div>
                <div className="text-white/55 text-xs">Quality management certified</div>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <ShieldCheck className="h-4 w-4 text-accent shrink-0 mt-0.5" />
              <div>
                <div className="text-white font-semibold">MSME Registered</div>
                <div className="text-white/55 text-xs">Udyam ID verified</div>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <ShieldCheck className="h-4 w-4 text-accent shrink-0 mt-0.5" />
              <div>
                <div className="text-white font-semibold">Make in India</div>
                <div className="text-white/55 text-xs">GoI initiative participant</div>
              </div>
            </li>
          </ul>

          <div className="mt-7 pt-5 border-t border-white/10">
            <CatalogueButton variant="footer-link" />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-3 text-xs text-white/55">
          <div>© {new Date().getFullYear()} KMV Agrotech & Engineering Works. All rights reserved.</div>
          <div className="flex items-center gap-4 font-mono">
            <span>29.86°N · 77.89°E</span>
            <span className="h-1 w-1 rounded-full bg-accent" />
            <span>Roorkee, Uttarakhand</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-xs uppercase tracking-[0.14em] font-semibold text-white/50 mb-4">
      {children}
    </div>
  );
}
