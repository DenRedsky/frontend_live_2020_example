const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  /** output path 'dist' является таковым по умолчанию, можно не писать,
   * но из за https://github.com/johnagan/clean-webpack-plugin/issues/194 - вынужден это оставить */
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
    contentBase: path.resolve('dist'),
    historyApiFallback: true,
    stats: {
      all: false,
      timings: true,
      assets: true,
      assetsSort: 'size',
      errors: true,
      colors: true
    },
    port: 3000
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
      template: path.resolve('src', 'index.html')
    })
  ]
};
