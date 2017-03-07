const path = require('path');

module.exports = {
  entry: [
    './src/index.js',
  ],
  settings: {
    'import/resolver': {
      webpack: 'webpack.config.js',
    },
  },
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1'],
      },
    }],
  },
  resolve: {
    root: path.resolve(__dirname),
    alias: {
      test: 'test',
    },
    extensions: ['', '.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
  },
};
