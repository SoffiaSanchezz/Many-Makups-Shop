/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    fontFamily: {
      Amatic: ['"Amatic SC","sans-serif"'],
      Lobster: ['"Lobster Two","cursive"'],
      Handlee: ['"Handlee", "cursive"']
    },  
    extend: {
      scrollPadding: {
        '96': '24rem',
      },
      colors: {
        'yellow': '#FDDDAA',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      spacing: {
        '4.25': '17rem',
      }
    },
  },
  plugins: [],
}
