/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px", //small
      md: "768px", //medium
      lg: "976px", //large
      xl: "1140px", //extra-large
    },
    extend: {},
  },
  plugins: [],
};
