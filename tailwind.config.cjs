/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateAreas: {
        appLayout: ['sidebar content'],
      },
      gridTemplateColumns: {
        appLayout: '250px 1fr',
      },
      gridTemplateRows: {
        appLayout: '1fr',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui'), require('@savvywombat/tailwindcss-grid-areas')],
};
