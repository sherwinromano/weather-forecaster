/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '14': '14%',
        '35': '35%',
        '40': '40%',
        '45': '45%'
      },
      width: {
        '10': '10%',
        '53': '53%'
      },
      lineHeight: {
        '100': '90%',
        '95': '95%',
      },
      letterSpacing: {
        '1': '-1px'
      },
      colors: {
        'sub': '#858585'
      },
      fontSize: {
        '14': '14px',
        '18': '18px',
        '42': '42px',
      },
      flexBasis: {
        '30': '30%'
      },
      gap: {
        '10': '10px',
        '12': '12px',
      },
      borderRadius: {
        '4': '4px',
        '14': '14px',
        '50': '50%',
      },
      borderWidth: {
        '1': '1px'
      },
      borderColor: {
        'gray': '#0000004f',
        'input': '#00000050',
      },
      backgroundColor: {
        'white': '#f0f0f0',
        'glass': '#ffffff6b',
        'nav': '#ffffffb0',
      },
      gridTemplateColumns: {
        'auto': 'repeat(3, auto)'
      },
    },
  },
  plugins: [],
}

