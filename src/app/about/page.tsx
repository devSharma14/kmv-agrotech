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
    "From a small workshop in Roorkee to a national network of research instruments — the KMV Agrotech & Engineering Works story.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About KMV Agrotech"
        title="Engineering measurement confidence since 1998."
        description="Founded in Roorkee, KMV Agrotech & Engineering Works is a family-led distributor of precision instruments. Our work supports India's hydrology, meteorology, agriculture, surveying and earth-science programmes."
        meta={<Crumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />}
      />

      {/* Story */}
      <section className="py-section bg-white">
        <div className="container-x grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionLabel className="mb-4">The story</SectionLabel>
            <h2 className="section-heading">
              From a Roorkee workshop to research labs across India.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-slate-700 leading-relaxed">
            <p>
              KMV Agrotech & Engineering Works was founded in 1998 by a small team of engineers
              from the Indian Institute of Technology Roorkee. They saw a gap: India's growing
              network of hydrology and meteorology programmes needed long-term partners who could
              specify, supply, install and service precision instruments — not merely import them.
            </p>
            <p>
              Twenty-six years later we serve more than 300 customers across central and state
              government, ICAR institutes, IITs, hydropower utilities and the country's largest
              civil contractors. We've grown into an authorised distributor for {brands.length}+
              international manufacturers, while staying small enough that our directors still
              walk every commissioning site personally.
            </p>
            <p>
              Roorkee remains our home — close to India's premier earth-science and water
              engineering institutions, and a short drive from the field sites where our
              instruments do their real work.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-section bg-surface-alt border-y border-slate-200">
        <div className="container-x">
          <div className="max-w-3xl mb-12">
            <SectionLabel className="mb-4">Operating principles</SectionLabel>
            <h2 className="section-heading">
              Four ideas that guide every PO we accept.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <Value
              num="01"
              icon={<Compass className="h-6 w-6" />}
              title="Specify before sell"
              body="If your application doesn't need a particular feature, we'll tell you. We'd rather quote a smaller bill of materials and earn a long-term customer."
            />
            <Value
              num="02"
              icon={<BadgeCheck className="h-6 w-6" />}
              title="Calibration is non-negotiable"
              body="Every instrument we deliver is shipped with traceable calibration. We maintain calibration partnerships with NABL-accredited labs."
            />
            <Value
              num="03"
              icon={<Handshake className="h-6 w-6" />}
              title="Service is a contract"
              body="We don't disappear after commissioning. AMC programmes cover consumables, recalibration and 24-hour first response — for the life of the instrument."
            />
            <Value
              num="04"
              icon={<Users className="h-6 w-6" />}
              title="Train your operators"
              body="Field-grade instruments only deliver when the people running them feel confident. Operator training is bundled into every project."
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-section bg-brand-deep text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-deep opacity-40 pointer-events-none" aria-hidden />
        <div className="container-x relative">
          <div className="max-w-3xl mb-12">
            <SectionLabel light className="mb-4">By the numbers</SectionLabel>
            <h2 className="font-display font-bold text-display-lg tracking-tight">
              A quarter century of <span className="text-accent">field measurement.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-md overflow-hidden">
            <Big value="1998" label="Founded in Roorkee, Uttarakhand" />
            <Big value="26+" label="Years operating without interruption" />
            <Big value="300+" label="Active customers across India" />
            <Big value="24+" label="International manufacturers represented" />
          </div>
        </div>
      </section>

      {/* Credentials + HQ */}
      <section className="py-section bg-white">
        <div className="container-x grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <SectionLabel className="mb-4">Credentials</SectionLabel>
            <h2 className="section-heading mb-10">
              ISO certified. MSME registered. Make in India ready.
            </h2>

            <div className="grid sm:grid-cols-3 gap-5">
              <Cert title="ISO 9001:2015" body="Quality management system certified by an accredited body." />
              <Cert title="MSME Udyam" body="Registered as a Micro, Small & Medium Enterprise." />
              <Cert title="Make in India" body="Active participant in the GoI Make in India initiative." />
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="card p-8">
              <SectionLabel className="mb-6">Headquarters</SectionLabel>
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
