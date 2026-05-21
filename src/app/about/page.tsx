import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, MapPin, Compass, Users, Handshake } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Crumbs } from "@/components/Crumbs";
import { SectionLabel } from "@/components/SectionLabel";
import { site } from "@/lib/site";
import { brands } from "@/data/brands";

export const metadata: Metadata = {
  title: "About",
  description:
    "How KMV Agrotech & Engineering Works grew from a small Roorkee shop into a trusted supplier of lab and scientific instruments across India.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="Helping India's labs since 2017."
        description="We are KMV Agrotech & Engineering Works, based in Roorkee. We supply microscopes, weighing scales, scientific instruments and biotech machines to schools, colleges, research labs and companies across India."
        meta={<Crumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />}
      />

      {/* Story */}
      <section className="py-section bg-white">
        <div className="container-x grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionLabel className="mb-4">Our story</SectionLabel>
            <h2 className="section-heading">
              A small Roorkee shop, now serving labs all over India.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-slate-700 leading-relaxed">
            <p>
              We started in 2017 in Roorkee. The idea was simple: make it easy for Indian
              labs to buy good equipment, get honest advice, and get quick help when something
              needs fixing.
            </p>
            <p>
              Today we sell to IITs, NITs, ICAR labs, farm universities and many big companies
              across India. We work with {brands.length}+ brands. Our team is still small, so
              we install and train at the lab ourselves.
            </p>
            <p>
              Roorkee is still our home. We are right next to IIT Roorkee and India's top
              research labs — and a short drive from many of the labs we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-section bg-surface-alt border-y border-slate-200">
        <div className="container-x">
          <div className="max-w-3xl mb-12">
            <SectionLabel className="mb-4">How we work</SectionLabel>
            <h2 className="section-heading">
              Four simple promises we make.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <Value
              num="01"
              icon={<Compass className="h-6 w-6" />}
              title="Honest advice"
              body="We recommend what actually fits your needs — not the most expensive option on the shelf."
            />
            <Value
              num="02"
              icon={<BadgeCheck className="h-6 w-6" />}
              title="Ready to use"
              body="Every machine comes checked and with proper papers. Start work right away."
            />
            <Value
              num="03"
              icon={<Handshake className="h-6 w-6" />}
              title="Service after sale"
              body="Repairs, parts, yearly service — we are with you long after delivery."
            />
            <Value
              num="04"
              icon={<Users className="h-6 w-6" />}
              title="Free training"
              body="We show your team how to use the machine — so the lab works from day one."
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-section bg-brand-deep text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-deep opacity-40 pointer-events-none" aria-hidden />
        <div className="container-x relative">
          <div className="max-w-3xl mb-12">
            <SectionLabel light className="mb-4">In numbers</SectionLabel>
            <h2 className="font-display font-bold text-display-lg tracking-tight">
              Years of work <span className="text-accent">behind every delivery.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-md overflow-hidden">
            <Big value="2017" label="Started in Roorkee" />
            <Big value={`${new Date().getFullYear() - 2017}+`} label="Years in business" />
            <Big value="100+" label="Customers all over India" />
            <Big value={`${brands.length}+`} label="Brands we work with" />
          </div>
        </div>
      </section>

      {/* Credentials + HQ */}
      <section className="py-section bg-white">
        <div className="container-x grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <SectionLabel className="mb-4">Our papers</SectionLabel>
            <h2 className="section-heading mb-10">
              All registered, all in order.
            </h2>

            <div className="grid sm:grid-cols-3 gap-5">
              <Cert title="ISO 9001:2015" body="Our work is checked and approved against quality rules." />
              <Cert title="MSME Udyam" body="Registered as a small business — easy for tenders and POs." />
              <Cert title="Make in India" body="Proud to be part of the Make in India programme." />
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="card p-8">
              <SectionLabel className="mb-6">Our office</SectionLabel>
              <div className="flex gap-3">
                <MapPin className="h-5 w-5 text-brand shrink-0 mt-1" />
                <div>
                  <div className="font-display text-lg font-bold text-ink">{site.name}</div>
                  <div className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {site.address.line1}<br />
                    {site.address.line2}<br />
                    {site.address.region}<br />
                    {site.address.postal}, {site.address.country}
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-200 font-mono text-xs text-slate-500 space-y-1">
                <div>29.86°N · 77.89°E</div>
                <div>{site.hours}</div>
              </div>
              <Link href="/contact" className="mt-6 btn-primary w-full justify-center">
                Visit or call <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Value({ num, title, body, icon }: { num: string; title: string; body: string; icon: React.ReactNode }) {
  return (
    <div className="card p-6 hover:border-brand/40 hover:shadow-card transition-all">
      <div className="flex items-center justify-between mb-5">
        <div className="h-11 w-11 flex items-center justify-center bg-brand-50 text-brand rounded">
          {icon}
        </div>
        <span className="text-xs font-mono text-slate-400">{num}</span>
      </div>
      <h3 className="font-display text-lg font-bold text-ink">{title}</h3>
      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{body}</p>
    </div>
  );
}

function Big({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-brand-deep p-7 lg:p-8">
      <div className="font-display text-4xl md:text-5xl font-extrabold text-accent tracking-tight">{value}</div>
      <div className="mt-3 text-sm text-white/65 leading-relaxed">{label}</div>
    </div>
  );
}

function Cert({ title, body }: { title: string; body: string }) {
  return (
    <div className="card p-6">
      <BadgeCheck className="h-6 w-6 text-brand mb-3" />
      <div className="font-display text-base font-bold text-ink">{title}</div>
      <p className="mt-2 text-xs text-slate-600 leading-relaxed">{body}</p>
    </div>
  );
}
