module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class',
  theme: {
    extend: {
      colors: {
        fwDarkPurple: '#30122d',
        fwRed: '#870734',
        fwOrangeRed: '#cb2d3e',
        fwOrange: '#ef473a',
        fwTan: '#ffd6bf',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
