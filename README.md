# Node.js DXC
####  **Operaciones con arrays [1,2,3,4,5 ]**

## Clone
Existen 2 ramas  la rama master es el proyecto hecho con *typescrip* y la rama *vanilla* es usando javascript de manera  nativa

después de hacer `$ git clone` debemos de pasarle 
 `$ npm install`
para que nos cree la carpeta
*node_modules* con las dependencias que necesitamos para el proyecto,
corremos el comando `$ tsc`  que nos creara una carpeta build  donde estará el javascript nativo de nuestro proyecto
con el comando `$ nodemon build/src/index.js` si tenemos el paquete o con `$ node  build/src/index.js`
esto nos abrira la aplicacion en el localhost puerto 4000 localhost:4000/



## Probar
esta api  solo acepta 2 métodos los cuales son post y get en la ruta ** /test**
con get recibe un array por url ejemplo [localhost:4000/test?array=[1,2,3,4,5]](http://localhost:4000/test?array=[1,2,3,4,5] "localhost:4000/test?array=[1,2,3,4,5]")
con post  el array  se manda por el  body  en texto plano ejemplo: [1,2,3,4,5]
[![post request](post "post request")](http://img.fenixzone.net/i/HiSsFEW.png "post request")
[![get request](get "get request")](http://img.fenixzone.net/i/RfUOHFs.png "get request")

## Testing con jest.js
en la carpeta de `__test__ ` tenemos los script de testing para este proyecto utilice
jest podemos correr con  el comando `$ jest` y el script o directamente `$ npm t`

index.test.js hace test a  el index y response.test.js a las funciones de  operaciones

nota: la línea de export a el final de */network/response.j*s está comentada para el funcionamiento pero se
debe de descomentar para el testing

## Seguridad
además de validar los tipos de datos le damos un extra de seguridad a express con helmet

