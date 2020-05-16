const withBundleAnalyzer = require('@zeit/next-bundle-analyzer')
const withOptimizedImages = require('next-optimized-images');

const nextConfig = {
  /** next-optimized-images config */
  inlineImageLimit: 8192,
  imagesFolder: 'images',
  imagesName: '[name]-[hash].[ext]',
  handleImages: ['png','jpg'],
  optimizeImagesInDev: true,
  
  /** next-bundle-analyzer config */
  analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'static',
      reportFilename: '../bundles/server.html'
    },
    browser: {
      analyzerMode: 'static',
      reportFilename: '../bundles/client.html'
    }
  },
  webpack (config) {
    return config
  }
}

module.exports = withBundleAnalyzer(withOptimizedImages(nextConfig))