"use strict";
let fruits = ["oranje", "apple", "mango"];
console.log(fruits[1]);
let fruits2 = ["oranje", "apple", "mango"];
console.log(fruits2[0]);
fruits2.push("pear");
console.log(fruits2[3]);
console.log(fruits2.length);
let listNumber = [1, 2, 3, 4, 5];
console.log(listNumber);
listNumber = [...listNumber, 6, 7, 8, 9, 10];
console.log(listNumber);
let languages = new Array("JavaScript", "TypeScript", "java", "Python");
languages.forEach(function (value) {
    console.log(value);
});
