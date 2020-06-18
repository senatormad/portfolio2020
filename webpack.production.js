const path = require('path');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].[contentHash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
        extractComments: false,
      }),
      new HtmlWebpackPlugin({
        template: './public/index.html',
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true,
        },
      }),
      new PreloadWebpackPlugin({
        rel: 'preload',
        include: 'allAssets',
        fileBlacklist: [/\.css/, /\.js/, /\.ttf/, /\.woff$/, /\.txt/],
      }),
    ],
    splitChunks: {
      chunks: 'initial',
      cacheGroups: {
        default: false,
        reactDom: {
          test: /[\\/]node_modules[\\/]react-dom[\\/]/,
          name: 'vendor.react-dom',
          enforce: true,
          priority: 20,
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          priority: 10,
        },
      },
    },
  },
  plugins: [
    new CompressionPlugin({
      test: /\.(js|css)$/,
      deleteOriginalAssets: true,
    }),
    new MiniCssExtractPlugin({ filename: '[name].[contentHash].css' }),
    new CopyPlugin({
      patterns: [
        {
          from: 'public/manifest.json',
        },
        {
          from: 'public/robots.txt',
        },
      ],
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // 3. Extract css into files
          'css-loader', // 2. Turns css into commonjs
          'sass-loader', // 1. Turns sass into css
        ],
      },
    ],
  },
});
