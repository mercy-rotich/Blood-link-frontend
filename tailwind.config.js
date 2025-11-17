/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          red: '#DC2626',
          'red-dark': '#B91C1C',
          'red-light': '#FEE2E2',
        },
        accent: {
          coral: '#FF6B6B',
          pink: '#FF8E9B',
        },
      },
      boxShadow: {
        'red': '0 0 40px rgba(220, 38, 38, 0.3)',
        'blue': '0 0 40px rgba(30, 64, 175, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}