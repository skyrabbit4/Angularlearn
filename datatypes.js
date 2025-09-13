"use strict";
let Lname = "John"; //type script infers the type of variable
// Lname=10; //error
// lname=10;
let newname = Lname.toUpperCase();
console.log(newname);
//Type inference functionality makes sure that a variable is always of the same type.
//If we try to assign a value of a different type, TypeScript will throw an error.
//Explicitly defining the type of a variable
let age = 20;
//age='25' //error
let result = parseInt("25");
//here result is inferred as number
/* boolean type */
let isValid;
//console.log(isValid); //undefined
let isGreater = true;
console.log(isGreater); //true
/*array type */
let empList;
empList = ["John", "Jane", "Doe",]; //if we add a number here, it will throw an error
let numList;
numList = [1, 2, 3, 4, 5];
let results = numList.filter((num) => num > 2);
console.log(results); //[3,4,5]
let results2 = numList.find((num) => num === 2); //undefined if not found
console.log(results2); //2
let depList;
let sum = numList.reduce((acc, curr) => acc + curr, 0); //go through each element and add it to accumulator
console.log(sum); //15
let c = 2 /* color.Blue */;
