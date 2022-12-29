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
      colors: {
        'yellow': '#FDDDAA',
      }
    },
  },
  plugins: [],
}
