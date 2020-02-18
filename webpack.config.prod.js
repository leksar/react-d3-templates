const path = require('path');
module.exports = {
   mode: 'production',
   context: __dirname,
   entry: {
      index: './src/index.js'
   },
   output: {
      path: path.resolve(__dirname, 'lib'),
      filename: '[name].js',
      publicPath: '/',
      libraryTarget: 'commonjs2'
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
      'd3-selection',
      'd3-shape',
      'd3-scale',
      'd3-array',
      'd3-axis',
      'react',
      'react-dom'
   ]
};