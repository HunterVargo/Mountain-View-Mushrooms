/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["BebasNeue-Regular", "sans-serif"],
        para: ["Shanti-Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
