const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    screens: {
      sm: { max: '767px' },
      md: { min: '768px' },
      lg: { min: '960px', max: '1289px' },
      xl: { min: '1289px' }
    },
    extend: {
      transitionProperty: {
        height: 'height',
        width: 'width',
        spacing: 'margin, padding'
      }
    },
    fontFamily: {
      sans: ['Rubik', ...defaultTheme.fontFamily.sans]
    }
  },
  corePlugins: {
    container: false
  }
};
