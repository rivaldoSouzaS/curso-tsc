let value: unknown;

value = true;
value = String;
value = [1, 2, 3]
value = "Rivaldo"
value = 10.5

let value2: unknown;
let value3: boolean;

/*
value2 = value3;

let value4:boolean = value2
let value5:number =  value2  todas essas atribuição dão errado
let value6: String = value2
*/

let somethingAny: any
let somethingUnknown: unknown

console.log(somethingAny.toFixed(2)); // sem erro
//console.log(somethingUnknown.toFixed(2));// com erro, o unkown te obriga a testar o tipo da variavel

if(typeof somethingUnknown === 'number'){
    somethingUnknown.toFixed(2) //mesmo codigo sem erro, ja que esta verificado que realmente se trata de um numero
}

