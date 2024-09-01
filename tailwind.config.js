/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: "Raleway",
        questrial: "Questrial",
      },
      colors: {
        primary: "#1E69B8",
        secondary: "#333333",
        red: "#ee3131",
        blue: "#2B6BE8",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
