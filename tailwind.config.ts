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
      fontFamily: {
        poppins: "Poppins",
        montserrat: "Montserrat",
        raleway: "Raleway",
        roboto: "Roboto",
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
export default config;
