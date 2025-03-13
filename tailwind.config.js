/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./assets/**/*.css",
  ],
  theme: {
    extend: {
      colors: {
        dinblu: {
          DEFAULT: '#0049AF',
          50: '#E6F0FF',
          100: '#CCE1FF',
          200: '#99C3FF',
          300: '#66A5FF',
          400: '#3387FF',
          500: '#0069FF',
          600: '#0049AF',
          700: '#003C8C',
          800: '#002E6A',
          900: '#002047',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 