/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#DC1E32",
        blue: "#100F9C",
        grey: "#424143",
      },
    },
  },
  plugins: [require("daisyui")],
};
