const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

const port = process.env.PORT || 3000

module.exports = {
  // Webpack configuration goes here

  mode: 'development',
  entry: './src/index.js',

  output: {
    filename: 'bundle[hash].js',
  },

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new MiniCssExtractPlugin(),
  ],
  devServer: {
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    open: true,
  },
}
