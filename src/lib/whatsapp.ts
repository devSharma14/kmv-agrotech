import { site } from "./site";

/** Build a wa.me deep link with a pre-filled message. */
export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${site.whatsappRaw}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

/** Pre-filled product inquiry message. */
export function whatsappProductInquiry(productName: string): string {
  return whatsappUrl(
    `Hello KMV Agrotech, I'm interested in the ${productName}. Could you share availability, pricing and lead time?`
  );
}

/** Generic greeting for the floating button. */
export const WHATSAPP_DEFAULT = whatsappUrl(
  "Hello KMV Agrotech, I'd like to enquire about your products."
);
