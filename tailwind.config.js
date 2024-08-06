/** @type {import('tailwindcss').Config} */

// const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    // "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    // flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        red: "#DC1E32",
        red1: "#FF4155",
        blue: "#100F9C",
        grey: "#424143",
        lightBlue: "#F8FDFF",
      },
      dropShadow: {
        red: "0 2px 5px #DC1E32",
      },
      transitionDuration: {
        2000: "2000ms",
        3000: "3000ms",
        4000: "4000ms",
      },
    },

    fontFamily: {
      sans: ["Kanit"],
    },
  },
  plugins: [
    require("daisyui"),
    // , require("flowbite/plugin")
  ],
};
