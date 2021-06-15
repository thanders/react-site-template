
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: "/src/index.js",
  output: { path: path.resolve(__dirname, "dist") },
  module: {
    rules: [
        {
            test: /\.js$/,
            enforce: "pre",
            use: ["source-map-loader"],
          },
        {
            test: /\.css$/i,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                    modules: true,
                    }
                }
            ],
        },
        {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            },
        },
        },
    ],
  },
  plugins: [
      new HtmlWebpackPlugin({template: "./src/index.html"}),
      new MiniCssExtractPlugin()
    ],
};