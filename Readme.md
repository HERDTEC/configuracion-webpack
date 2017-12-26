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

