import type { Metadata } from "next";
import { ArrowRight, Building2, Quote, GraduationCap, Sprout, FlaskConical, Beaker, Factory, HandHeart, Mountain, Droplets, MapPin } from "lucide-react";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Crumbs } from "@/components/Crumbs";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { clientSectors } from "@/data/brands";

export const metadata: Metadata = {
  title: "Industries we serve",
  description:
    "KMV Agrotech supplies labs at IITs, NITs, ICAR institutes, agricultural universities and industries across India.",
};

// Per-sector visual identity: icon + accent colour + tint.
const sectorStyles = [
  { Icon: GraduationCap, color: "#0B3B6F", tint: "rgba(11, 59, 111, 0.08)" },
  { Icon: Building2,     color: "#10B981", tint: "rgba(16, 185, 129, 0.10)" },
  { Icon: Sprout,        color: "#059669", tint: "rgba(5, 150, 105, 0.10)" },
  { Icon: FlaskConical,  color: "#14528E", tint: "rgba(20, 82, 142, 0.10)" },
  { Icon: Droplets,      color: "#0891B2", tint: "rgba(8, 145, 178, 0.10)" },
  { Icon: Beaker,        color: "#7C3AED", tint: "rgba(124, 58, 237, 0.10)" },
  { Icon: Factory,       color: "#DC2626", tint: "rgba(220, 38, 38, 0.08)" },
  { Icon: HandHeart,     color: "#D97706", tint: "rgba(217, 119, 6, 0.10)" },
];

// States and cities our customers are based in (drawn from the client list).
const coverage = [
  "Uttarakhand", "Delhi", "Punjab", "Haryana", "Rajasthan", "Uttar Pradesh",
  "Bihar", "Jharkhand", "Madhya Pradesh", "Gujarat", "Maharashtra",
  "Karnataka", "Tamil Nadu", "Kerala", "Andhra Pradesh", "Telangana",
  "Odisha", "West Bengal", "Assam", "Meghalaya", "Manipur", "Arunachal",
  "Himachal Pradesh", "Jammu & Kashmir",
];

