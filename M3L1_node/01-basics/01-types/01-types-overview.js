'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy} from '../../../SeidoHelpers/seido-helpers.js';


console.group('DECLARING variables and constants');
// data types in js, but note you do NOT declare a datatype for variable
// variables are declared using let
// Using strict mode revents you from using a variable before it is declared

let numberTest = 42;
let stringTest =  `Hello ${numberTest}`;
let booleanTest = true;
let bigIntTest = 1234n;

let symbolTest = Symbol("propertyName");    // ensures a unique identifier, even if propertyname is the same
let objectTest = {name: `Martin`, age: 21 + 40};   // empty object, object root of every type on js

console.log(objectTest.phone)
console.log(objectTest.age)

// undefined, null, defines not set a value, NaN is used to indicate Not A Number
let undefinedTest = undefined;
let nullTest = null;
let NaNTest = NaN;


// constants are declared using const, and cannot be reassigned
const stringConst = "I am a constant string";
//stringConst = "trying to set another value";  // TypeError

//use console.log() to print expressions and variables to the console
console.log(stringTest, typeof stringTest);
console.log(numberTest, typeof numberTest);
console.log(booleanTest, typeof booleanTest);
console.log(bigIntTest, typeof bigIntTest);
console.log(symbolTest, typeof symbolTest);
console.log(objectTest, typeof objectTest);

console.groupEnd();
console.group('MIX ANY TYPE');
// As you do NOT declare a datatype for variable, you can use any datatype in a variable at any time
stringTest = 42;
numberTest = objectTest;

console.log(stringTest, typeof stringTest);
console.log(numberTest,typeof numberTest);

// And you can mix crazily and js tries to make type conversion convert to string (most cases) or Number
stringTest = 42 + 42 + '42' + 42 + booleanTest;  
console.log(stringTest); // 844242true;


//if a variable is not assigned a value it is undefined
let a;
console.log(a == undefined);


console.groupEnd();
console.group('TESTING FOR EQUALITY');
// non-strict equality operator: == != test for eqality after type conversions and returns a Boolean result. 
// Unlike the strict equality operator, it attempts to convert and compare operands that are of different types.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality

// strict equality operator: === and !== the strict equality operator always considers operands of different types to be different.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality
// almost ALWAYS use === and !== 

console.log('null and undefined');
console.log (nullTest == undefinedTest);  // true - in nonstrict equality null equals undefined
console.log (nullTest === undefinedTest);  // false

objectTest = null;
console.log (objectTest == undefined);  // true - in nonstrict equality null equals undefined
console.log (objectTest === undefined);  // false


console.log('boolean, string and numbers');
let b = 1, c= "1" , d = true, e = "0";
console.log (b == c);     // true
console.log (b === c);    // false    - more strict

console.log(b == d);      // true
console.log(b === d);     // false  - more strict

console.log(e == false);   //true
console.log(e === false);  //false

console.log (d == c);     // true
console.log (d === c);    // false    - more strict

console.log('Testing object equality');
let name1 = {firstName: "Jane", lastName: "Doe"};
let name2 = {firstName: "Jane", lastName: "Doe"};

let name3 = name2;  // refer to the same object

// always assume reference equality, both strict and non-strict equality
console.log('object referential equality');
console.log (name1 == name2);    //false
console.log (name1 === name2);   //false

console.log (name2 == name3);    //true
console.log (name2 === name3);   //true

// for value equality you need to implement yourself the method to compare object content
console.log('object value equality');
const s1 = JSON.stringify(name1);
const s2 = JSON.stringify(name2);
console.log(s1 === s2); 

//Using a function to test  Equality
name1.phone = '123';  //adding a property for test
console.log(isEqual(name1, 45)); 


//For now, simply base value Equality on the objects string representation using JSON.stringify()
//it is not optimal as stringify() does not quarantee the property order - but you get the idea.
//see correct solutions in my object-equality section
function isEqual(obj1, obj2) {
  return (JSON.stringify(obj1) === JSON.stringify(obj2));
}


/* Exercises

1. Declare a variable and the assign various values such as 5, 5+8, 5+8+'15', 5+8+'15'+{}, '', "", ``;
   Write the variable to the console after each assignment
2. create a string from "1"+ "3".repeat(20)
3. create a string variable and assign it value "hello" with 50 * before and after the word
4. create a couple of objects with properterties and test equality (value and referential)

*/
