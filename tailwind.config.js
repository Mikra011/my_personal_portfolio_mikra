/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        'amethyst': {
          100: '#F2EEFC',
          200: '#E5DCF9',
          300: '#CEBEF4',
          400: '#906BE6',
          500: '#5F29DB',
          600: '#481DAA',
          700: '#33157A',
          800: '#1C0B41',
          900: '#0F0623',
        },
        'scarlet': {
          100: '#FCEEF0',
          200: '#F9DCE2',
          300: '#F4BEC8',
          400: '#E66B83',
          500: '#DB294C',
          600: '#AA1D39',
          700: '#7A1529',
          800: '#410B16',
          900: '#23060C',
        },
        'spring': {
          100: '#F8FCEE',
          200: '#F0F9DC',
          300: '#E3F4BE',
          400: '#C0E66B',
          500: '#A5DB29',
          600: '#7FAA1D',
          700: '#5B7A15',
          800: '#31410B',
          900: '#1A2306',
        },
        'oasis': {
          100: '#EEFCF9',
          200: '#DCF9F3',
          300: '#BEF4E9',
          400: '#6BE6CE',
          500: '#29DBB8',
          600: '#1DAA8E',
          700: '#157A66',
          800: '#0B4137',
          900: '#06231D',
        },
      },
      // more if needed
    },
  },
  // variants: {
  //   extend: {
  //     textColor: ['dark'],
  //   },
  // },
  plugins: [],
}
