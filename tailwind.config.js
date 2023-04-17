/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx"],
  theme: {
    extend: {
      colors: {
        blue: "#1106E2",
        gray: "#D6D6D6",
        red: "#EA2727",
        darkBlue: "#0C1A35",
      },
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
