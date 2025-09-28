/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      grotesk: ["'Familjen Grotesk'", "sans-serif"],
    },
    screens: {
      xl: "1024px",
    },
  },
};
export const plugins = [];
