const path = require('path');

module.exports = {
  mode: 'production',
  entry: './javascripts/index.js',
  output: {
    filename: 'application.js',
    path: path.resolve(__dirname, 'assets'),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      }
    ]
  }
};
