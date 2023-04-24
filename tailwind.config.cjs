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
      spacing: {
        '5px': '5px',
        '9px': '9px',
        '11px': '11px',
        '15px': '15px',
        '42px': '42px',
        '50px': '50px',
        '13': '52px',
        '17': '68px',
        '22': '88px',
        '25': '100px',
        '30': '120px',
        '42': '168px',
        '50': '200px',
        '125px': '125px',
        '174px': '174px',
        '70': '280px',
        '75': '300px',
        '88': '352px',
        '318px': '318px',
        '92': '368px',
        '100': '400px',
        '105': '420px',
        '445px': '445px',
        '115': '460px',
        '120': '480px',
        '135': '540px',
        '140': '560px',
        '143': '572px',
        '147': '588px',
        '148': '592px',
      }
    },
  },
  plugins: [],
}
