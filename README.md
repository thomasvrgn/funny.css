# Funny.CSS - A TailwindCSS UI Library

Funny.CSS is a, as its name tells, funny UI library for TailwindCSS. It is a collection of components and utilities that I use in my projects. It is not meant to be used as a standalone library, but rather as a base for your own UI library.

## Installation

```bash
npm install funny.css
```

## Usage
  
```javascript 
/** @type {import('tailwindcss').Config} */

module.exports = {
  ...config,
  plugins: [
    require('funny.css')
  ],
}
```

## Theming 

Funny.CSS is meant to be used with TailwindCSS's JIT mode. It is also meant to be used with a custom theme. It provides two main colors that are primary and secondary and in addition provides a foreground color for each of them. The foreground color is the color that is used for text and icons.

```javascript
// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: colors.green[400],
          foreground: colors.green[950],
        },
        secondary: {
          DEFAULT: colors.white,
          foreground: colors.neutral[950],
        }
      }
    }
  }
}
```

## Build from source

```bash
git clone https://github.com/thomasvergne/funny.css
cd funny.css
yarn 
yarn compile
# Then you can preview the library with the website within the preview folder
```
