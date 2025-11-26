// tailwind.config.js
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "card-bg": "#392d35",
        "card-bg-hover": "#5a3f58",
        "card-title": "#C6A4B6",
        "card-link": "#E8C4C4",
        "card-link-hover": "#F5D6D6",
      },
      keyframes: {
        pulseGlowAlt: {
          "0%, 100%": { boxShadow: "0 0 15px 3px rgba(157,127,159, 0.6)" },
          "50%": { boxShadow: "0 0 25px 6px rgba(157,127,159, 0.9)" },
        },
      },
      animation: {
        pulseGlowAlt: "pulseGlowAlt 3s ease-in-out infinite",
      },
      fontSize: {
        tiny: "0.625rem",
        huge: "4rem",
      },
    },
  },
  plugins: [],
};
