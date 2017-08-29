const webpack = require('webpack')
const path    = require('path')

module.exports = {
  entry    : {
    'bundle': './src/react-waterfall-layout/index.js'
  },
  output   : {
    path         : path.resolve(__dirname, './dist'),
    library      : 'react-waterfall-layout',
    libraryTarget: 'umd',
    filename     : 'bundle.js'
  },
  externals: [
    {
      react: {
        root     : 'React',
        commonjs2: 'react',
        commonjs : 'react',
        amd      : 'react'
      }
    },
    {
      'react-dom': {
        root     : 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs : 'react-dom',
        amd      : 'react-dom'
      }
    }, {
      'prop-types': {
        root     : 'PropTypes',
        commonjs2: 'prop-types',
        commonjs : 'prop-types',
        amd      : 'prop-types'
      }
    }
  ],
  module   : {
    rules: [
      {
        test   : /\.(jsx|js)$/,
        use    : [
          {
            loader: 'babel-loader'
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use : [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(jpg|png)$/,
        use : [
          'url-loader'
        ]
      }
    ]
  },
  plugins  : [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings    : false,
        drop_console: false
      }
    })
  ]
}