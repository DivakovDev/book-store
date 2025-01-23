import lineClamp from '@tailwindcss/line-clamp';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#FFCE1A',
        'second': '#0D0842',
        'black-bg': '#F3F3F3',
        'favorite': '#FF5841'
      },
      fontFamily:{
        'primary': ['Montserrat', 'serif'],
        'secondary': ['Nunito Sans', 'serif']
      }
    },
  },
  plugins: [
    lineClamp
  ],
}

