# nodejsDXC
operaciones con arrays  



despues de hacer git clone debemos de pasarle el npm install para que nos cre la carpeta
node_modules con las dependencias que nesesitamos para el proyecto,
corremos con el comando nodemon si tenemos el paquete o con node  index.js 
esto nos abrira la aplicacion en el localhost puerto 4000 localhost:4000/ 

## probar
esta api  solo acepta 2 metodos los cuales son post y get en  /test
con get resive un array por url ejemplo localhost:4000/test?array=[1,2,3,4,5] 
con post  el array  se manda por el  body  en texto plano ejempolo [1,2,3,4,5]



## testing con jest
en la carpeta de `__test__ ` tenemos los script de testing para este proyecto utilise 
jest podemos correr con  el comando jest y el script o directamente npm t

index.test.js hace test a  el index y response.test.js a las funciones de  operaciones

nota: la linea de export a el final de /network/response.js esta comentada para el funcionamiento pero se
debe de descomentar para el testing
