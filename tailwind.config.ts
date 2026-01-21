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
        primary: {
          DEFAULT: "#8B1538",
          dark: "#6B0F2A",
          light: "#A01842",
        },
        accent: {
          yellow: "#FDB913",
          blue: "#1E3A8A",
        },
        dark: {
          DEFAULT: "#111111",
          lighter: "#1B1B1B",
          light: "#2A2A2A",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
