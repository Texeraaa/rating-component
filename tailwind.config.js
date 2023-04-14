/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      'sans': ['Overpass']
    },
    screens: {
      'sm': '375px',
      'desktop': '1440px'
    },
    extend: {
      colors: {
        'orange': 'hsl(25, 97%, 53%)',
        'white': 'hsl(0, 0%, 100%)',
        'light-gray': 'hsl(217, 12%, 63%)',
        'medium-gray': 'hsl(216, 12%, 54%)',
        'str-gray': 'rgba(38,46,57,255)',
        'dark-blue': 'rgba(24,30,40,255)',
        'str-dark-blue-2': 'rgba(20,20,29,255)',
        'str-dark-blue': 'rgba(20,20,24,255)',
      }
    },
  },
  plugins: [],
}

