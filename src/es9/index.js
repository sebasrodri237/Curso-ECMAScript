// CLASE 9 ES9 Operador de reposo/ propagacion, desestructuración//

const obj = {

    name: 'sebastian',
    age: 25,
    country: 'CO'
}

let {name, ...all} = obj;
console.log(name, all);
//Traigo el nombre y todo lo demas: sebastian {age :25, country: 'CO}
let {country, ...all} = obj;
console.log(all);
//Traigo todo lo demas sin country:  {name: 'sebastian' age :25,}

const objTwo = {

    name: 'sebastian',
    age: 25
}
const objThree = {

    ...objTwo,
    country: 'CO'
}
console.log(objThree);
//Desestructurar un objeto en otro

const helloWorld = () => {
    return new Promise((resolve, reject) =>{
        (true)
        ? resolve('Hello World')
        : reject(new Error('Test Error'))
    });
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'))
    //Uso de finally que ejecuta una funcion solo hasta que se ha finlizado
    //resuleto la promesa.

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2020-06-08');
const year = match[1];
const month = match[2];
const day = match[3];
console.log(year, month, day);
//Mejoras en trabajo con expresiones regular, 
//generando bloques,agruparlos y acceder a ellos
// FIN CLASE 9//