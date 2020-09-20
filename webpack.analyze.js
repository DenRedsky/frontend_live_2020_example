const config = require('./webpack.prod');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  ...config,
  plugins: [
    ...config.plugins,
    new BundleAnalyzerPlugin()
  ]
};
