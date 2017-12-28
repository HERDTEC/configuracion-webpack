const path = require ('path')
const ExtTextPlugin = require('extract-text-webpack-plugin')
module.exports ={
  entry: path.resolve(__dirname, './index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        /*******
         *  Aqui van los loaders
          test: que tipo de archivo quiero reconocer,
          use: que loader se va a encargar del archivo
        */
        test: /\.css$/,
        use: ExtTextPlugin.extract({
            //['style-loader', 'css-loader']
            fallback: 'style-loader',
            use: "css-loader"
        })
      }
    ]
  },
  plugins:[
    // Detallar los plugins, se debe importar
    /**
     * Para que los archivos css sean procesados individualmente y tengan el mismo nombre nombre que los archivos del entry point
     *  new ExtTextPlugin("css/[name].css")
     */
    new ExtTextPlugin("css/styles.css")
  ]
}