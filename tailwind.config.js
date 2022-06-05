const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './components/**/*.vue',
    './layouts/**/*.vue',
    './pages/**/*.vue',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,

      brand: '#fed154',
      dark: '#202225'
    },
    extend: {},
    fontFamily: {
      'body': ['"Gilroy", sans-serif'],
    }
  },
  plugins: [],
}
