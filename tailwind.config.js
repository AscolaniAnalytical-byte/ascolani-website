/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f3f9',
          100: '#d9e2f0',
          200: '#b3c5e1',
          300: '#7a9bc8',
          400: '#4a72b0',
          500: '#2d5494',
          600: '#1e3f7a',
          700: '#162f5e',
          800: '#0f2045',
          900: '#0a1530',
          950: '#060d1e',
        },
        charcoal: {
          700: '#504b46',
          800: '#3d3a36',
          900: '#2c2926',
        },
        gold: {
          400: '#d4b96a',
          500: '#c4a24a',
          600: '#a8882e',
        },
        cream: '#f8f5f0',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'ticker-left': 'tickerLeft 30s linear infinite',
        'ticker-right': 'tickerRight 30s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        tickerLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        tickerRight: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}

