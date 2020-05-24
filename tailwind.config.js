module.exports = {
  purge: {
    enabled: true,
    content: [
      './pages/*.js',
      './src/containers/**/*.js',
      './src/containers/**/**/*.js'
    ],
  },
  theme: {
    extend: {
      spacing: {
        '2px': '2px',
      },
    },
  },
}
