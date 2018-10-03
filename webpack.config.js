const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const minimizeJsPlugin = new UglifyJsPlugin({
  cache: true,
  parallel: true,
  sourceMap: process.env.NODE_ENV !== 'production' // set to true if you want JS source maps
});
const minimizeCssPlugin = new OptimizeCSSAssetsPlugin({});
const htmlPlugin = new HtmlWebpackPlugin({
  template: './src/index.html'
});
const cssExtractPlugin = new MiniCssExtractPlugin({
  filename: 'css/app.css'
});
const environmentPlugin = new webpack.EnvironmentPlugin({
  NODE_ENV: JSON.stringify(process.env.NODE_ENV)
});

module.exports = {
  optimization: {
    minimizer: [
      minimizeJsPlugin,
      minimizeCssPlugin
    ]
  },
  mode: process.env.NODE_ENV,
  entry: [
    './src/app/app.js',
    './src/styles/app.less',
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/app.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'src/app')
        ],
        exclude: [path.resolve(__dirname, 'node_modules')],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env', 'react'],
              plugins: ['transform-object-rest-spread']
            }
          }
        ],
      },
      {
        test: /\.(less|css)/,
        include: [path.resolve(__dirname, 'src/styles')],
        exclude: [path.resolve(__dirname, 'node_modules')],
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader'
        ]
      }
    ],
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src/app')
    ],
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      'app': path.resolve(__dirname, 'src/app'),
    },
  },
  devtool: 'source-map',
  context: __dirname,
  target: 'web',
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true
  },
  plugins: [htmlPlugin, cssExtractPlugin, environmentPlugin]
};
