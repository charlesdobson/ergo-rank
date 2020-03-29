const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

module.exports = {
  entry: ['react-hot-loader/patch', './src/index.js'],
  devtool: '',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'less-loader',
            options: {
              modifyVars: {
                'primary-color': '#10ac84',
                'link-color': '#636b79',
                'radio-button-bg': 'transparent',
                'border-radius-base': '2px',
                'border-color-base': '#8395a7',
                'font-size-base': '16px',
                'radio-size': '18px'
              },
              javascriptEnabled: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      'node_modules',
      path.join(__dirname, 'public')
    ],
    alias: {
      src: path.resolve(__dirname, 'src'),
      public: path.resolve(__dirname, 'public')
    }
  },
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js',
    globalObject: 'this'
  },
  devServer: {
    contentBase: './build',
    port: 3000
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve('./public/index.html'),
      favicon: './public/favicon.ico'
    })
    // new StaticSiteGeneratorPlugin({
    //   global: {
    //     window: {}
    //   },
    //   crawl: true
    // })
  ]
};
