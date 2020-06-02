// INICIO Default Params //
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

// FIN CONCATENACIÓN//