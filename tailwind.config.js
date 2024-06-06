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
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px 4px rgba(255, 105, 180, 0.5)' },
          '50%': { boxShadow: '0 0 30px 10px rgba(255, 105, 180, 1)' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        glow: 'glow 2s ease-in-out infinite',
        rotate: 'rotate 4s linear infinite',
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
