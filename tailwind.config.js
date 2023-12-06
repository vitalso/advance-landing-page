/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    container: {
      screens: {
        '2xl': '1320px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['"Borna-Regular"', 'sans-serif'],
        title: ['"Monarque-LightItalic"' , 'sans-serif'],
        bold: ['"Borna-Bold"', 'sans-serif'],
        medium: ['"Borna-Medium"', 'sans-serif'],
      },
      colors: {
        'primary-light': '#657DF9',
        'primary-blue': '#3F5EFB',
      },
    },
  },
  plugins: [],
}

