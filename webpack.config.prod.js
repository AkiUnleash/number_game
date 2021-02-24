const path = require('path')
const CleanPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const globule = require("globule");
const CopyPlugin = require("copy-webpack-plugin");

const app = {
  mode: 'production',
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /.(css|scss|sass)$/,
        use: [
          { loader: MiniCssExtractPlugin.loader, },
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          { loader: 'sass-loader' }
        ],
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
      {
        test: /\.(woff|jpg|png|mp3)$/,
        type: "asset/inline",
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new CleanPlugin.CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles/styles.css'
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