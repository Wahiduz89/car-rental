/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
      dropShadow: {
        '2xl': [
          '0 4px 3px rgb(0 0 0 / 0.07)',
          '0 2px 2px rgb(0 0 0 / 0.06)'
        ]
      },
      backdropBlur: {
        sm: '4px'
      }
    },
  },
  corePlugins: {
    backdropFilter: true,
  },
  plugins: [],
}