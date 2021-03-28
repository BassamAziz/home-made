// See the Tailwind default theme values here:
// https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
const colors = require('tailwindcss/colors');

module.exports = {
  // Opt-in to TailwindCSS future changes
  future: {
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ],

  // Purge unused TailwindCSS styles
  purge: {
    enabled: ["production", "staging"].includes(process.env.NODE_ENV),
    content: [
      './**/*.html.erb',
      './app/helpers/**/*.rb',
      './app/javascript/**/*.js',
    ],
  },

  // All the default values will be compiled unless they are overridden below
  theme: {
    // Extend (add to) the default theme in the `extend` key
    extend: {
      // Create your own at: https://javisperez.github.io/tailwindcolorshades
      colors: {
        'primary': {
          DEFAULT: '#FF674C',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#FFF0E9',
          '300': '#FFCCB6',
          '400': '#FFA883',
          '500': '#FF8450',
          '600': '#FF601D',
          '700': '#E94500',
          '800': '#B63600',
          '900': '#832700',
        },
        'secondary': {
          DEFAULT: '#4CE4FF',
          '50': '#fdf9f9',
          '100': '#fdeef4',
          '200': '#fbcdea',
          '300': '#fba2d8',
          '400': '#fc67b9',
          '500': '#ff4f9a',
          '600': '#f8236e',
          '700': '#00b8d4',
          '800': '#b41741',
          '900': '#8f1433',
        },
        'tertiary': {
          DEFAULT: '#0E2773',
          '50': '#f3fafc',
          '100': '#dff7fa',
          '200': '#b7ecf5',
          '300': '#85dcf2',
          '400': '#42bded',
          '500': '#1b99e6',
          '600': '#1476d5',
          '700': '#175db1',
          '800': '#164782',
          '900': '#143964',
        },
        'danger': {
          50: '#FEF8F8',
          100: '#FEF2F2',
          200: '#FCDEDE',
          300: '#FACACA',
          400: '#F7A3A3',
          500: '#F37B7B',
          600: '#DB6F6F',
          700: '#924A4A',
          800: '#6D3737',
          900: '#492525',
        },
        "code-400": "#fefcf9",
        "code-600": "#3c455b",
        'cyan': colors.cyan,
        'indigo': colors.indigo,
        'orange-600': "#FF5D00"
      }
    },
    // override the default theme using the key directly
    fontFamily: {
      sans: [
        "Inter",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },
  },
  variants: {
    borderWidth: ['responsive', 'last', 'hover', 'focus'],
  },
}
