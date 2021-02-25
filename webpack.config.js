const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const globule = require("globule");
const CopyPlugin = require("copy-webpack-plugin");

const app = {
  mode: 'development',
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: path.resolve(__dirname, 'dist'),
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
      {
        // Pug File
        test: /\.pug/,
        use: [
          {
            loader: "html-loader",
          },
          {
            loader: "pug-html-loader",
            options: {
              pretty: true,
            },
          },
        ],
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    openPage: "index.html",
    open: true,
    port: 3000
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/style.css'
    }),
    // Faviconをdistへコピー
    new CopyPlugin({
      patterns: [{
        from: "*",
        to: "",
        context: "src/assets/images/icon/"
      }],
    }
    )
  ]
};

// pubファイルの配列挿入
const templates = globule.find("./src/templates/**/*.pug", {
  ignore: [
    // private ignore
    "./src/templates/**/_*.pug",
  ],
});

// 配列分のHtmlWebpackPluginを挿入
templates.forEach((template) => {
  const fileName = template
    .replace("./src/templates/", "")
    .replace(".pug", ".html");
  app.plugins.push(
    new HtmlWebpackPlugin({
      filename: `${fileName}`,
      template: template,
    })
  );
});
module.exports = app;