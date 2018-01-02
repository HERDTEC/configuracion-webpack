const path = require ('path')
const ExtTextPlugin = require('extract-text-webpack-plugin')

module.exports ={
  entry: {
    index: path.resolve(__dirname, './src/js/index.js'),
    contacto: path.resolve(__dirname, './src/js/contacto.js'),
    precio: path.resolve(__dirname, './src/js/precio.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8080
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
      },
      //loader para babel
      {
        test: /\.js$/,
        use:{
          loader: 'babel-loader',
          options: {
            presets: ['es2015','es2016', 'es2017']
          }
        }
      }
    ]
  },
  plugins:[
    // Detallar los plugins, se debe importar
    /**
     * Para que los archivos css sean procesados individualmente y tengan el mismo nombre nombre que los archivos del entry point
     *  new ExtTextPlugin("css/[name].css")
     */
    new ExtTextPlugin("css/[name].css")
  ]
}