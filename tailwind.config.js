/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "comic-neue": ['"Comic Neue"', "cursive"],
        "roboto-serif": ['"Roboto Serif"', "serif"],
        kalam: ["Kalam"],
        handlee: ["Handlee"],
      },
    },
  },
  variants: {
    extend: {
      blur: ["hover", "group-hover"],
    },
  },
  plugins: [],
};
