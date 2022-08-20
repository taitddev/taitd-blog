/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2ebac1",
        secondary: "#a4d96c",
      },
    },
  },
  plugins: [],
};
