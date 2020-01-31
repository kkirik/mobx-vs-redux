const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const root = process.cwd();

const config = {
  mode: 'development',
  watch: true,

  entry: {
    app: path.join(root, 'src/client.tsx'),
  },

  output: {
    path: path.join(__dirname, 'assets'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name].js',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: [root, path.resolve(root, 'src'), 'node_modules'],
  },

  module: {
    rules: [
      {
        test: /\.(tsx?)$/,
        loader: 'babel-loader',
        include: [path.resolve(__dirname, 'src')],
      },
    ],
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          mangle: false,
          output: {
            beautify: true,
          },
        },
      }),
    ],
  },
};

module.exports = config;
