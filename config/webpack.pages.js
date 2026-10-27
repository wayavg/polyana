const HtmlWebpackPlugin = require('html-webpack-plugin')

// Только главная. Реальные страницы добавим по утверждённым макетам.
module.exports = [
  new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    chunks: ['index']
  })
]
