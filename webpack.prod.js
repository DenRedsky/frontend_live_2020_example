const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CheckDuplicatePlugin = require('duplicate-package-checker-webpack-plugin');
const MiniCss = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  output: {
    filename: 'js/[name].[contenthash].js',
    /** https://github.com/johnagan/clean-webpack-plugin/issues/194 */
    path: path.resolve('dist')
  },
  resolve: {
    alias: {
      'cssConstants': path.resolve('src', 'constants.styl')
    },
    modules: ['node_modules'],
    extensions: ['.jsx', '.js', '.styl']
  },
  devtool: false,
  stats: {
    all: false,
    timings: true,
    assets: true,
    assetsSort: 'size',
    errors: true,
    colors: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        include: /src/
      },
      {
        test: /\.styl$/,
        use: [
          MiniCss.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[hash:base64:5]'
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
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      minChunks: 2,
      chunks: 'all'
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve('src', 'index.html'),
      minify: true
    }),
    new MiniCss({ filename: 'css/[name].css' }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/,
      cssProcessorOptions: {
        zindex: false,
        discardComments: { removeAll: true }
      }
    }),
    new CheckDuplicatePlugin({ emitError: true })
  ]
};
