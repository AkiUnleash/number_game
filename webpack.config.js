const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /.(css|scss|sass)$/,
        use: [
          {
            // minifiy
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'sass-loader'
          }
        ],
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        // 対象となるファイルの拡張子
        test: /\.(woff|png|jpg|mp3)$/,
        // 画像をBase64として取り込む
        type: "asset/inline",
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  devServer: {
    publicPath: "dist",
    open: true,
    port: 3000
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/style.css'
    }),
  ]
};