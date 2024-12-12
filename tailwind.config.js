/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'Cormorant':["Cormorant Garamond", 'serif'],
      'Inter' :["Inter", 'sans-serif'],
      'DMSans' :["DM Sans", 'sans-serif'],
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors:{
        'bagCol':'#1E1E1E'
      }
    },
  },
  plugins: [],
}