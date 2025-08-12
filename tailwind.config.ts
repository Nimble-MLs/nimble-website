import { Poppins } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
        boska: ['Boska', 'serif'],
        switzer: ['Switzer', 'sans-serif'],
    },
    colors: {
      transparent: "transparent",
      
      primary: "#D5FAF1",
      secondary: "#BBE5FC",
      tertiary: "#FFD1D6",
      
      dark: "black",
      darkSecondary: '#242038',
      darkTertiary: '#38BCA6',
      
      light: "#444544",
      white: "#fff",

    },
  },
  plugins: [],
};


export default config;
