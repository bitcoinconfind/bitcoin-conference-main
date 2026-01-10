/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
        heading: ["Space Grotesk", "sans-serif"],
        sora: ["Sora", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "btc-gold": "#F7931A",
        "btc-gold-hover": "#E08214",
        "btc-dark": "#050505",
        "btc-card": "#121212",
        "btc-accent": "#2A2A2A",
        "glass-black": "rgba(10, 10, 10, 0.7)",
      },
      screens: {
        xl: "1024px",
      },
      animation: {
        "star-movement-bottom": "star-movement-bottom 6s linear infinite",
        "star-movement-top": "star-movement-top 6s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "aurora-1": "aurora 20s infinite alternate cubic-bezier(0.4, 0, 0.2, 1)",
        "aurora-2": "aurora-slow 25s infinite alternate cubic-bezier(0.4, 0, 0.2, 1)",
        "grid-flow": "grid-flow 2s linear infinite",
        "shimmer": "shimmer 3s linear infinite",
        "float-fast": "float 4s ease-in-out infinite",
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
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-30px)" }, // Deeper float
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        aurora: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "25%": { transform: "translate(-2%, 5%) scale(1.1)" },
          "50%": { transform: "translate(2%, 0) scale(0.95)" },
          "75%": { transform: "translate(5%, -5%) scale(1.05)" },
        },
        "aurora-slow": {
          "0%, 100%": { transform: "translate(0, 0) scale(1.2)" },
          "50%": { transform: "translate(-5%, 10%) scale(1.3)" },
        },
        "grid-flow": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(60px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        }
      },
    },
  },
  plugins: [],
};
