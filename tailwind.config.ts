import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#05070A",
        surface: "#0B1018",
        line: "#182232",
        primary: "#234A8A",
        secondary: "#2E5CA8",
        muted: "#94A3B8",
        success: "#22C55E",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "navy-glow": "0 0 80px rgba(35, 74, 138, 0.32)",
        "card-glow": "0 18px 70px rgba(14, 28, 52, 0.48)",
      },
    },
  },
  plugins: [],
};

export default config;
