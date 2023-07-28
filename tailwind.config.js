/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/**/*.{html,js,ts,css}',
    './preview/index.html'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: colors.green[400],
          foreground: colors.green[950],
        },
        secondary: {
          DEFAULT: colors.white,
          foreground: colors.neutral[800],
        },
      }
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('children', '& > *');
    })
  ],
}
