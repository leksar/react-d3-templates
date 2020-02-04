const path = require('path');
module.exports = {
   context: __dirname,
   entry: {
      index: './src/index.js'
   },
   output: {
      path: path.resolve(__dirname, 'lib'),
      filename: '[name].js',
      publicPath: '/',
   },
   devServer: {
      historyApiFallback: true
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            use: 'babel-loader',
         },
         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
         },
         {
            test: /\.(png|j?g|svg|gif)?$/,
            use: 'file-loader'
         }
      ]
   },
   externals: [
      'd3',
      'react',
      'react-dom'
   ]
};