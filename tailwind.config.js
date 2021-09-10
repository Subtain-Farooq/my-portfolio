const colors = require('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        //  'primary': '#2521E8',
        //  'secondary': '#EC615B',
        'primary': '#00C1D4',
        'secondary': '#1089FF',
        'tertiary': '#F8485E'
      },
      boxShadow: {
        'secondary': '-16px -16px 0px #1089FF',
        //'box': '-6px -6px 0px rgba(236, 97, 91, 1)',
      },
      dropShadow: {
        'secondary': '-6px -6px 0px #1089FF',
        'heading-secondary': '-4px -4px 0px #1089FF',
      },
      borderWidth: {
        3: '3px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
