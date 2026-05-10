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
import { LogoTile } from "@/components/LogoTile";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { HeroVisual } from "@/components/HeroVisual";
import { CatalogueButton } from "@/components/CatalogueButton";

// Clients shown on the home strip — drop a logo file into /public/clients/
// matching the `logo` path and the LogoTile will render it instead of text.
const homeClients: { name: string; logo?: string }[] = [
  { name: "IIT Roorkee", logo: "/clients/iit-roorkee.png" },
  { name: "IIT Delhi", logo: "/clients/iit-delhi.png" },
  { name: "ICAR", logo: "/clients/icar.png" },
  { name: "ISRO", logo: "/clients/isro.png" },
  { name: "IMD", logo: "/clients/imd.png" },
  { name: "NHPC", logo: "/clients/nhpc.png" },
  { name: "DRDO", logo: "/clients/drdo.png" },
  { name: "L&T", logo: "/clients/lnt.png" },
];

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
            <SectionLabel className="mb-4">EST. 2017 · ROORKEE, INDIA</SectionLabel>

            <h1 className="font-display font-extrabold text-display-xl text-ink tracking-tight">
              Lab equipment your <span className="relative inline-block">
                <span className="relative z-10 text-brand">team can trust.</span>
                <span className="absolute inset-x-0 bottom-1 h-2.5 bg-accent/30 -z-0" aria-hidden />
              </span>
            </h1>

            <p className="mt-6 text-base md:text-lg text-slate-600 leading-relaxed max-w-xl">
              We sell microscopes, weighing scales, lab tools and biotech machines.
              Schools, colleges, research labs and companies across India order from us.
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
              <TrustCell icon={<Calendar className="h-4 w-4" />} value={`${new Date().getFullYear() - 2017}+`} label="Years in business" />
              <TrustCell icon={<Award className="h-4 w-4" />} value={`${brands.length}+`} label="Brands we sell" />
              <TrustCell icon={<Users2 className="h-4 w-4" />} value="100+" label="Happy customers" />
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
              <SectionLabel light className="mb-3">Who buys from us</SectionLabel>
              <h2 className="font-display text-xl md:text-2xl font-bold text-white tracking-tight">
                Big labs and well-known names — all over India.
              </h2>
            </div>
            <Link
              href="/clients"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-soft self-start md:self-auto"
            >
              See full list <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-px bg-white/10 border border-white/10 rounded-md overflow-hidden">
            {homeClients.map((c) => (
              <LogoTile
                key={c.name}
                name={c.name}
                src={c.logo}
                variant="dark"
                className="h-24"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== BRANDS STRIP ==================== */}
      <section className="py-12 bg-surface-alt border-b border-slate-200 relative">
        <div className="container-x mb-6">
          <div className="flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            <span className="h-px w-8 bg-slate-300" />
            Brands we deal in
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
              <SectionLabel className="mb-4">What we sell</SectionLabel>
              <h2 className="section-heading">
                Four simple categories. Tap one to see what's inside.
              </h2>
            </div>
            <p className="lg:col-span-5 lg:pt-12 section-sub">
              Click any category below to see the full list of products in it.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.05}>
                <CategoryCard category={c} />
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/products" className="btn-outline">
              View all {products.length} products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== FEATURED PRODUCTS ==================== */}
      <section className="py-section bg-surface-alt border-y border-slate-200">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="accent-rule" />
              <SectionLabel className="mb-4">Popular picks</SectionLabel>
              <h2 className="section-heading">
                Our most-ordered products.
              </h2>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark"
            >
              See all products <ArrowRight className="h-4 w-4" />
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
              <SectionLabel className="mb-4">Who we work with</SectionLabel>
              <h2 className="section-heading">From IITs to factories — labs of every size.</h2>
            </div>
            <p className="lg:col-span-5 lg:pt-12 section-sub">
              IITs, NITs, ICAR labs, farm universities and big company labs — they all
              buy from us.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Vertical
              tone="#0B3B6F"
              icon={<GraduationCap className="h-6 w-6" />}
              title="IITs & NITs"
              count="12+"
              caption="Engineering colleges"
              clients={["IIT Roorkee", "IIT Delhi", "IIT BHU", "MNIT Jaipur", "NIT Patna"]}
            />
            <Vertical
              tone="#10B981"
              icon={<FlaskConical className="h-6 w-6" />}
              title="ICAR & Universities"
              count="30+"
              caption="Farm research labs"
              clients={["IARI Pusa", "CRIDA", "PAU Ludhiana", "TNAU", "SKUAST"]}
            />
            <Vertical
              tone="#14528E"
              icon={<Building2 className="h-6 w-6" />}
              title="Govt. & Water"
              count="15+"
              caption="Government bodies"
              clients={["NIH Roorkee", "CGWB", "BBMB", "PWD", "FRI"]}
            />
            <Vertical
              tone="#059669"
              icon={<Factory className="h-6 w-6" />}
              title="Companies"
              count="20+"
              caption="Big-name customers"
              clients={["Adani Group", "Hindustan Unilever", "ArcelorMittal", "Hindustan Copper"]}
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
              <SectionLabel className="mb-4">How we help</SectionLabel>
              <h2 className="section-heading">We do more than just sell you a machine.</h2>
            </div>
            <p className="lg:col-span-5 lg:pt-12 section-sub">
              We help you pick the right one, set it up, teach your team how to use it,
              and fix it when needed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            <Capability
              icon={<Wrench className="h-6 w-6" />}
              num="01"
              title="Help you choose"
              body="Tell us what you want to do. We'll suggest the right model — no extra selling."
            />
            <Capability
              icon={<Truck className="h-6 w-6" />}
              num="02"
              title="Deliver and set up"
              body="We deliver anywhere in India and set the machine up at your lab."
            />
            <Capability
              icon={<GraduationCap className="h-6 w-6" />}
              num="03"
              title="Train your staff"
              body="We show your team how to use the machine, step by step."
            />
            <Capability
              icon={<ShieldCheck className="h-6 w-6" />}
              num="04"
              title="Repair and service"
              body="If something breaks, we fix it. Yearly service plans also available."
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
              <SectionLabel light className="mb-4">Why pick us</SectionLabel>
              <h2 className="font-display font-bold text-display-lg tracking-tight">
                Top labs across India <span className="text-accent">already trust us.</span>
              </h2>
            </div>
            <p className="lg:col-span-5 lg:pt-12 text-white/70 leading-relaxed">
              The same team that helps you buy is the one that picks up your call later.
              No call-centre, no run-around.
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
                  All over India
                </div>
                <div className="font-display text-7xl md:text-8xl font-extrabold text-white tracking-tighter leading-none">
                  100<span className="text-accent">+</span>
                </div>
                <div className="mt-4 font-display text-xl font-bold text-white">
                  Labs and companies who buy from us.
                </div>
                <p className="mt-3 text-white/65 text-sm leading-relaxed max-w-md">
                  From IIT Roorkee and ICAR labs to big company labs like Adani,
                  ArcelorMittal and Hindustan Unilever.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm border border-white/15 bg-white/5 text-[0.7rem] font-mono uppercase tracking-wider text-white/75">
                    IITs
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm border border-white/15 bg-white/5 text-[0.7rem] font-mono uppercase tracking-wider text-white/75">
                    ICAR
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm border border-white/15 bg-white/5 text-[0.7rem] font-mono uppercase tracking-wider text-white/75">
                    Industry
                  </span>
                </div>
              </div>
            </div>

            {/* Three supporting stats */}
            <div className="lg:col-span-6 grid sm:grid-cols-1 gap-5">
              <SupportStat
                value={`${brands.length}+`}
                label="Brands we work with"
                detail="Top names in microscopes, balances and lab gear."
              />
              <SupportStat
                value="ISO"
                label="9001:2015 certified"
                detail="Quality-checked and approved. Also MSME registered."
              />
              <SupportStat
                value="24h"
                label="Reply on enquiries"
                detail="Send us a message, we get back within a working day."
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
                What customers say
              </span>
              <span className="h-px w-8 bg-accent" />
            </div>

            {/* Quote */}
            <figure className="text-center">
              <Quote className="h-7 w-7 text-accent mx-auto mb-6" strokeWidth={2} />
              <blockquote className="font-display text-xl md:text-2xl lg:text-[1.75rem] text-ink leading-[1.4] font-medium tracking-tight">
                The KMV team helped us pick the right balances and microscopes, set them up
                in the lab, and trained our students. Years on, they still pick up the phone.
              </blockquote>

              <figcaption className="mt-10 inline-flex items-center gap-4">
                <div className="h-11 w-11 rounded-full bg-brand text-white flex items-center justify-center font-display font-bold text-sm">
                  HOD
                </div>
                <div className="text-left">
                  <div className="font-display text-base font-bold text-ink">Head of Department</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider mt-0.5">
                    Agricultural University · North India
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
