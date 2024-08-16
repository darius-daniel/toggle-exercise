/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./{styles,scripts}/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
