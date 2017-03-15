var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: './src/components/main.jsx'

/* {
    bundle:'./src/components/main.jsx',
    vendor:'react'
  }*/,
  output: { path: __dirname, filename: '/build/bundle.js' },
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
  devServer: {
    hot: true,
    inline:true
  },

  watch:true,
  devtool:'eval',

  /*
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

*/
};