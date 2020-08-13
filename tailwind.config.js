module.exports = {
  purge: {
    mode: 'all',
    content: [
      './public/**/*.html',
    ],
  },
  theme: {
    fontFamily: {
      'sans': 'Public Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
    },
    extend: {
      colors: {
        cyan: {
          '500': '#23C0F5',
          '600': '#0BB7F1',
          '700': '#0AA5D9',
        },
        gray: {
          '100': '#F4F6F8',
          '300': '#C4CDD5',
          '700': '#6A7C92',
          '900': '#454F5B',
        }
      },
    },
  },
  variants: {},
  plugins: [],
}