/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scale: {
        170: "1.7",
        175: "1.75",
        180: "1.8",
        190: "1.9",
        200: "2",
        210: "2.1",
        220: "2.2",
        230: "2.3",
        240: "2.4",
        250: "2.5",
        260: "2.6",
        280: "2.84",
        290: "2.9",
        300: "3",
        310: "3.1",
        330: "4.7",
      },
    },
    fontFamily: {
      Overpass: ["Overpass", "sans-serif"],
      Ubuntu: ["Ubuntu", "sans-serif"],
    },
    screens: {
      sm: { min: "0px", max: "767px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "768px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "1024px", max: "1279px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1280px", max: "1535px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      "2xl": { min: "1536px" },
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
