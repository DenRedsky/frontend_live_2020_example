const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');
const CheckDuplicatePlugin = require('duplicate-package-checker-webpack-plugin');
const { UnusedFilesWebpackPlugin } = require('unused-files-webpack-plugin');
const MiniCss = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: {
    app: path.resolve('src', 'index.jsx')
  },
  output: {
    filename: 'js/[name].[chunkhash].js',
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
    assets: true,
    colors: true,
    errors: true,
    errorDetails: true,
    modules: false,
    performance: true,
    hash: false,
    version: false,
    timings: true,
    warnings: true,
    children: false
  },
  performance: {
    hints: false
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader?cacheDirectory',
        exclude: /node_modules/
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
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer()]
            }
          },
          'stylus-loader'
        ],
        exclude: /node_modules/
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
    new CheckDuplicatePlugin({ emitError: true }),
    new UnusedFilesWebpackPlugin({ patterns: ['src/**/*.*'], failOnUnused: true })
  ]
};
