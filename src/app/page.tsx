import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Wrench,
  Truck,
  GraduationCap,
  Building2,
  FlaskConical,
  Factory,
  Shield,
  Calendar,
  Award,
  Users2,
  Quote,
} from "lucide-react";
import { categories } from "@/data/categories";
import { brands } from "@/data/brands";
import { products } from "@/data/products";
import { CategoryCard } from "@/components/CategoryCard";
import { ProductCard } from "@/components/ProductCard";
import { Marquee } from "@/components/Marquee";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { HeroVisual } from "@/components/HeroVisual";
import { CatalogueButton } from "@/components/CatalogueButton";

export default function Home() {
  const featured = products.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="relative hero-bg border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 bg-grid-soft opacity-50 pointer-events-none" aria-hidden />
        {/* decorative blob bottom-left */}
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-brand/10 blur-3xl pointer-events-none" aria-hidden />
        {/* decorative orange dot top-right */}
        <div className="absolute top-12 right-12 w-3 h-3 rounded-full bg-accent hidden lg:block" aria-hidden />

        <div className="container-x relative grid lg:grid-cols-12 gap-10 lg:gap-16 py-16 md:py-24 items-center">
          <div className="lg:col-span-7">
            <span className="accent-rule" />
            <SectionLabel className="mb-4">EST. 1998 · ROORKEE, INDIA</SectionLabel>

            <h1 className="font-display font-extrabold text-display-xl text-ink tracking-tight">
              Field-grade instruments for India's <span className="relative inline-block">
                <span className="relative z-10 text-brand">hydrology, weather</span>
                <span className="absolute inset-x-0 bottom-1 h-2.5 bg-accent/25 -z-0" aria-hidden />
              </span> and survey teams.
            </h1>

            <p className="mt-6 text-base md:text-lg text-slate-600 leading-relaxed max-w-xl">
              ISO 9001:2015 certified distributor of precision instruments — hydrology,
              meteorology, agricultural research, surveying and geotechnics — supplying
              government, research and infrastructure across India for 26 years.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/products" className="btn-primary">
                Browse products <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="btn-outline">
                Request a Quote
              </Link>
              <CatalogueButton variant="ghost" />
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3 max-w-xl">
              <TrustCell icon={<Calendar className="h-4 w-4" />} value="26+" label="Years operating" />
              <TrustCell icon={<Award className="h-4 w-4" />} value={`${brands.length}+`} label="Partner brands" />
              <TrustCell icon={<Users2 className="h-4 w-4" />} value="300+" label="Active customers" />
            </div>
          </div>

          <div className="lg:col-span-5">
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* ==================== TRUSTED BY (navy band) ==================== */}
      <section className="bg-brand-deep text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-deep opacity-40 pointer-events-none" aria-hidden />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" aria-hidden />
        <div className="container-x relative py-12 md:py-14">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <SectionLabel light className="mb-3">Deployed across</SectionLabel>
              <h2 className="font-display text-xl md:text-2xl font-bold text-white tracking-tight">
                India's most demanding monitoring networks.
              </h2>
            </div>
            <Link
              href="/clients"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-soft self-start md:self-auto"
            >
              See full deployment record <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-px bg-white/10 border border-white/10 rounded-md overflow-hidden">
            {["IMD", "ISRO", "CWC", "ICAR", "IIT Roorkee", "NHPC", "DRDO", "L&T"].map((m) => (
              <div
                key={m}
                className="bg-brand-deep py-6 px-3 flex items-center justify-center text-center font-display text-base md:text-lg font-bold text-white/70 hover:text-accent hover:bg-brand-dark transition-colors"
              >
                {m}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== BRANDS STRIP ==================== */}
      <section className="py-12 bg-surface-alt border-b border-slate-200 relative">
        <div className="container-x mb-6">
          <div className="flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            <span className="h-px w-8 bg-slate-300" />
            Authorised distributor for {brands.length}+ international brands
            <span className="h-px w-8 bg-slate-300" />
          </div>
        </div>
        <Marquee items={brands} />
      </section>

      {/* ==================== PRODUCT CATEGORIES ==================== */}
      <section className="py-section bg-white relative">
        {/* decorative top accent */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-accent/40 to-transparent" aria-hidden />
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-7">
              <span className="accent-rule" />
              <SectionLabel className="mb-4">Product Categories</SectionLabel>
              <h2 className="section-heading">
                Five disciplines, one trusted source.
              </h2>
            </div>
            <p className="lg:col-span-5 lg:pt-12 section-sub">
              Each instrument we carry is selected for field reliability, calibration
              traceability and serviceability across India's terrain — from the Himalayas
              to the Deccan plateau.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.05}>
                <CategoryCard category={c} />
              </Reveal>
            ))}
            <Reveal delay={categories.length * 0.05}>
              <Link
                href="/products"
                className="group flex flex-col card-elevated h-full bg-brand text-white rounded-md overflow-hidden hover:bg-brand-dark transition-colors relative"
              >
                <div className="absolute inset-0 bg-grid-deep opacity-30" aria-hidden />
                <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-accent/20 blur-3xl" aria-hidden />
                <div className="relative flex-1 p-8 flex flex-col">
                  <div className="text-xs uppercase tracking-[0.14em] font-semibold text-accent mb-4">
                    Full catalogue
                  </div>
                  <h3 className="font-display text-2xl font-bold leading-tight mb-3">
                    Browse all {products.length} products
                  </h3>
                  <p className="text-sm text-white/75 leading-relaxed">
                    Filter by category, brand or application across our entire portfolio.
                  </p>
                  <div className="mt-auto pt-6 flex items-center gap-3">
                    <span className="text-sm font-semibold text-accent">View catalogue</span>
                    <span className="h-8 w-8 flex items-center justify-center bg-accent text-white rounded-full">
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ==================== FEATURED PRODUCTS ==================== */}
      <section className="py-section bg-surface-alt border-y border-slate-200">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="accent-rule" />
              <SectionLabel className="mb-4">Featured Instruments</SectionLabel>
              <h2 className="section-heading">
                Workhorses of Indian field research.
              </h2>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark"
            >
              View all instruments <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.05}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== INDUSTRIES VERTICALS ==================== */}
      <section className="py-section bg-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-7">
              <span className="accent-rule" />
              <SectionLabel className="mb-4">Industries Served</SectionLabel>
              <h2 className="section-heading">Built for the work of measurement.</h2>
            </div>
            <p className="lg:col-span-5 lg:pt-12 section-sub">
              Our instruments power monitoring networks at IMD, CWC, ISRO and ICAR; research
              at IITs and agricultural universities; infrastructure at NHPC, L&T, SJVN; and
              field operations at DRDO and the Indian Army Engineer Corps.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Vertical
              tone="#0B3B6F"
              icon={<Building2 className="h-6 w-6" />}
              title="Government & Public Sector"
              count="60+"
              caption="Agencies served"
              clients={["IMD", "CWC", "CGWB", "ISRO", "GSI"]}
            />
            <Vertical
              tone="#10B981"
              icon={<FlaskConical className="h-6 w-6" />}
              title="Research & Academia"
              count="100+"
              caption="Institutions"
              clients={["IIT Roorkee", "IIT Delhi", "ICAR–IARI", "G.B. Pant", "NIH"]}
            />
            <Vertical
              tone="#E2761B"
              icon={<Factory className="h-6 w-6" />}
              title="Infrastructure & Industry"
              count="80+"
              caption="Projects supplied"
              clients={["NHPC", "SJVN", "THDC", "L&T", "Tata Projects"]}
            />
            <Vertical
              tone="#A855F7"
              icon={<Shield className="h-6 w-6" />}
              title="Defence & Strategic"
              count="20+"
              caption="Strategic deployments"
              clients={["DRDO", "Army Engineers", "BRO", "SASE"]}
            />
          </div>
        </div>
      </section>

      {/* ==================== CAPABILITIES ==================== */}
      <section className="py-section bg-surface-alt border-y border-slate-200">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-7">
              <span className="accent-rule" />
              <SectionLabel className="mb-4">What we do</SectionLabel>
              <h2 className="section-heading">More than a distributor — a working partner.</h2>
            </div>
            <p className="lg:col-span-5 lg:pt-12 section-sub">
              From specification through commissioning, training and long-term service —
              field-grade instruments only deliver when the people running them feel
              confident.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            <Capability
              icon={<Wrench className="h-6 w-6" />}
              num="01"
              title="Specification & Sizing"
              body="Sensor selection, telemetry topology and calibration planning before a PO is raised."
            />
            <Capability
              icon={<Truck className="h-6 w-6" />}
              num="02"
              title="Supply & Deployment"
              body="Direct import, pan-India logistics, on-site installation and commissioning."
            />
            <Capability
              icon={<GraduationCap className="h-6 w-6" />}
              num="03"
              title="Training & Handover"
              body="Operator training, datalogger programming workshops and technical documentation."
            />
            <Capability
              icon={<ShieldCheck className="h-6 w-6" />}
              num="04"
              title="Service & Calibration"
              body="Annual maintenance contracts, NABL-traceable calibration, rapid replacement."
            />
          </div>
        </div>
      </section>

      {/* ==================== BIG STATS / CREDIBILITY ==================== */}
      <section className="py-section hero-bg-deep text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-deep opacity-40 pointer-events-none" aria-hidden />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" aria-hidden />
        <div className="container-x relative">
          <div className="grid lg:grid-cols-12 gap-8 mb-14">
            <div className="lg:col-span-7">
              <span className="accent-rule" />
              <SectionLabel light className="mb-4">Why KMV</SectionLabel>
              <h2 className="font-display font-bold text-display-lg tracking-tight">
                A proven record across India's <span className="text-accent">monitoring networks.</span>
              </h2>
            </div>
            <p className="lg:col-span-5 lg:pt-12 text-white/70 leading-relaxed">
              We don't disappear after delivery. The same engineers who scope the system are
              the ones who walk the commissioning site and pick up the phone three years later.
            </p>
          </div>

          {/* Hero stat + supporting stats grid */}
          <div className="grid lg:grid-cols-12 gap-5">
            {/* Hero stat */}
            <div className="lg:col-span-6 relative bg-gradient-to-br from-brand-dark to-brand-deep border border-white/10 rounded-md p-8 md:p-10 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-accent/15 blur-3xl" aria-hidden />
              <div className="absolute top-0 left-8 h-1 w-16 bg-accent" />
              <div className="relative">
                <div className="text-xs uppercase tracking-[0.14em] font-semibold text-accent mb-3">
                  Flagship deployment
                </div>
                <div className="font-display text-7xl md:text-8xl font-extrabold text-white tracking-tighter leading-none">
                  500<span className="text-accent">+</span>
                </div>
                <div className="mt-4 font-display text-xl font-bold text-white">
                  Sensors deployed across the Himalayan AWS network.
                </div>
                <p className="mt-3 text-white/65 text-sm leading-relaxed max-w-md">
                  Our largest single rollout — automatic weather stations across high-altitude
                  watershed monitoring sites, operational since 2018.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm border border-white/15 bg-white/5 text-[0.7rem] font-mono uppercase tracking-wider text-white/75">
                    AWS
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm border border-white/15 bg-white/5 text-[0.7rem] font-mono uppercase tracking-wider text-white/75">
                    Datalogger
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm border border-white/15 bg-white/5 text-[0.7rem] font-mono uppercase tracking-wider text-white/75">
                    Telemetry
                  </span>
                </div>
              </div>
            </div>

            {/* Three supporting stats */}
            <div className="lg:col-span-6 grid sm:grid-cols-1 gap-5">
              <SupportStat
                value="60+"
                label="Government & academic customers"
                detail="From IMD and CWC to ICAR institutes and IITs."
              />
              <SupportStat
                value="98.4%"
                label="Uptime on installed dataloggers"
                detail="Year-on-year average across the deployed fleet."
              />
              <SupportStat
                value="24h"
                label="First response on service tickets"
                detail="Within working hours, anywhere on the subcontinent."
              />
            </div>
          </div>

          <div className="mt-14 pt-10 border-t border-white/10 flex flex-wrap items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-3">
              <CertBadge label="ISO 9001:2015" />
              <CertBadge label="MSME Registered" />
              <CertBadge label="Make in India" />
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-soft"
            >
              About the company <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIAL ==================== */}
      <section className="pt-28 md:pt-36 pb-24 md:pb-32 bg-surface-alt relative overflow-hidden">
        {/* soft top-edge accent rule */}
        <div
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
          aria-hidden
        />
        {/* paired faint quote watermarks */}
        <div className="absolute top-20 left-8 lg:left-16 pointer-events-none select-none opacity-60" aria-hidden>
          <svg width="120" height="120" viewBox="0 0 100 100">
            <text x="0" y="80" fill="rgba(11, 59, 111, 0.07)" fontSize="120" fontFamily="serif" fontWeight="bold">"</text>
          </svg>
        </div>
        <div className="absolute bottom-20 right-8 lg:right-16 pointer-events-none select-none opacity-60 rotate-180" aria-hidden>
          <svg width="120" height="120" viewBox="0 0 100 100">
            <text x="0" y="80" fill="rgba(11, 59, 111, 0.07)" fontSize="120" fontFamily="serif" fontWeight="bold">"</text>
          </svg>
        </div>

        <div className="container-x relative">
          <div className="max-w-3xl mx-auto">
            {/* Eyebrow row */}
            <div className="flex items-center justify-center gap-3 mb-10">
              <span className="h-px w-8 bg-accent" />
              <span className="text-xs uppercase font-semibold tracking-[0.18em] text-accent-dark">
                Field Testimony
              </span>
              <span className="h-px w-8 bg-accent" />
            </div>

            {/* Quote */}
            <figure className="text-center">
              <Quote className="h-7 w-7 text-accent mx-auto mb-6" strokeWidth={2} />
              <blockquote className="font-display text-xl md:text-2xl lg:text-[1.75rem] text-ink leading-[1.4] font-medium tracking-tight">
                Their team scoped the AWS network for our hydrology programme down to the cable
                run. Six monsoons later, every station is still reporting.
              </blockquote>

              <figcaption className="mt-10 inline-flex items-center gap-4">
                <div className="h-11 w-11 rounded-full bg-brand text-white flex items-center justify-center font-display font-bold text-sm">
                  SH
                </div>
                <div className="text-left">
                  <div className="font-display text-base font-bold text-ink">Senior Hydrologist</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider mt-0.5">
                    Public-sector hydrology · Uttarakhand
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}

