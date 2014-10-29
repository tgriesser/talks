// webpack.config.js

module.exports = {
  entry: {
    index: __dirname + '/presentation/index.jsx'
  },
  output: {
    path: __dirname + '/assets/js/',
    publicPath: './assets',
    filename: '[name].js',
    sourceMapFilename: '[file].map'
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'jsx-loader' },
      { test: /\.(png|jpg|ttf|woff|svg|otf|eot|svg).*?$/, loader: "file-loader" },
      { test: /\.txt$/, loader: "raw-loader" }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx']
  }
};