/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
    cssnano: {
      preset: 'advanced',
    },
  },
}

export default config
