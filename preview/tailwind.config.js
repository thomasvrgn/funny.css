/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './preview/index.html'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('../src'),
    plugin(function ({ addVariant }) {
      addVariant('children', '& > *');
    })
  ],
}
