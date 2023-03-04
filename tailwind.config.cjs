/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: {
        100: '#000000',
        90: '#101010'
      },
      white: '#ffffff',
      grey: {
        100: '#f1f1f1',
        90: '#fafafa'
      },
      orange: {
        100: '#d87d4a',
        90: '#fbaf85'
      },
    },
    extend: {
    },
  },
  plugins: [],
}
