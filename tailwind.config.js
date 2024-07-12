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
        doYou: "url(/assets/images/podCast/webp/do-you-bg.webp)",
        principle: "url('/assets/images/webp/meetAllan/principleBg.webp')",
        hustle: "url('/assets/images/webp/portfolio/bgPortfolio.webp')",
        whoAllan: "url('/assets/images/webp/homePage/bgWhoAllan.webp')",
        grabPdf: "url('/assets/images/webp/homePage/bgGrabPdf.webp')",
        podcastHeaderBg: "url(/assets/images/podCast/webp/podcast-bg-header.webp)",
        connectHeaderBg: "url(/assets/images/podCast/webp/connect-bg-header.webp)",
        libraryHeaderBg: "url(/assets/images/podCast/webp/library-bg-header.webp)",
        speakingHeaderBg: "url(/assets/images/podCast/webp/speaking-bg-header.webp)",
        coachingHeaderBg: "url(/assets/images/podCast/webp/coaching-bg-header.webp)",
        portFolioHeaderBg: "url(/assets/images/podCast/webp/portFolio-bg-header.webp)",
        meetAllanHeaderBg: "url(/assets/images/podCast/webp/meetallan-bg-header.webp)",
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
        black2: "#141414",
        black20: "#00000033",
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
        "6xl1": "72px",
      },
      boxShadow: {
        worldCard: "0px 0px 20px 1px #00000012",
      },
      textShadow: {
        sky: "-1px -1px 0 #a3ccc4, 1px -1px 0 #a3ccc4, -1px 1px 0 #a3ccc4, 1px 1px 0 #a3ccc4",
        skyblue: "-1px -1px 0 #F58505, 1px -1px 0 #F58505, -1px 1px 0 #F58505, 1px 1px 0 #F58505",
        yellow: "-1px -1px 0 #EEE916, 1px -1px 0 #EEE916, -1px 1px 0 #EEE916, 1px 1px 0 #EEE916",
        "custom-sky": "-1px -1px 0 #a3ccc4, 1px -1px 0 #a3ccc4, -1px 1px 0 #a3ccc4, 1px 1px 0 #a3ccc4",
      },
      screens: {
        xs: "400px",
        xxs: "510px",
      },
    },
  },
  plugins: [
    function ({
      addUtilities
    }) {
      const newUtilities = {
        ".text-shadow-sky": {
          textShadow: "-1px -1px 0 #a3ccc4, 1px -1px 0 #a3ccc4, -1px 1px 0 #a3ccc4, 1px 1px 0 #a3ccc4",
        },
        ".text-shadow-skyblue": {
          textShadow: "-1px -1px 0 #F58505, 1px -1px 0 #F58505, -1px 1px 0 #F58505, 1px 1px 0 #F58505",
        },
        ".text-shadow-yellow": {
          textShadow: "-1px -1px 0 #EEE916, 1px -1px 0 #EEE916, -1px 1px 0 #EEE916, 1px 1px 0 #EEE916",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};