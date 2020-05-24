module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'development' ? false : true,
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
