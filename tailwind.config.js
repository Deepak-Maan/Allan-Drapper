/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'principle': "url('/assets/images/webp/meetAllan/principleBg.png')",
      }, colors: {
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
        "3xl1": "34px",
        "4xl1": "42px",
        "5xl1": "56px",
      },
      opacity: {
        80: "80%",
        50: "50%",
      },
      fontWeight: {
        450: '450'
      },
      textShadow: {
        'sky': '-1px -1px 0 #a3ccc4, 1px -1px 0 #a3ccc4, -1px 1px 0 #a3ccc4, 1px 1px 0 #a3ccc4',
        'skyblue': '-1px -1px 0 #F58505, 1px -1px 0 #F58505, -1px 1px 0 #F58505, 1px 1px 0 #F58505',
        'yellow': '-1px -1px 0 #EEE916, 1px -1px 0 #EEE916, -1px 1px 0 #EEE916, 1px 1px 0 #EEE916',
     
      },
      screens: {
        "xs": "400px"
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sky': {
          textShadow: '-1px -1px 0 #a3ccc4, 1px -1px 0 #a3ccc4, -1px 1px 0 #a3ccc4, 1px 1px 0 #a3ccc4',
        },
        '.text-shadow-skyblue': {
          textShadow: '-1px -1px 0 #F58505, 1px -1px 0 #F58505, -1px 1px 0 #F58505, 1px 1px 0 #F58505',
        },
        '.text-shadow-yellow': {
          textShadow: '-1px -1px 0 #EEE916, 1px -1px 0 #EEE916, -1px 1px 0 #EEE916, 1px 1px 0 #EEE916',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
};