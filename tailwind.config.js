/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        sora: ["Sora", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      screens: {
        xl: "1024px",
      },
      animation: {
        "star-movement-bottom": "star-movement-bottom 6s linear infinite",
        "star-movement-top": "star-movement-top 6s linear infinite",
      },
      keyframes: {
        "star-movement-bottom": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "star-movement-top": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};
