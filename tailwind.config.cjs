/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1440px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: {
        100: '#000000',
        90: '#101010',
        80: '#141414',
        70: '#0e0e0e',
        60: '#121212',
        50: '#191919',
      },
      white: '#ffffff',
      grey: {
        100: '#f1f1f1',
        90: '#fafafa',
        80: '#cfcfcf',
      },
      orange: {
        100: '#d87d4a',
        90: '#fbaf85'
      },
      red: '#cd2c2c',
    },
    extend: {
    },
  },
  plugins: [],
}
