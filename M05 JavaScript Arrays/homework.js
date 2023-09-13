/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   return array[0];
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
}

function devolverUltimoElemento(array) {
   return (array[array.length - 1]);
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
}

function obtenerLargoDelArray(array) {

   return ( array.length);
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
}

function incrementarPorUno(array) {
   return (array.map( (num) =>
   { return num +1 } ));
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
}

function agregarItemAlFinalDelArray(array, elemento) {
   array.push(elemento);
   return (array);
   
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
}

function agregarItemAlComienzoDelArray(array, elemento) {
   array.unshift(elemento);
   return array;


   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
}

function dePalabrasAFrase(palabras) {
   return (palabras.join(' '));
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
}

function arrayContiene(array, elemento) {

   if (array.includes(elemento)) return (true);
   else return (false);
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
}

function agregarNumeros(arrayOfNums) {
   suma = 0;
   for (var i = 0; i <arrayOfNums.length; i++){
      suma = suma + arrayOfNums [i]
   }
   return (suma);
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
}

function promedioResultadosTest(resultadosTest) {
   suma = 0;
   for (var i = 0; i <resultadosTest.length ; i++){
      suma = suma + resultadosTest [i]
   }
   return (suma/resultadosTest.length);
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
}
 
function numeroMasGrande(arrayOfNums) {

var  numMayor = arrayOfNums[0];
arrayOfNums.forEach((num) =>  {
   if (num > numMayor) {
      numMayor = num;
   } 
}
);
return numMayor; 
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
} 

function multiplicarArgumentos() {

   if (arguments.length === 0) {
   return 0; }    
else if ( arguments.length === 1) {
 return arguments[0];}
else {
var multiFinal = 1;
for ( var i = 0; i < arguments.length; i++) {
   multiFinal = multiFinal * arguments[i];
}
return (multiFinal);
 }
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
}

function cuentoElementos(array) {
   var total = [];
   array.forEach(num => {
      if (num > 18) {
         total.push (num);
      }
   })
    return (total.length);
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
}

function diaDeLaSemana(numeroDeDia) {
   if ((numeroDeDia === 7) || (numeroDeDia ===1)) {
 return ('Es fin de semana');}
else if ((numeroDeDia > 1 && numeroDeDia < 7)) {

return ('Es dia laboral');}



   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
}

function empiezaConNueve(num) {
   var primerDigitoEsNueve = [];
   primerDigitoEsNueve.push(num);
   numPasaString = primerDigitoEsNueve.join('');
   digitosSeparados = numPasaString.split('');
   if (digitosSeparados[0] === '9') {
      return (true);
   } else {return (false);
   }


   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
}

function todosIguales(array) {
   var sonIguales = array[0];
var cumplenCondicion = array.every( ( num ) => { return (num / 1) === sonIguales } );

return (cumplenCondicion);
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
}

function mesesDelAño(array) {

   var tresMeses = [];
array.forEach (value => {
   if (value === 'Enero') {
      tresMeses.push(value);
} else if (value === 'Marzo') {
   tresMeses.push(value);
} else if (value === 'Noviembre') {
   tresMeses.push(value);

}}
)

if (tresMeses.length === 3) {
   return (tresMeses);
} else return ('No se encontraron los meses pedidos');

   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
}

function tablaDelSeis() {

   var mul= -6;
   var tablaSix = [];
   for ( var i = 0; i < 11; i++) {
      tablaSix.push (mul = mul + 6);
   }

   return tablaSix; 
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
}

function mayorACien(array) {
   var superiorACien =[];
   array.forEach(element => {
      if ((element > 100) && (element <=200)) {
         superiorACien.push(element);
      } 
      
   });
   return superiorACien;
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   var arregloNuevo =[]; 
   for (var i=0; i < 10; i++) {
      if ( (num = num +2) === i) break; 
      arregloNuevo.push (num);
      
   }
   if (arregloNuevo.length < 10) return ("Se interrumpió la ejecución");
   else return (arregloNuevo);


   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
}

function continueStatement(num) {

   var arregloContinue =[];
   
          for (var i=0; i < 10; i++) {
          if (i  === 5)  {continue}
          arregloContinue.push(num = num +2);
           }

   return (arregloContinue);  
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