function TrustCell({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="card p-3 lg:p-4 bg-white">
      <div className="flex items-center gap-2 mb-1">
        <span className="h-7 w-7 flex items-center justify-center bg-brand-50 text-brand rounded">
          {icon}
        </span>
        <div className="font-display text-xl lg:text-2xl font-bold text-ink">{value}</div>
      </div>
      <div className="text-[0.7rem] lg:text-xs text-slate-500 font-medium">{label}</div>
    </div>
  );
}

function Vertical({
  icon,
  title,
  count,
  caption,
  clients,
  tone,
}: {
  icon: React.ReactNode;
  title: string;
  count: string;
  caption: string;
  clients: string[];
  tone: string;
}) {
  return (
    <div className="card overflow-hidden hover:shadow-card-hover hover:border-slate-300 transition-all">
      <div className="h-1.5" style={{ backgroundColor: tone }} />
      <div className="p-6">
        <div className="flex items-center justify-between mb-5">
          <div
            className="h-11 w-11 flex items-center justify-center rounded"
            style={{ backgroundColor: `${tone}15`, color: tone }}
          >
            {icon}
          </div>
          <div className="text-right">
            <div className="font-display text-2xl font-bold text-ink">{count}</div>
            <div className="text-xs text-slate-500">{caption}</div>
          </div>
        </div>
        <h3 className="font-display text-base font-bold text-ink leading-snug">{title}</h3>
        <ul className="mt-4 pt-4 border-t border-slate-100 space-y-1.5 text-sm text-slate-600">
          {clients.map((c) => (
            <li key={c} className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full" style={{ backgroundColor: tone }} />
              {c}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Capability({
  num,
  title,
  body,
  icon,
}: {
  num: string;
  title: string;
  body: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="card p-6 hover:border-brand/40 hover:shadow-card-hover transition-all bg-white">
      <div className="flex items-center justify-between mb-5">
        <div className="h-11 w-11 flex items-center justify-center bg-brand text-white rounded">
          {icon}
        </div>
        <span className="text-xs font-mono text-accent font-semibold">{num}</span>
      </div>
      <h3 className="font-display text-lg font-bold text-ink">{title}</h3>
      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{body}</p>
    </div>
  );
}

function SupportStat({
  value,
  label,
  detail,
}: {
  value: string;
  label: string;
  detail: string;
}) {
  return (
    <div className="relative bg-white/[0.03] border border-white/10 rounded-md p-6 hover:bg-white/[0.06] transition-colors">
      <div className="flex items-start gap-5">
        <div className="font-display text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-none shrink-0">
          {value}
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-display text-base font-bold text-white">{label}</div>
          <p className="mt-1.5 text-sm text-white/55 leading-relaxed">{detail}</p>
        </div>
      </div>
    </div>
  );
}

function CertBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-white/25 bg-white/5 text-xs font-semibold text-white">
      <ShieldCheck className="h-3.5 w-3.5 text-accent" />
      {label}
    </span>
  );
}
