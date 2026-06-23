/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          purple: '#3B1E70',
          dark: '#2B124C',
        },
        accent: {
          indigo: '#5A35A2',
        },
        typography: {
          primary: '#111111',
          secondary: '#4B4B4B',
        },
        brandBg: {
          soft: '#FAF8F5',
          white: '#FFFFFF',
        },
        brandForm: {
          beige: '#F3EEE7',
          border: '#DDD3C8',
        }
      },
      fontFamily: {
        avenir: ['Avenir', 'Avenir Next', 'sans-serif'],
      },
      animation: {
        'marquee-slow': 'marquee 40s linear infinite',
        'marquee-fast': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
