/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ru-blue': '#0055CC',
        'ru-red': '#E4181C',
        'ru-white': '#FFFFFF',
        'ru-dark': '#003399',
      },
    },
  },
  plugins: [],
}