import Image from "next/image";

/**
 * KMV Agrotech mark — the official logo (dark gear ring with red "KMV"
 * wordmark and registered mark). Size via `className="h-16 w-16"` or similar.
 * `withMark` is kept for API compatibility; the registered mark is already
 * part of the artwork.
 */
export function Logo({ className }: { className?: string; withMark?: boolean }) {
  return (
    <Image
      src="/kmv-logo.png"
      alt="KMV Agrotech & Engineering Works"
      width={276}
      height={274}
      priority
      className={className}
      style={{ objectFit: "contain", height: "auto" }}
    />
  );
}
