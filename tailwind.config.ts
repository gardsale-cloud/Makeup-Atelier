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
        "primary": "#e0b329",
        "background-light": "#f8f7f6",
        "background-dark": "#1f1f1f",
        "neutral-dark": "#1f1f1f",
        "neutral-medium": "#6b7280",
        "border-light": "#e5e5e5",
        // Atelier Palette
        "atelier-bg": "#F6F4F1",
        "atelier-text": "#2A2A2A",
        "atelier-muted": "#6C6A67",
        "atelier-border": "#EDEBE7",
        "atelier-cta": "#2B2A28",
        "atelier-cta-hover": "#3A3836",
        "atelier-accent": "var(--accent)",
      },
      fontFamily: {
        "display": ["var(--font-manrope)", "sans-serif"],
        "chinese": ["var(--font-noto-sans-sc)", "sans-serif"],
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
