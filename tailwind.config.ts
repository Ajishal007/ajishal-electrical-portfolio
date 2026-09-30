import type { Config } from "tailwindcss";

const withAlpha = (v: string) => `rgb(var(${v}) / <alpha-value>)`;

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: withAlpha("--paper"),
        surface: withAlpha("--surface"),
        ink: withAlpha("--ink"),
        line: withAlpha("--line"),
        mute: withAlpha("--mute"),
        accent: withAlpha("--accent"),
      },
      fontFamily: {
        sans: [
          "Bahnschrift",
          "DIN Alternate",
          "Avenir Next Condensed",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
export default config;
