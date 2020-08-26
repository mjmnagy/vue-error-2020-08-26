const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  outputDir: 'dist',
  lintOnSave: false,
  css: {
    extract: true //false
  },
  configureWebpack: {
    devtool: 'source-map',
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
        ignoreOrder: false
      })
    ],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader']
        }
      ]
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname)
      }
    }
  }
}
