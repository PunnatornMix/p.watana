/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#DC1E32",
        red1: "#FF4155",
        blue: "#100F9C",
        grey: "#424143",
      },
      dropShadow: {
        red: "0 2px 5px #DC1E32",
      },
    },
  },
  plugins: [require("daisyui")],
};
