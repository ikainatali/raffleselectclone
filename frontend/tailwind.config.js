/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        robotoFlex: ["Roboto Flex", "sans-serif"],
        freeman: ["Freeman", "sans-serif"],
      },
      colors: {
        blackLight: "#000000DE",
        blackDark: "#161616",
        gray: "#97999D",
        purple: "#8121a3",
        red: "#e62a21",
        yellow: "#ffda8d",
      },
      screens: {
        xs: "430px",
      },
    },
  },
  plugins: [],
};
