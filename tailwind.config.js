/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    fontFamily: {
      inter: ["Barlow Condensed", "sans-serif"],
      grotesk: ["Barlow Condensed", "sans-serif"],
      sans: ["Barlow Condensed", "sans-serif"],
    },
    screens: {
      xl: "1024px",
    },
  },
};
export const plugins = [];
