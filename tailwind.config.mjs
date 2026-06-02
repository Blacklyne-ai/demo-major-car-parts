/** @type {import('tailwindcss').Config} */
// Major Car Parts — brand palette extracted from the original logo:
//   navy  #002D62  (the "PARTS" badge)
//   orange #FF5500 (the "MAJOR CAR" wordmark)
// Colours are exposed as RGB triplets so Tailwind opacity modifiers work
// (e.g. bg-navy/80). Single source of truth lives in src/styles/global.css :root.
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: 'rgb(var(--rgb-navy) / <alpha-value>)',
          rich: 'rgb(var(--rgb-navy-rich) / <alpha-value>)',
          deep: 'rgb(var(--rgb-navy-deep) / <alpha-value>)',
          ink: 'rgb(var(--rgb-navy-ink) / <alpha-value>)',
          600: 'rgb(var(--rgb-navy-600) / <alpha-value>)',
          500: 'rgb(var(--rgb-navy-500) / <alpha-value>)',
        },
        orange: {
          DEFAULT: 'rgb(var(--rgb-orange) / <alpha-value>)',
          bright: 'rgb(var(--rgb-orange-bright) / <alpha-value>)',
          deep: 'rgb(var(--rgb-orange-deep) / <alpha-value>)',
          dark: 'rgb(var(--rgb-orange-dark) / <alpha-value>)',
        },
        snow: 'rgb(var(--rgb-snow) / <alpha-value>)',
        stone: 'rgb(var(--rgb-stone) / <alpha-value>)',
        ink: 'rgb(var(--rgb-navy) / <alpha-value>)',
        muted: 'rgb(var(--rgb-muted) / <alpha-value>)',
        'muted-light': 'rgb(var(--rgb-muted-light) / <alpha-value>)',
        line: 'rgb(var(--rgb-border) / <alpha-value>)',
        green: 'rgb(var(--rgb-green) / <alpha-value>)',
        amber: 'rgb(var(--rgb-amber) / <alpha-value>)',
      },
      fontFamily: {
        // Matches the original site: Unbounded headings, Helvetica/Arial body.
        sans: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'system-ui', 'sans-serif'],
        display: ['Unbounded', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', '"SF Mono"', 'monospace'],
      },
      borderRadius: {
        pill: '999px',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
};
