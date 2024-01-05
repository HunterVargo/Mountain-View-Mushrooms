/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      Mint: "#43C59E",
      GhostWhite: "#FAFAFF",
      EerieBlack: "#181616",
      HunyadiYellow: "#ECA72C",
      Jasmine: "#FFDC80",
    },
    borderWidth: {
      3: "3px",
    },
    extend: {
      width: {
        maxView: "1280px",
        miniView: "360px",
      },
      fontFamily: {
        inter: ["inter", "sans-serif"],
        lilitaOne: ["lilita One", "sans-serif"],
      },
    },
  },
  plugins: [],
};
