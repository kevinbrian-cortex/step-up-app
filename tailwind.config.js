/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {},
      spacing: {
        "2x": "20px",
        "3x": "30px",
        "4x": "40px",
        "5x": "50px",
      },
      borderRadius: {
        "4xl": "40px",
      },
    },
  },
  plugins: [],
};
