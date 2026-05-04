import { SectionLabel } from "./SectionLabel";

export function PageHeader({
  eyebrow,
  title,
  description,
  meta,
}: {
  number?: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  meta?: React.ReactNode;
}) {
  return (
    <section className="relative bg-surface-alt border-b border-slate-200 overflow-hidden">
      <div className="absolute inset-0 bg-grid-soft opacity-60 pointer-events-none" aria-hidden />
      <div className="container-x relative pt-12 md:pt-16 pb-14 md:pb-20">
        {meta && <div className="mb-6">{meta}</div>}
        <SectionLabel className="mb-5">{eyebrow}</SectionLabel>
        <h1 className="font-display font-bold text-display-xl text-ink tracking-tight max-w-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 text-base md:text-lg text-slate-600 max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
