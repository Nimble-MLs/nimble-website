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
      boska: ["Boska", "sans-serif"],
      switzer: ["Switzer", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      primary: "#edfffe",
      secondary: "#14deda",
      darkSecondary: '#14A19E',
      tertiary: "#dfdfdf",
      darkTertiary: '#7C7C7C',
      dark: "#131313",
      light: "#444544",
      white: "#fff",

    },
  },
  plugins: [],
};
export default config;
