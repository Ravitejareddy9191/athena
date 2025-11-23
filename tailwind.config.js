/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // You can port your CSS variables here for consistency
        primary: {
          900: '#111827', // --ds-gray-900
          800: '#1f2937', // --ds-gray-800
        },
        accent: {
          blue: '#3b82f6',
          purple: '#a855f7',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}