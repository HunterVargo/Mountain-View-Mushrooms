/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      extrasm: "375px",
      tab: "768px",
      sm: "1230px",
    },
    colors: {
      Mint: "#43C59E",
      GhostWhite: "#FAFAFF",
      EerieBlack: "#181616",
      HunyadiYellow: "#ECA72C",
      Jasmine: "#FFDC80",
      SporeGreen: "#69DA96",
      SporeBlue: "#69B1DA",
    },
    borderWidth: {
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    extend: {
      width: {
        maxView: "1280px",
        miniView: "320px",
        YtW: "1122px",
      },
      height: {
        YtH: "631.89px",
      },
      fontFamily: {
        inter: ["inter", "sans-serif"],
        lilitaOne: ["lilita One", "sans-serif"],
      },
    },
  },
  plugins: [],
};
