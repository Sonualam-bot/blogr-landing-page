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
      },
    },
    fontFamily: {
      Overpass: ["Overpass", "sans-serif"],
      Ubuntu: ["Ubuntu", "sans-serif"],
    },
  },
  plugins: [],
};
