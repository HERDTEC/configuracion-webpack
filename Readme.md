# Webpack

## Instalacion

`yarn add webpack -D`

> Comprobar instalacion de webpack ejecutar 
`yarn list webpack`
```bash
➜  WEBPACK  yarn list webpack
yarn list v1.3.2
warning Filtering by arguments is deprecated. Please use the pattern
 option instead.
└─ webpack@3.10.0
✨  Done in 0.38s.
➜  WEBPACK

```
###Configuracion para que podamos ejecutar tareas de webpack

1. En el archivo `package.json` ubicar el comando webpack.
  ```json
   "scripts":{
     "build:w": "webpack index.js bundle.js"
    }
  ```
2. Ejecutar la tarea con npm o yarn
  `yarn build:w`

## Configuracion de webpack



### Archivo webpack.config.js 
````js
module.exports ={
  entry: '',
  output: {
  } 
}
````

#### **Entrypoint**
````js
entry: './index.js',
````
#### **Otput**
````js
output: {
  filename: 'bundle.js' 
}
````
##### Configuracion de la tarea para ejecutar webpack considerando los parametros del archivo  webpack.config.js 
1. En el archivo `package.json` ubicar la tarea
````json
"scripts":{
  "build:w": "webpack index.js bundle.js",
  "build:wc": "webpack"
}
````
> Si el archivo esta localizado en otra ruta se debe especificar de la siguiente manera.`"build:wc": "webpack --config path/webpack.config.js "`
````json
"scripts":{
  "build:w": "webpack index.js bundle.js",
  "build:wcext": "webpack --config path/webpack.config.js "
}
```
> En el caso de tener archivos config de webpack, es recomendable usar la libreria path para obtener rutas relativas de mis archivos
````js
  const path = require ('path')
  module.exports ={
    entry: path.resolve(__dirname, './index.js'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    }
  }
````

#### **Loaders**

* Loaders para css
1. Instalar loaders

`yarn add style-loader css-loader -D`: Loaders para css
2. Colocar en una regla el tipo de archivo y el loader que tiene que procesarlo

```` js
 module: {
    rules: {
        // Aqui van los loaders
      // test: que tipo de archivo quiero reconocer,
      // use: que loader se va a encargar del archivo
       test: /\.css$/,
       use:['style-loader', 'css-loader']
    }
  }
````
> se hace uso de los loader sin necesidad de importar las librerias con require o import

#### **Plugins**

1. Instalar plugins

`yarn add extract-text-webpack-plugin -D`

2. `Importar plugin y declararlo en la seccion de plugins`

````js
  plugins:[
    // Detallar los plugins, se debe importar
    /**
     * Para que los archivos css sean procesados individualmente y tengan el mismo nombre que los archivos del entry point
     *  new ExtTextPlugin("css/[name].css")
     */
    new ExtTextPlugin("css/styles.css")
  ]
````
3. Usar el plugin en un loader.

````js
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
````

