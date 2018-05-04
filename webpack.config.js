const path = require('path');

module.exports = {
  mode: 'none', /* production | development | none */
  entry: './js/index.js', /* string | object | array - entering files */
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
      test: /\.js$/, /* check all js files */
      exclude: /node_modules/, /* ignore all files in folder node_modules */
      enforce: 'pre', /* loader | pre | post */
      use: 'eslint-loader',
    },
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: { /* can be array for several loaders */
        loader: 'babel-loader',
        options: {
          presets: ['es2015'], /* end dd presets in .babelrc */
        },
      },
    },
    {
      test: /\.scss$/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
      }, {
        loader: 'sass-loader',
        options: {
          includePaths: ['absolute/path/a', 'absolute/path/b'],
        },
      }],
  }],
  },
};
