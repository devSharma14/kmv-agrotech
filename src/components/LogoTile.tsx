"use client";

import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";

/**
 * Renders a logo image at `src` with a styled text fallback if the file
 * is missing (so layout stays consistent while logos are still being collected).
 *
 * Drop logo files into /public/clients (or /public/brands) and reference
 * them via the `src` prop.
 */
export function LogoTile({
  name,
  src,
  className,
  variant = "light",
}: {
  name: string;
  src?: string;
  className?: string;
  variant?: "light" | "dark";
}) {
  const [errored, setErrored] = useState(false);
  const showImage = src && !errored;

  return (
    <div
      className={clsx(
        "relative flex items-center justify-center p-3 transition-colors",
        variant === "light"
          ? "bg-white hover:bg-brand-50"
          : "bg-brand-deep hover:bg-brand-dark",
        className
      )}
      title={name}
    >
      {showImage ? (
        <Image
          src={src!}
          alt={name}
          fill
          sizes="(min-width:1024px) 12vw, 25vw"
          className={clsx(
            "object-contain p-3",
            variant === "dark" && "brightness-0 invert opacity-80 hover:opacity-100"
          )}
          onError={() => setErrored(true)}
          unoptimized
        />
      ) : (
        <span
          className={clsx(
            "font-display font-bold text-center leading-tight tracking-tight px-2",
            variant === "light"
              ? "text-ink/70 hover:text-brand"
              : "text-white/70 hover:text-accent",
            name.length > 8 ? "text-sm" : "text-base md:text-lg"
          )}
        >
          {name}
        </span>
      )}
    </div>
  );
}
