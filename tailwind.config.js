/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#F8F3EA',
        cream: '#F1E9DA',
        terracotta: {
          DEFAULT: '#B5502E',
          hover: '#9B4224',
          light: '#F8ECE8'
        },
        gold: {
          DEFAULT: '#C6A15B',
          hover: '#B28E46',
          light: '#F7F2E7'
        },
        olive: {
          DEFAULT: '#6B7255',
          hover: '#575E44'
        },
        espresso: '#241D19',
        warmcharcoal: '#4A423C',
        sand: '#DCD0BC'
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Manrope', 'sans-serif']
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(36, 29, 25, 0.05)',
        'card': '0 8px 30px rgba(36, 29, 25, 0.06)'
      }
    },
  },
  plugins: [],
}
