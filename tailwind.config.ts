import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,css}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#b86308",
        "accent-hover": "#9a5206",
        "accent-light": "#f5e6d9",
        "accent-muted": "rgba(184, 99, 8, 0.08)",
        surface: "#fafaf9",
        "surface-elevated": "#ffffff",
        ink: "#1c1917",
        "ink-muted": "#57534e",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.5rem, 5vw, 4rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2rem, 4vw, 3rem)", { lineHeight: "1.15" }],
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(0,0,0,0.04), 0 4px 20px -2px rgba(0,0,0,0.03)",
        card: "0 1px 3px 0 rgba(0,0,0,0.04), 0 8px 24px -4px rgba(0,0,0,0.06)",
        "card-hover": "0 4px 6px -1px rgba(0,0,0,0.05), 0 20px 40px -8px rgba(0,0,0,0.08)",
        glow: "0 0 0 1px rgba(184,99,8,0.06), 0 8px 32px -4px rgba(184,99,8,0.12)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-pattern": "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(184,99,8,0.06) 0%, transparent 55%)",
        "section-soft": "linear-gradient(180deg, #fafaf9 0%, #ffffff 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "scroll-line": "scrollLine 2s ease-in-out infinite",
        "scroll-pulse": "scrollPulse 2.5s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scrollLine: {
          "0%, 100%": { top: "0" },
          "50%": { top: "calc(100% - 6px)" },
        },
        scrollPulse: {
          "0%, 100%": { opacity: "0.7" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
