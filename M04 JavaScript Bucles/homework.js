/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function obtenerMayor(x, y) {
   if (x > y) return (x);
   else if (y > x) return (y);
   else if (x === y) return (x || y)
   // "x" e "y" son números enteros.
   // Retornar el número más grande.
   // Si son iguales, retornar cualquiera de los dos.
   // Tu código:
}

function mayoriaDeEdad(edad) {
   if (edad >= 18) return ("Allowed");
   else return ("Not allowed")
   
   // Determinar si la persona puede ingresar al evento según su edad.
   // Si tiene 18 años ó más debe retornar el string: "Allowed".
   // Caso contrario: "Not allowed".
   // Tu código:
}

function conection(status) {
   if (status === 1) return ("Online");
   else if (status === 2) return ("Away");
   else if (status != 1 || 2) return("Offline");
   
   // El argumento "status" representa el estado de conexión de un usuario.
   // Si el estado es igual a 1, el usuario está "Online".
   // Si el estado es igual a 2, el usuario está "Away".
   // De lo contrario, presumimos que el usuario está "Offline".
   // Retornar el estado de conexión del usuario.
   // Tu código:
}

function saludo(idioma) {
   if (idioma === "aleman") return ("Guten Tag!");
   else if (idioma === "mandarin") return ("Ni Hao!");
   else if (idioma ==="ingles") return ("Hello!");
   else if (idioma != "aleman" || "mandarin" || "ingles") return ("Hola!");

   // Retornar un saludo en tres diferentes lenguajes:
   // Si "idioma" es "aleman", devuelve "Guten Tag!".
   // Si "idioma" es "mandarin", devuelve "Ni Hao!".
   // Si "idioma" es "ingles", devuelve "Hello!".
   // Si "idioma" no es ninguno de los anteriores o es `undefined` devuelve "Hola!".
   // Tu código:
}

function colors(color) {
   switch (color) {
      case "blue": return ("This is blue"); break;
      case "red": return ("This is red"); break;
      case "green": return ("This is green"); break;
      case "orange": return ("This is orange"); break;
      default: return ("Color not found");

   }
   // La función recibe un color. Retornar el string correspondiente:
   // En caso que el color recibido sea "blue"   --> "This is blue".
   // En caso que el color recibido sea "red"    --> "This is red".
   // En caso que el color recibido sea "green"  --> "This is green".
   // En caso que el color recibido sea "orange" --> "This is orange".
   // Si no es ninguno de esos colores           --> "Color not found".
   // IMPORTANTE: utilizar el statement SWITCH.
   // Tu código:
}

function esDiezOCinco(num) {
   if (num === 10 || num === 5) return (true);
   else return (false);
   // Retornar true si "num" es 10 o 5.
   // De lo contrario, retornar false.
   // Tu código:
}

function estaEnRango(num) {
   if ((num < 50) && (num > 20)) return (true);
   else return (false)
   // Retornar true si "num" es menor que 50 y mayor que 20.
   // De lo contrario, retornar false.
   // Tu código:
}

function esEntero(num) {
   if ((num % 2 === 0 || num % 2 === 1 || num % 2 ===  -1 || num % 2 === -0 )) return (true);
else return (false)
   // Retornar true si "num" es un entero, ya sea positivo, negativo o cero.
   // Ejemplo: 0.8   ---> false
   // Ejemplo: 1     ---> true
   // Ejemplo: (-10) ---> true
   // De lo contrario, retorna false.
   // Tu código:
}

function fizzBuzz(num) {
if ((num % 3 === 0) && (num % 5 === 0)) return ("fizzbuzz");
else if (num % 3 === 0) return ("fizz");
else if (num % 5 === 0) return ("buzz");
else return (false);

   // Si "num" es divisible entre 3, retorna "fizz".
   // Si "num" es divisible entre 5, retorna "buzz".
   // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
   // De lo contrario, retorna false.
   // Tu código:
}

function operadoresLogicos(num1, num2, num3) {
   if ((num1 > num2) && (num1 > num3) && (num1 > 0)) return ("Numero 1 es mayor y positivo");
   else if (num1 < 0 || num2 < 0 || num3 < 0) return ("Hay negativos");
   
   else if (num1 < num3 && num2 < num3)
      return (num3 + 1); 
   
   
   
   else if ((num1 === 0) && (num2 === 0) && (num3 === 0)) return ("Error");
   else return (false);
   // La función recibe tres números distintos.
   // Si num1 es mayor a num2 y a num3, y además es positivo, retornar ---> "Numero 1 es mayor y positivo".
   // Si alguno de los tres números es negativo, retornar ---> "Hay negativos".
   // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
   // Si todos los argumentos son cero, retornar ---> "Error".
   // Si no se cumple ninguna de las condiciones anteriores, retornar false.
   // Tu código:
}

function esPrimo(num) {
   if ((num > 1) && (num % 2 === 1) && !(num % 3 === 0) && !(num % 5 === 0) 
|| num === 2 || num === 3 || num ===5)
return (true);
else return (false);
   // Retornar true si "num" es primo.
   // De lo contrario retorna false.
   // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
   // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
   // [Nota]: los números negativos, 0 y 1 NO son números primos.
   // Tu código:
}

function esVerdadero(valor) {
   if (! valor) return ("Soy falso");
   else return ("Soy verdadero");

   // Si "valor" es verdadero retornar "Soy verdadero".
   // Caso contrario, retornar "Soy falso".
   // Tu código:
}

function tieneTresDigitos(num) {
   if (num >99 && num < 1000) return (true)
   else return (false);
   // Si el número recibido tiene tres dígitos retornar true.
   // Caso contrario, retornar false.
   // Tu código:
}

function doWhile(num) {
   let i= 0;
   do {
      i= i + 1;
      num = num + 5;
    } while (i < 8);
    
    return (num);
   // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
   // Retornar el valor final.
   // Utilizar el bucle Do-While.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   obtenerMayor,
   mayoriaDeEdad,
   conection,
   saludo,
   colors,
   esDiezOCinco,
   estaEnRango,
   esEntero,
   fizzBuzz,
   operadoresLogicos,
   esPrimo,
   esVerdadero,
   tieneTresDigitos,
   doWhile,
};
