import clsx from "clsx";

export function SectionLabel({
  children,
  light,
  className,
}: {
  number?: string;
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "inline-flex items-center gap-2.5 text-xs uppercase font-semibold tracking-[0.14em]",
        light ? "text-white/70" : "text-accent-dark",
        className
      )}
    >
      <span className={clsx("h-2 w-2 rounded-full", light ? "bg-accent" : "bg-accent")} />
      <span>{children}</span>
    </div>
  );
}
