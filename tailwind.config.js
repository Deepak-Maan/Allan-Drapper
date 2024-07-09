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
        'hustle': "url('/assets/images/webp/portfolio/bgPortfolio.png')",
      },
     colors: {
        whoAllan: "url('/assets/images/webp/homePage/bgWhoAllan.png')",
        grabPdf: "url('/assets/images/webp/homePage/bgGrabPdf.png')",
      },
      colors: {
        yellow: "#EEE916",
        gray: "#E2E4E4",
        offBlue: "#A3CCC4",
        offGray: "#686C6B",
        darkGray: "#1D1D1D",
        skuBlue: "#0C8CE9",
        orange: "#F58505",
        lightBlack: "#040707",
        lightGrey: "#E2E4E4",
        black2: "#141414",
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
        "5xl1": "56px",
        "6xl1": "72px",
      },
      opacity: {
        80: "80%",
        50: "50%",
      },
      fontWeight: {
        450: "450",
      },
      textShadow: {
        'custom-sky': '-1px -1px 0 #a3ccc4, 1px -1px 0 #a3ccc4, -1px 1px 0 #a3ccc4, 1px 1px 0 #a3ccc4',
      },
      screens: {
        "xs": "400px"
      },
    },
  },

  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-custom-sky': {
          textShadow: '-1px -1px 0 #a3ccc4, 1px -1px 0 #a3ccc4, -1px 1px 0 #a3ccc4, 1px 1px 0 #a3ccc4',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
    variants: {
      extend: {},
    },
}
