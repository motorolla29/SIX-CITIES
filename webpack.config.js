const path = require(`path`);

module.exports = {
  mode: `development`,
  entry: `./src/index.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `build`),
  },
  devServer: {
    static: { directory: path.join(__dirname, `public`) },
    historyApiFallback: true,
    compress: false,
    open: true,
    port: 1337,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|ico)$/,
        use: {
          loader: "file-loader",
        },
      },

      {
        test: /\.(ttf|otf|eot|woff|woff2)$/,
        use: {
          loader: "file-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".jsx", ".ts", ".js", ".css"],
  },
  devtool: `source-map`,
};
