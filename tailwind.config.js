module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navCol: {
          50: '#edf1fc',
          100: '#d3d4e1',
          200: '#b6b8c9',
          300: '#989bb2',
          400: '#7c7f9b',
          500: '#636582',
          600: '#4c4f66',
          700: '#363849',
          800: '#21222e',
          900: '#0a0a16',
          1000: '#2b3148',
        },
        buttonCol: {
          50: '#ffe3eb',
          100: '#ffb3c2',
          200: '#fb8399',
          300: '#f95370',
          400: '#f62448',
          500: '#dc0d2f',
          600: '#ac0624',
          700: '#7c031a',
          800: '#4c000e',
          900: '#1f0003',
        },
        coupenCol: {
          50: '#fff8e5',
          100: '#feebb9',
          200: '#fddd89',
          300: '#fdcf59',
          400: '#fdc331',
          500: '#e4a921',
          600: '#b18419',
          700: '#7f5d10',
          800: '#4c3807',
          900: '#1a1300',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
