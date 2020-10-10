module.exports = {
  resolve: {
    extensions: [".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              formatter: require("eslint/lib/formatters/stylish")
            }
          }
        ]
      }
    ]
  }
}