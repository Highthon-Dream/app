/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6A9DFF",
      },
      fontFamily: {
        lotteria: "LOTTERIACHAB",
      },
      backgroundImage: {
        "back-pattern": "url('./assets/background.png')",
      },
    },
  },
  plugins: [],
};