export default function ClientsPage() {
  const totalClients = clientSectors.reduce((sum, s) => sum + s.clients.length, 0);

  return (
    <>
      <PageHeader
        eyebrow="Who we work with"
        title="IITs, ICAR labs, universities and big companies."
        description="From IIT and NIT engineering labs to ICAR research labs, farm universities and company labs — our equipment is in use all over India."
        meta={<Crumbs items={[{ label: "Home", href: "/" }, { label: "Industries" }]} />}
      />

      {/* Stats band */}
      <section className="bg-white border-b border-slate-200">
        <div className="container-x py-10 md:py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200 rounded-md overflow-hidden">
            <Stat value={`${totalClients}+`} label="Customers across India" tone="#0B3B6F" />
            <Stat value={`${clientSectors.length}`} label="Sector groups served" tone="#10B981" />
            <Stat value={`${coverage.length}+`} label="States we ship to" tone="#0891B2" />
            <Stat value={`${new Date().getFullYear() - 2017}+`} label="Years in business" tone="#059669" />
          </div>
        </div>
      </section>

      {/* Sectors with full lists */}
      <section className="py-section bg-surface-alt border-y border-slate-200">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-8 mb-10">
            <div className="lg:col-span-7">
              <span className="accent-rule" />
              <SectionLabel className="mb-4">Full customer list</SectionLabel>
              <h2 className="section-heading">Grouped by type.</h2>
            </div>
            <p className="lg:col-span-5 lg:pt-12 section-sub">
              Tap any group to see all the labs and companies in it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {clientSectors.map((sector, i) => {
              const style = sectorStyles[i] ?? sectorStyles[0];
              return (
                <Reveal key={sector.name} delay={i * 0.05}>
                  <SectorCard sector={sector} style={style} index={i} />
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coverage strip */}
      <section className="py-section bg-brand-deep text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-deep opacity-40 pointer-events-none" aria-hidden />
        <div className="container-x relative">
          <div className="max-w-3xl mb-10">
            <SectionLabel light className="mb-4">All over India</SectionLabel>
            <h2 className="font-display font-bold text-display-lg tracking-tight">
              We deliver to <span className="text-accent">{coverage.length}+ states</span> and union territories.
            </h2>
            <p className="mt-4 text-white/70 leading-relaxed max-w-xl">
              From the Himalayas to the Deccan, from coastal labs to mountain research
              stations — we ship anywhere in India.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {coverage.map((s) => (
              <span
                key={s}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-white/15 bg-white/5 text-xs md:text-sm font-medium text-white/85 hover:bg-accent/15 hover:border-accent/40 hover:text-white transition-colors"
              >
                <MapPin className="h-3 w-3 text-accent" />
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-section bg-white">
        <div className="container-x max-w-4xl mx-auto">
          <div className="card p-10 md:p-14 relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-accent/10 blur-3xl" aria-hidden />
            <div className="relative">
              <Quote className="h-10 w-10 text-accent mb-6" />
              <blockquote className="font-display text-2xl md:text-3xl text-ink leading-snug font-semibold tracking-tight">
                The KMV team helped us pick the right balances and microscopes, set them up
                in the lab, and trained our students. Years on, they still pick up the phone.
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-10 w-1 bg-accent" />
                <div>
                  <div className="font-display text-base font-bold text-ink">Head of Department</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider mt-0.5">
                    Agricultural University · North India
                  </div>
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
              <SectionLabel className="mb-4">Work with us</SectionLabel>
              <h2 className="section-heading">
                Quotes, tenders and lab enquiries — answered within 24 hours.
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

function Stat({ value, label, tone }: { value: string; label: string; tone: string }) {
  return (
    <div className="bg-white p-6 md:p-7 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: tone }} />
      <div
        className="font-display text-4xl md:text-5xl font-extrabold tracking-tight leading-none"
        style={{ color: tone }}
      >
        {value}
      </div>
      <div className="mt-2 text-sm text-slate-600 leading-relaxed">{label}</div>
    </div>
  );
}

type Sector = { name: string; description: string; clients: string[] };
type Style = { Icon: typeof Building2; color: string; tint: string };

function SectorCard({ sector, style, index }: { sector: Sector; style: Style; index: number }) {
  const { Icon, color, tint } = style;
  return (
    <details className="group card overflow-hidden hover:shadow-card-hover transition-shadow">
      <summary className="cursor-pointer list-none">
        <div className="h-1.5 w-full" style={{ backgroundColor: color }} />
        <div className="p-6 md:p-7">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div
                className="h-12 w-12 flex items-center justify-center rounded shrink-0"
                style={{ backgroundColor: tint, color }}
              >
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Group {String(index + 1).padStart(2, "0")}
                </div>
                <h2 className="mt-0.5 font-display text-lg md:text-xl font-bold text-ink tracking-tight leading-tight">
                  {sector.name}
                </h2>
              </div>
            </div>
            <div
              className="font-display text-3xl md:text-4xl font-extrabold tracking-tight leading-none"
              style={{ color }}
            >
              {sector.clients.length}
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-600 leading-relaxed">{sector.description}</p>
          <div className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em]" style={{ color }}>
            <span className="group-open:hidden">View customers</span>
            <span className="hidden group-open:inline">Hide customers</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-open:rotate-90" />
          </div>
        </div>
      </summary>
      <div className="px-6 md:px-7 pb-6 md:pb-7 border-t border-slate-100 pt-5">
        <div className="grid sm:grid-cols-2 gap-2">
          {sector.clients.map((c) => (
            <div
              key={c}
              className="flex items-center gap-2.5 px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded text-sm text-slate-700"
            >
              <span
                className="h-1.5 w-1.5 rounded-full shrink-0"
                style={{ backgroundColor: color }}
              />
              {c}
            </div>
          ))}
        </div>
      </div>
    </details>
  );
}
