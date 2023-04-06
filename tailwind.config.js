/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        gamedata: { primary: '#FF7A00', secondary: '#FFA978' },
        gameAssets: { primary: '#423FD9', secondary: '#625FFA' }
      }
    }
  },
  plugins: []
}
