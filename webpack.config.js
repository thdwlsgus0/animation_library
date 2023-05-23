const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: "./study/app.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve("./dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [path.resolve("./study/myloader.js")],
      },
      {
        test: /\.css$/,
        use: ["css-loader"],
      },
    ],
  },
};
