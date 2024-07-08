/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        yellow: "#EEE916",
        gray: "#E2E4E4",
        offBlue: "#A3CCC4",
        offGray: "#686C6B",
        skuBlue: "#0C8CE9",
        orange: "#F58505",
        lightBlack: "#040707",
      },
      lineHeight: {
        130: "130%",
        120: "120%",
        110: "110%",
        140: "140%",
        150: "150%",
        105: "105%",
      },
      fontSize: {
        "2xl1": "28px",
        "4xl1": "42px",
      },
    },
  },
  plugins: [],
};
