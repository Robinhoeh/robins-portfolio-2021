module.exports = {
  mode: 'jit',
  purge: {
    content: [
      `./components/**/*.{vue,js}`,
      `./layouts/**/*.vue`,
      `./pages/**/*.vue`,
      `./plugins/**/*.{js,ts}`,
      `./nuxt.config.{js,ts}`
    ]
  },
  darkMode: 'class', // media = uses machines mode, class = used for manual toggle in UI
  theme: {
    colors: {

    },
    fontSize: {
      'sm': '1.313rem',
      'md': '1.688rem',
      'lg': '2.938rem',
      'xl': '18.75rem',
      'reg': '1rem',
      'span': '0.813rem'
    },
    fontFamily: {

    },
    extend: {
      spacing: {

      },
      borderRadius: {

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
