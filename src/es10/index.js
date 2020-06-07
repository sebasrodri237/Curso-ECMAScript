// CLASE 10 ES10 //
let array = [1,2,3, [1,2,3, [1,2,3]]];
array.flat(2);
console.log(array)
console.log(array.flat(2));
//Nos entrega una matriz aplanada de mi matriz con subniveles//
//recibe como argumento la profundidad//

let arrayTwo = [1,2,3,4,5];

console.log(arrayTwo.flatMap(value => [value, value*2]));
//Mapea cada elemento, le pasa una funcion y lo aplana

let hello = '          hello world      ';
console.log(hello.trimStart())
console.log(hello.trimEnd())
//Eliminar espacio en blanco de strings

let entries = [["name", "sebastian"], ["age", 32]];
console.log(Object.fromEntries(entries));
//Pasar arreglo a objeto clave valor
// FIN CLASE 10//