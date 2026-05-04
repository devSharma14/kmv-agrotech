import { Download, FileText } from "lucide-react";
import clsx from "clsx";
import { site } from "@/lib/site";

type Variant = "primary" | "outline" | "ghost" | "ghost-light" | "footer-link";

export function CatalogueButton({
  variant = "outline",
  className,
  label = "Download Catalogue",
}: {
  variant?: Variant;
  className?: string;
  label?: string;
}) {
  const variants: Record<Variant, string> = {
    primary: "btn-primary",
    outline: "btn-outline",
    ghost: "btn-ghost",
    "ghost-light": "btn-ghost-light",
    "footer-link":
      "inline-flex items-center gap-2 text-sm text-white/85 hover:text-accent-soft transition-colors",
  };

  return (
    <a
      href={site.cataloguePath}
      download={site.catalogueFilename}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(variants[variant], className)}
      aria-label={`${label} (PDF)`}
    >
      {variant === "footer-link" ? (
        <FileText className="h-4 w-4 text-accent shrink-0" />
      ) : (
        <Download className="h-4 w-4" />
      )}
      <span>{label}</span>
    </a>
  );
}
