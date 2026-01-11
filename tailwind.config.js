import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background))",
        foreground: "rgb(var(--foreground))",
        surface: "#18181b", // Zinc-900
        primary: "#3b82f6", // Blue-500
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
