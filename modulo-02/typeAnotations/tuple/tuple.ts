let person:[string, string, number]
person = ['Rivaldo', 'Front-End developer', 29]
console.log(person[1]);
console.log(person);
//------------------------------------------------------------------------------------------------
let person2:[name:string, job:string, age:number] = ['Rivaldo', 'Front-End developer', 29]
console.log(person2[1]);
console.log(person2);
//------------------------------------------------------------------------------------------------
/**
 * Lista homogênea de elementos do tipo string
 */
let fruitsList:[string, ...string[]] = ['mango', 'pear', 'apple', 'watermelon']
console.log(fruitsList);
//-----------------------------------------------------------------------------------------------
/**
 * Lista heterogênea de elementos tipo number, boolean e string
 */
let fruitsList2:[number, boolean, ...string[]]
fruitsList2 = [fruitsList.length, true, ...fruitsList]
console.log(fruitsList2);
//----------------------------------------------------------------------------------------------
let test:[number[], boolean[], ...string[]]
test = [[1, 2, 3], [true, false], ...fruitsList]
console.log(test);
//----------------------------------------------------------------------------------------------

function people(names:string[], ages:number[]){
    return[...names, ...ages]
}

let result = people(['Pedro', 'Rivaldo'], [4, 29])
console.log(result);
//----------------------------------------------------------------------------------------------

type name = [firstName:string, lastName:string] | [firstName:string, middleName:string, lastName:string]

function createPerson(...fullName: name){
    return [...fullName]
}

let return1 = createPerson('Rivaldo', 'Silva')
let return2 = createPerson('Rivaldo', 'Souza', 'Silva')
console.log(return1, return2);
