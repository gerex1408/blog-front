/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  plugins: [require('tailwindcss-animated')],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      white: '#ffffff',
      neutral: '#fbfbfb',
      beige: '#EAE7DC',
      skin: '#D8C3A5',
      gray: '#8E8D8A',
      black: '#000000',
      dark: '#554d56',
      red25: '#E98074',
      red: '#E85A4F',
      green: '#0CAA8B',
      green25: '#8DD4C3',
    },
    extend: {},
  },
};
