// CLASE 2 INICIO Default Params //
//Como se hacia antes de ECS6
function newFunction(name, age, country){

    var name = name || 'sebastian';
    var age = age || 25;
    var country = country || 'CO';
    console.log(name, age, country);
}

//Con ECS6

function newFunctionTwo(name = 'sebastian', age = 25, country = "CO"){

    console.log(name, age, country);
}
//Primera forma de invocar la función, aqui trabajara con los valores dados
newFunctionTwo();
//Segunda forma de invocar la función, aqui podemos enviarle parametros
newFunctionTwo('Santiago', 25, "CO");
// FIN Default Params //

// INICIO CONCATENACIÓN `con Template Literal ``//
//Como se hacia antes de ECS6
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' '+world;

//Con ECS6

let epicPhraseTwo = `${hello} ${world}`;
console.log(epicPhraseTwo);

// FIN CLASE 2//

// CLASE 3 INICIO Multilinea. Desestructuración. Operador expansión //
//Como se hacia antes de ECS6

let lorem = "Lorem ipsum dolor sit amet, consectetur \n" 
+ "adipiscing elit.";
console.log(lorem)

let person = {
    'name': 'sebastian',
    'age': 25,
    'country': 'CO'
}
console.log(person.name, person.age, person.country)

//En el caso del operador expansión no existia, cada elemento se agregaba uno por uno
//Con ECS6

let loremTwo = `Lorem ipsum dolor sit amet, consectetur
adipiscing elit.`
console.log(loremTwo)

let personTwo = {
    'name': 'sebastian',
    'age': 25,
    'country': 'CO'
}
let {name, age, country} = personTwo;
console.log(name, age, country);

let teamOne = ['Oscar', 'Julian', 'Ricardo'];
let teamTwo = ['Camila', 'Juliana', 'Yesica'];
let education = ['David', ...teamOne, ...teamTwo];//Agregar un elemento nuevo y los elementos 
//de los arreglos en uno solo
console.log(education);

// FIN CLASE 3//

// CLASE 4 Arrow Functions, Promesas y Parámetros en objetos //
//Como se hacia antes de ECS6
let name = 'sebastian';
let age = 25;

obj = { name: name, age: age};

//No hay arrow functions antes de ECS6
//No hay promesas antes de ECS6

//Con ECS6

objTwo = { name, age};//Se reduce la declaracion y es el mismo resultado

const names = [
    {name: 'sebastian', age: 25},
    {name: 'Oscar', age: 32}
]

let listOfNames = names.map(item => console.log (item.name));

const helloPromise = () =>{
            //Desde aqui estructura de una promesa
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Hey, se resolvio la promesa')
        }else{
            reject('Ups, no se resolvio la promesa')
        }
    });
}

helloPromise()
    //Obtener la respuesta 
    .then(response => console.log(response))
    //Obtener el erro de rechazo o porque no fue correcto
    .catch(error => console.log(error));

// FIN CLASE 4//