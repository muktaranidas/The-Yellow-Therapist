/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        colorYellow: "#ffc000",
        colorGray: "#5f6368",
        colorFooter: "rgba(0, 0, 0, 0.3);",
      },
    },
  },
  plugins: [require("daisyui")],
};
