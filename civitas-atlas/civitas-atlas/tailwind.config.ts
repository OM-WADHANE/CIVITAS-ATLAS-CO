import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "#09090B",
        foreground: "#FAFAFA",
        border: "rgba(250, 250, 250, 0.08)",
        atlas: {
          black: "#09090B",
          void: "#050506",
          purple: {
            DEFAULT: "#5B21B6",
            light: "#7C3AED",
            dim: "#3B1874",
          },
          indigo: {
            DEFAULT: "#312E81",
            light: "#4338CA",
          },
          gold: {
            DEFAULT: "#D4AF37",
            light: "#F0D584",
            dim: "#8A7226",
          },
          white: "#FAFAFA",
          mist: "rgba(250, 250, 250, 0.6)",
          fog: "rgba(250, 250, 250, 0.38)",
        },
      },
      fontFamily: {
        display: ["var(--font-clash)", "var(--font-satoshi)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      backgroundImage: {
        "grid-glow":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(91, 33, 182, 0.35), transparent)",
        "gold-glow":
          "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(212, 175, 55, 0.12), transparent)",
        "aurora-gradient":
          "linear-gradient(135deg, #5B21B6 0%, #312E81 50%, #09090B 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        marquee: "marquee 40s linear infinite",
      },
      transitionTimingFunction: {
        atlas: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
