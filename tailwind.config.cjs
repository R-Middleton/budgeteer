/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateAreas: {
        appLayout: ['sidebar content'],
        budgetLayout: ['header header', 'table inspector'],
      },
      gridTemplateColumns: {
        appLayout: '250px 1fr',
        budgetLayout: '2fr 1fr',
      },
      gridTemplateRows: {
        appLayout: '1fr',
        budgetLayout: '5.5rem 1fr',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui'), require('@savvywombat/tailwindcss-grid-areas')],
};
