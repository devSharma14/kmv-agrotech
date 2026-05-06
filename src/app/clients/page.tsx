import type { Metadata } from "next";
import { ArrowRight, Building2, FlaskConical, Factory, Shield, Quote } from "lucide-react";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Crumbs } from "@/components/Crumbs";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { clientSectors } from "@/data/brands";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "KMV Agrotech instruments are deployed by government agencies, research institutions, infrastructure operators and defence labs across India.",
};

const sectorIcons = [Building2, FlaskConical, Factory, Shield];

export default function ClientsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Industries we serve"
        title="Trusted across government, research, infrastructure and defence."
        description="Our instruments power monitoring at IMD, CWC, ISRO and ICAR; research at IITs and agricultural universities; infrastructure at NHPC, L&T and SJVN; and field operations at DRDO and the Indian Army Engineer Corps."
        meta={<Crumbs items={[{ label: "Home", href: "/" }, { label: "Industries" }]} />}
      />

      {/* Sectors */}
      <section className="py-section bg-white">
        <div className="container-x space-y-6">
          {clientSectors.map((sector, i) => {
            const Icon = sectorIcons[i] ?? Building2;
            return (
              <Reveal key={sector.name} delay={i * 0.05}>
                <div className="card p-8 md:p-10 grid lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-12 w-12 flex items-center justify-center bg-brand-50 text-brand rounded">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                        Sector 0{i + 1}
                      </span>
                    </div>
                    <h2 className="font-display text-display-sm font-bold text-ink tracking-tight">{sector.name}</h2>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">{sector.description}</p>
                  </div>
                  <div className="lg:col-span-7">
                    <div className="grid sm:grid-cols-2 gap-2">
                      {sector.clients.map((c) => (
                        <div
                          key={c}
                          className="flex items-center gap-2.5 px-4 py-3 bg-slate-50 border border-slate-200 rounded text-sm text-slate-700"
                        >
                          <span className="h-1.5 w-1.5 bg-accent rounded-full shrink-0" />
                          {c}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Engraved client wall */}
      <section className="py-section bg-brand-deep text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-deep opacity-40 pointer-events-none" aria-hidden />
        <div className="container-x relative">
          <div className="max-w-3xl mb-12">
            <SectionLabel light className="mb-4">Names on the network</SectionLabel>
            <h2 className="font-display font-bold text-display-lg tracking-tight">
              Quietly, across institutions <span className="text-accent">that matter.</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-md overflow-hidden">
            {[
              "IMD", "ISRO", "CWC", "ICAR", "IIT Roorkee", "IIT Delhi", "NHPC", "GSI",
              "DRDO", "L&T Construction", "SJVN", "Tata Projects",
            ].map((m) => (
              <div
                key={m}
                className="bg-brand-deep py-10 px-4 flex items-center justify-center text-center font-display text-base md:text-lg font-bold text-white/65 hover:text-accent hover:bg-brand-dark transition-colors"
              >
                {m}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-section bg-white">
        <div className="container-x max-w-4xl mx-auto">
          <div className="card p-10 md:p-14">
            <Quote className="h-10 w-10 text-accent mb-6" />
            <blockquote className="font-display text-2xl md:text-3xl text-ink leading-snug font-semibold tracking-tight">
              Their team scoped the AWS network for our hydrology programme down to the cable
              run. Six monsoons later, every station is still reporting.
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-10 w-1 bg-accent" />
              <div>
                <div className="font-display text-base font-bold text-ink">Senior Hydrologist</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider mt-0.5">
                  Public-sector hydrology programme · Uttarakhand
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section bg-surface-alt border-t border-slate-200">
        <div className="container-x">
          <div className="card p-10 md:p-14 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <SectionLabel className="mb-4">Become a customer</SectionLabel>
              <h2 className="section-heading">
                Tenders, RFQs, pilot enquiries — answered within 24 hours.
              </h2>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-3">
              <Link href="/contact" className="btn-primary justify-center">
                Get in touch <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/products" className="btn-outline justify-center">
                Browse products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
