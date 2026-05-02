import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0B3B6F",
          dark: "#082B52",
          deep: "#06203D",
          soft: "#14528E",
          50: "#F0F5FB",
          100: "#DCE7F4",
          200: "#B6CCE6",
          300: "#7EA3CE",
          400: "#3D72A8",
          500: "#14528E",
          600: "#0B3B6F",
          700: "#082B52",
          800: "#06203D",
          900: "#04162A",
        },
        accent: {
          DEFAULT: "#E2761B",
          dark: "#C2410C",
          soft: "#F59E4B",
          50: "#FEF4EB",
        },
        ink: {
          DEFAULT: "#1A2332",
          soft: "#2D3A50",
        },
        slate: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          alt: "#F8FAFC",
          card: "#F1F5F9",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(2.5rem, 5vw, 4.25rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2rem, 4vw, 3.25rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.625rem, 3vw, 2.5rem)", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
        "display-sm": ["clamp(1.375rem, 2.2vw, 1.875rem)", { lineHeight: "1.2", letterSpacing: "-0.012em" }],
        eyebrow: ["0.75rem", { lineHeight: "1", letterSpacing: "0.12em" }],
      },
      maxWidth: {
        container: "1280px",
        prose: "65ch",
      },
      spacing: {
        section: "clamp(5rem, 9vw, 8.5rem)",
        "section-sm": "clamp(3rem, 6vw, 5.5rem)",
      },
      boxShadow: {
        card: "0 1px 2px rgba(15, 23, 42, 0.04), 0 1px 1px rgba(15, 23, 42, 0.03)",
        "card-hover": "0 8px 24px -8px rgba(11, 59, 111, 0.12), 0 2px 6px rgba(15, 23, 42, 0.05)",
        inset: "inset 0 0 0 1px rgba(11, 59, 111, 0.08)",
      },
      borderRadius: {
        DEFAULT: "4px",
        sm: "2px",
        md: "6px",
        lg: "8px",
      },
      animation: {
        "marquee-x": "marquee-x 50s linear infinite",
      },
      keyframes: {
        "marquee-x": {
          "0%": { transform: "translate3d(0,0,0)" },
          "100%": { transform: "translate3d(-50%,0,0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
