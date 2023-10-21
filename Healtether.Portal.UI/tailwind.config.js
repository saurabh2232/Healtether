/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require('@iconify/tailwind');
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", 
            "./node_modules/tw-elements-react/dist/js/**/*.js",
            "./node_modules/tw-elements/dist/js/**/*.js",
            "./src/*.html"
          ],
  theme: {
    fontFamily: {
      sans: ["source-sans-pro"],
      arimo: ["arimo" ,'sans-serif'],
    },
    letterSpacing: {
      wider: '0.04rem',
    },
    extend: {},
    // colors:{
    //   'Titan':'#F9F9FF'
    // }
  },
  plugins: [require("tw-elements-react/dist/plugin.cjs"), addDynamicIconSelectors(), require('@tailwindcss/forms')],
  darkMode: "class",
};
