import type { Config } from "tailwindcss";

// Tokens extracted from the HTML redesign (:root variables)
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: { DEFAULT: "var(--red)", light: "var(--red2)", dark: "#5c0c10" },
        ink: "var(--ink)",
        paper: "var(--paper)",
        line: "var(--line)",
        gold: { DEFAULT: "var(--gold)", light: "#cfae74", soft: "#e4cfa3" },
        muted: "var(--muted)",
        surface: "#ffffff",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: { wrap: "1160px" },
      backgroundImage: {
        hero: "radial-gradient(120% 90% at 20% 0%, var(--red2), var(--red) 60%, #5c0c10)",
      },
    },
  },
  plugins: [],
};
export default config;
