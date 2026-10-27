const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const htmlPages = require('./webpack.pages.js')

module.exports = {
  entry: {
    index: './src/javascripts/index.jsx'
  },
  output: {
    filename: 'assets/js/[name].[contenthash].js',
    path: path.resolve(__dirname, '../docs'),
    publicPath: 'auto',
    clean: true
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|webp|avif)$/i,
        type: 'asset/resource',
        generator: { filename: 'assets/images/[name][contenthash][ext][query]' }
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        type: 'asset/resource',
        generator: { filename: 'assets/fonts/[name][contenthash][ext][query]' }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'assets/css/[name].[contenthash].css' }),
    ...htmlPages
  ]
}
