import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "atelier-bg": "var(--color-bg-base)",
        "atelier-layer": "var(--color-bg-layer-1)",
        "atelier-surface": "var(--color-surface)",
        "atelier-text": "var(--color-text-primary)",
        "atelier-muted": "var(--color-text-secondary)",
        "atelier-border": "var(--color-border-soft)",
        "atelier-accent": "var(--color-accent)",
        "atelier-accent-soft": "var(--color-accent-soft)",
        "atelier-cta": "var(--color-cta-bg)",
        "atelier-cta-text": "var(--color-cta-text)",
      },
      fontFamily: {
        "display": ["var(--font-manrope)", "sans-serif"],
        "chinese": ["var(--font-noto-sans-hk)", "var(--font-noto-sans-sc)", "sans-serif"],
        "chinese-sc": ["var(--font-noto-sans-sc)", "var(--font-noto-sans-hk)", "sans-serif"],
        "serif": ["Times New Roman", "serif"],
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "2xl": "1rem",
        "full": "9999px"
      },
      boxShadow: {
        "soft": "0 1px 2px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
export default config;
