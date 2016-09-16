module.exports = {
  entry: "./lib/little_bo_peep.js",
  output: {
  	filename: "./lib/bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.js?$/],
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ["", ".js", ".jsx", ".css" ]
  }
};
