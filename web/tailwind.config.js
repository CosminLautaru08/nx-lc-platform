const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        'brand-gray': '#0f172a',
        'brand-red': '#b91c1c',
        'brand-cream': '#f7f6f3',
      },
      fontFamily: {
        display: ['"Manrope"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 24px 70px -30px rgba(0,0,0,0.45)',
      },
    },
  },
  plugins: [],
};
