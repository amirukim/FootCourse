/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-purple": "#3B395A",
        "dark-purple": "#292741",
        "hover-purple": "#19182C",
        oren: "#ffa754",
        hijau: "#AAD3A9",
      },
      fontFamily: {
        monsterrat: ["Montserrat", "sans-serif"],
        bebas: ["Bebas Neue", "cursive"],
      },
    },
  },
};
