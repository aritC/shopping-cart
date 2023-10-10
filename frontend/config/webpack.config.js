let path = require("path"), //path module of node framework
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  config = {
    output: {
      path: path.join(__dirname, "/dist"), //dist - distribution
      filename: "index.bundle.js",
      publicPath: "/",
    },
    // webpack 5 comes with devServer which loads in development mode
    //api/helloworld >>>
    devServer: {
      port: 3000,
      historyApiFallback: true, //localhost:3000/user
    },
    // Rules of how webpack will take our files, complie & bundle them for the browser
    module: {
      rules: [
        {
          test: /\.js$|jsx/,
          exclude: /nodeModules/,
          use: {
            loader: "babel-loader",
            options: {
              configFile: path.resolve(__dirname, ".babelrc"),
            },
          },
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|svg|jpe?g|gif)$/i,
          type: "file-loader",
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "../src", "index.html"),
      }),
    ],
  };

module.exports = config;
