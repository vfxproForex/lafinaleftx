import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 10s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        cs_primary: {
          100: "#1F3A5F",
          200: "#4d648d",
          300: "#acc2ef",
        },
        cs_bg: {
          100: "#0f1c2e",
          200: "#1f2b3e",
          300: "#374357",
        },
      },
      textColor: {
        cs_text: {
          100: "#FFFFFF",
          200: "#e0e0e0",
        },
        cs_primary: {
          100: "#1F3A5F",
          200: "#4d648d",
          300: "#acc2ef",
        },
      },
      backgroundColor: {
        cs_bg: {
          100: "#0f1c2e",
          200: "#1f2b3e",
          300: "#374357",
        },
        cs_primary: {
          100: "#1F3A5F",
          200: "#4d648d",
          300: "#acc2ef",
        },
        cs_accent: {
          100: "#3D5A80",
          200: "#cee8ff",
        },
      },
      accentColor: {
        cs_accent: {
          100: "#3D5A80",
          200: "#cee8ff",
        },
      },
      gridTemplateRows: {
        7: "repeat(7, minmax(0, 1fr))",
        8: "repeat(8, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
export default config;
