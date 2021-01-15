const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  /** https://github.com/webpack/webpack-dev-server/issues/2758 */
  target: 'web',
  /** https://github.com/johnagan/clean-webpack-plugin/issues/194 */
  output: {
    path: path.resolve('dist')
  },
  resolve: {
    alias: {
      'cssConstants': path.resolve('src', 'constants.styl')
    },
    modules: ['node_modules'],
    extensions: ['.jsx', '.js', '.styl']
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    port: 3000,
    stats: {
      all: false,
      timings: true,
      assets: true,
      assetsSort: 'size',
      errors: true,
      colors: true
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        },
        include: /src/
      },
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]-[hash:base64:5]'
              }
            }
          },
          'postcss-loader',
          'stylus-loader'
        ],
        include: /src/
      },
      {
        test: /\.svg$/i,
        type: 'asset',
        include: /src/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve('src', 'index.html'),
      scriptLoading: 'defer'
    })
  ]
};
