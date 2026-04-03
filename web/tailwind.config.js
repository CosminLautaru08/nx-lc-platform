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
        'brand-gray': 'var(--brand-gray)',
        'brand-red': 'var(--brand-red)',
        'brand-cream': 'var(--brand-cream)',
        'palette-bg': 'var(--color-bg)',
        'palette-foreground': 'var(--color-foreground)',
        'palette-primary': 'var(--color-primary)',
        'palette-muted': 'var(--color-muted)',
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
