/**
 * KMV Agrotech mark — black gear ring with subtle green inner highlight,
 * white interior and green "KMV" wordmark. Use `className="h-10 w-10"`
 * (or similar) to size; colours are fixed so the mark is consistent.
 */
export function Logo({ className, withMark = false }: { className?: string; withMark?: boolean }) {
  const teethCount = 22;
  const teeth = Array.from({ length: teethCount }, (_, i) => i * (360 / teethCount));

  return (
    <svg
      viewBox="0 0 110 110"
      className={className}
      aria-label="KMV Agrotech & Engineering Works"
      role="img"
    >
      <defs>
        <radialGradient id="kmv-inner-fill" cx="50%" cy="48%" r="55%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#EEF2F7" />
        </radialGradient>
      </defs>

      {/* Gear teeth — small rounded rectangles rotated around centre */}
      {teeth.map((angle) => (
        <rect
          key={angle}
          x="53"
          y="3.5"
          width="4"
          height="11"
          rx="0.6"
          fill="#161616"
          transform={`rotate(${angle} 55 55)`}
        />
      ))}

      {/* Outer gear ring */}
      <circle cx="55" cy="55" r="46" fill="#161616" />

      {/* Inner ring divider (subtle green highlight just inside the dark band) */}
      <circle cx="55" cy="55" r="42" fill="none" stroke="#10B981" strokeWidth="0.5" />

      {/* White inner disc */}
      <circle cx="55" cy="55" r="38" fill="url(#kmv-inner-fill)" />
      <circle cx="55" cy="55" r="38" fill="none" stroke="#161616" strokeWidth="0.75" />

      {/* "KMV" wordmark — brand red */}
      <text
        x="55"
        y="64"
        textAnchor="middle"
        fontSize="24"
        fontWeight="900"
        fontFamily="Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif"
        fill="#059669"
        letterSpacing="-1.4"
      >
        KMV
      </text>

      {/* Optional registered mark — only when explicitly requested (e.g. on a hero) */}
      {withMark && (
        <g>
          <circle cx="100" cy="12" r="6" fill="none" stroke="#161616" strokeWidth="0.75" />
          <text
            x="100"
            y="14.5"
            textAnchor="middle"
            fontSize="6"
            fontWeight="700"
            fontFamily="Plus Jakarta Sans, ui-sans-serif, sans-serif"
            fill="#161616"
          >
            R
          </text>
        </g>
      )}
    </svg>
  );
}
