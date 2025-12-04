import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        foreground: "#0F172A", // Slate 900
        primary: "#3B82F6",    // Blue 500
        secondary: "#6366F1",  // Indigo 500
        accent: "#8B5CF6",     // Violet 500
        muted: "#F1F5F9",      // Slate 100
        border: "#E2E8F0",     // Slate 200
        "card-bg": "rgba(255, 255, 255, 0.7)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow": "conic-gradient(from 180deg at 50% 50%, #E0F2FE 0deg, #F3E8FF 180deg, #E0F2FE 360deg)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
