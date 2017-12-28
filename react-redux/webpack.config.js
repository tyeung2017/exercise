var path = require('path');

var BUILD_DIR = path.join(__dirname, 'client', 'public');
var APP_DIR = path.join(__dirname, 'client', 'app');

var config = {
  entry: path.join(APP_DIR, 'index.js'),
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader',
      },
    ],
  },
};

module.exports = config;
