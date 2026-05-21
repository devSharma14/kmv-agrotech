import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, ArrowRight, Building2 } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Crumbs } from "@/components/Crumbs";
import { SectionLabel } from "@/components/SectionLabel";
import { WhatsAppGlyph } from "@/components/WhatsAppFAB";
import { WHATSAPP_DEFAULT } from "@/lib/whatsapp";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with KMV Agrotech & Engineering Works in Roorkee. Call, email or send us a message.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact us"
        title="Tell us what you need."
        description="One product or a full setup — send us your list by phone, email or WhatsApp, and we'll send you a quote within a working day."
        meta={<Crumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />}
      />

      <section className="py-section bg-white">
        <div className="container-x">
          <div className="max-w-2xl mb-10">
            <span className="accent-rule" />
            <SectionLabel className="mb-4">Get in touch</SectionLabel>
            <h2 className="section-heading mb-3">Call, email or message us.</h2>
            <p className="text-slate-600 max-w-lg">
              Reach us directly on any of the lines below — we reply to enquiries within a working day.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="card p-7">
              <SectionLabel className="mb-5">Reach us at</SectionLabel>
              <ul className="space-y-5">
                <li className="flex gap-4">
                  <div className="h-11 w-11 flex items-center justify-center bg-brand-50 text-brand rounded shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider font-semibold text-slate-500">Phone</div>
                    <a href={`tel:${site.phoneRaw}`} className="font-display text-base font-bold text-ink hover:text-brand block">
                      {site.phone}
                    </a>
                    <a href={`tel:${site.phone2Raw}`} className="font-display text-base font-bold text-ink hover:text-brand block mt-0.5">
                      {site.phone2}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="h-11 w-11 flex items-center justify-center bg-brand-50 text-brand rounded shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider font-semibold text-slate-500">Email</div>
                    <a href={`mailto:${site.email}`} className="font-display text-base font-bold text-ink hover:text-brand break-all block">
                      {site.email}
                    </a>
                    <a href={`mailto:${site.email2}`} className="font-display text-base font-bold text-ink hover:text-brand break-all block mt-0.5">
                      {site.email2}
                    </a>
                  </div>
                </li>
                <li>
                  <a
                    href={WHATSAPP_DEFAULT}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-4 group"
                  >
                    <div className="h-11 w-11 flex items-center justify-center bg-[#25D366]/10 text-[#25D366] rounded shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                      <WhatsAppGlyph className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider font-semibold text-slate-500">WhatsApp</div>
                      <div className="font-display text-base font-bold text-ink group-hover:text-[#1EBE5A]">
                        {site.whatsapp}
                      </div>
                    </div>
                  </a>
                </li>
                <li className="flex gap-4">
                  <div className="h-11 w-11 flex items-center justify-center bg-brand-50 text-brand rounded shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider font-semibold text-slate-500">Hours</div>
                    <div className="font-display text-base font-bold text-ink">{site.hours}</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="card bg-brand text-white border-brand p-7 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-deep opacity-30" aria-hidden />
              <div className="relative">
                <div className="flex items-center gap-2 mb-4 text-xs uppercase tracking-[0.14em] font-semibold text-accent">
                  <Building2 className="h-4 w-4" />
                  Visit our office
                </div>
                <div className="flex gap-3">
                  <MapPin className="h-5 w-5 text-accent shrink-0 mt-1" />
                  <div className="text-white/90 leading-relaxed text-sm">
                    {site.address.line1}<br />
                    {site.address.line2}<br />
                    {site.address.region}<br />
                    <span className="font-mono">{site.address.postal}</span>
                  </div>
                </div>
                <div className="mt-5 pt-5 border-t border-white/15 font-mono text-xs text-white/65 space-y-1.5">
                  <div>29.86°N · 77.89°E</div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Drop in any time
                  </div>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Old+Railway+Road+Roorkee+247667"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 btn-accent w-full justify-center"
                >
                  Open in Maps <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="card p-0 overflow-hidden h-[360px] md:h-[440px] relative mt-6">
              <iframe
                title="KMV Agrotech location on Google Maps"
                src="https://maps.google.com/maps?q=353%2C%20Poorva%20Deen%20Dayal%2C%20Old%20Railway%20Road%2C%20Roorkee%20247667%2C%20Uttarakhand%2C%20India&t=m&z=15&ie=UTF8&iwloc=B&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
              <div className="absolute bottom-3 left-3 chip bg-white/95 backdrop-blur-sm shadow-card pointer-events-none">
                ROORKEE · UTTARAKHAND
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=353+Poorva+Deen+Dayal+Old+Railway+Road+Roorkee+247667"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 right-3 chip bg-white/95 backdrop-blur-sm shadow-card hover:bg-white transition-colors text-brand"
              >
                Open in Maps ↗
              </a>
          </div>
        </div>
      </section>
    </>
  );
}

