// CLASE 7 Implementaciones en ES8 //

const data = {

    frontend: 'sebastian',
    backend: 'Jorge',
    design: 'santiago'
}

const entries = Object.entries(data);
// Devolver claves y valores de un objeto/array asociativo en forma de matriz

console.log(entries);

console.log(entries.length);
//Conocer cuantos elementos contiene un objeto

const values = Object.values(data);
// Devolver solamente valores de un objeto/array asociativo en forma de array
console.log(values);

const string = 'hello';
console.log(string.padStart(7,'hi'));
console.log(string.padEnd(12,'-------'));
//Agregar caracteres al inicio/final de un string indicando el numero maximo
//de caracteres que tendra el string y la cadena que deseamos agregar
// FIN CLASE 7//