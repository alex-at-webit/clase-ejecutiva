var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: {
    bundle:'./src/Components/main.jsx',
    vendor:'react'
  },
  output: { path: __dirname + '/build/', filename: '[name].js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool:'cheap-module-source-map',
  watch:true,
  plugins: [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),

   new webpack.optimize.CommonsChunkPlugin({
                names: ['vendor'] // Specify the common bundle's name.
            })
], 
};