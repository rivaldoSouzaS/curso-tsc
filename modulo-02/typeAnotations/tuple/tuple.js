"use strict";
let person;
person = ['Rivaldo', 'Front-End developer', 29];
console.log(person[1]);
console.log(person);
//------------------------------------------------------------------------------------------------
let person2 = ['Rivaldo', 'Front-End developer', 29];
console.log(person2[1]);
console.log(person2);
//------------------------------------------------------------------------------------------------
/**
 * Lista homogênea de elementos do tipo string
 */
let fruitsList = ['mango', 'pear', 'apple', 'watermelon'];
console.log(fruitsList);
//-----------------------------------------------------------------------------------------------
/**
 * Lista heterogênea de elementos tipo number, boolean e string
 */
let fruitsList2;
fruitsList2 = [fruitsList.length, true, ...fruitsList];
console.log(fruitsList2);
//----------------------------------------------------------------------------------------------
let test;
test = [[1, 2, 3], [true, false], ...fruitsList];
console.log(test);
//----------------------------------------------------------------------------------------------
function people(names, ages) {
    return [...names, ...ages];
}
let result = people(['Pedro', 'Rivaldo'], [4, 29]);
console.log(result);
function createPerson(...fullName) {
    return [...fullName];
}
let return1 = createPerson('Rivaldo', 'Silva');
let return2 = createPerson('Rivaldo', 'Souza', 'Silva');
console.log(return1, return2);
