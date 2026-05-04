"use client";

import { useEffect, useState } from "react";
import { WHATSAPP_DEFAULT } from "@/lib/whatsapp";

export function WhatsAppFAB() {
  const [mounted, setMounted] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    setMounted(true);
    const t = setTimeout(() => setShown(true), 600);
    return () => clearTimeout(t);
  }, []);

  if (!mounted) return null;

  return (
    <a
      href={WHATSAPP_DEFAULT}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with KMV Agrotech on WhatsApp"
      className={`group fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 inline-flex items-center gap-2.5
                  transition-all duration-500 ease-out
                  ${shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
    >
      {/* tooltip pill (hidden on mobile, visible md+ on hover) */}
      <span
        className="hidden md:inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-slate-200
                   shadow-card text-sm font-semibold text-ink whitespace-nowrap
                   opacity-0 -translate-x-2 pointer-events-none
                   group-hover:opacity-100 group-hover:-translate-x-0
                   transition-all duration-300"
      >
        <span className="h-2 w-2 rounded-full bg-[#25D366]" />
        Chat on WhatsApp
      </span>

      {/* button */}
      <span className="relative">
        {/* pulse ring */}
        <span
          aria-hidden
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping"
          style={{ animationDuration: "2.4s" }}
        />
        <span
          className="relative flex h-14 w-14 items-center justify-center rounded-full
                     bg-[#25D366] shadow-lg shadow-emerald-900/20
                     hover:bg-[#1EBE5A] hover:scale-105 active:scale-95
                     transition-all duration-300"
        >
          <WhatsAppGlyph className="h-7 w-7 text-white" />
        </span>
      </span>
    </a>
  );
}

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      className={className}
      aria-hidden
      focusable="false"
    >
      <path d="M16.001 4C9.371 4 4 9.37 4 16c0 2.115.553 4.111 1.522 5.852L4 28l6.293-1.485A11.95 11.95 0 0 0 16 28c6.627 0 12-5.373 12-12 0-6.627-5.373-12-11.999-12Zm0 21.847a9.83 9.83 0 0 1-5.012-1.367l-.359-.213-3.736.881.801-3.643-.234-.376A9.823 9.823 0 0 1 6.169 16c0-5.421 4.412-9.832 9.832-9.832S25.832 10.58 25.832 16c0 5.42-4.412 9.847-9.831 9.847Zm5.39-7.358c-.295-.148-1.748-.864-2.019-.962-.271-.099-.469-.148-.667.148-.197.296-.766.962-.94 1.16-.173.198-.346.222-.642.074-.295-.148-1.247-.46-2.376-1.466-.879-.784-1.47-1.751-1.643-2.047-.173-.296-.018-.456.13-.604.133-.132.296-.346.444-.519.148-.173.197-.296.295-.494.099-.198.05-.371-.025-.519-.074-.148-.667-1.61-.913-2.205-.241-.579-.486-.5-.667-.51l-.568-.01a1.087 1.087 0 0 0-.79.371c-.271.296-1.038 1.013-1.038 2.471 0 1.458 1.062 2.866 1.21 3.064.148.198 2.094 3.197 5.073 4.485.708.305 1.26.487 1.692.624.71.226 1.357.194 1.869.118.57-.085 1.748-.715 1.995-1.405.246-.69.246-1.282.173-1.405-.074-.123-.271-.197-.567-.346Z" />
    </svg>
  );
}

export { WhatsAppGlyph };
