// tailwind.config.js
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontSize: {
        tiny: "0.625rem",
        huge: "4rem",
      },
    },
  },
  plugins: [],
};
