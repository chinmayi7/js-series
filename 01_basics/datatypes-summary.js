// difference call by value and call by reefernce

// 2 types in Data Types: Primitive and Non-Primitive / Reference type
// the differentiation in between two dataTypes are made based on, in memory how data is stored and how it can be accessed

// Primitive (call by value - for example if we are copying from one place to another, the original data it will give me a copy of it but not the reference of the memory)
// 7 Types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; //undefined
let userName = undefined

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId); // false, because return value is not same from Symbol

const bigNumber = 32153729364957403792820n // this is BigInt

console.log('score: ', typeof score); // number
console.log('scoreValue: ', typeof scoreValue); // number
console.log('isLoggedIn: ', typeof isLoggedIn); // boolean
console.log('outsideTemp: ', typeof outsideTemp); // object
console.log('userEmail: ', typeof userEmail); // undefined
console.log('userName: ', typeof userName); // undefined
console.log('id: ', typeof id); // symbol
console.log('anotherId: ', typeof anotherId); // symbol
/* Null is basically an assignment value. The variable which has been assigned as null contains no value and is empty. 
 Undefined is when we declare a variable but do not assign a value to it(define it), the variable becomes undefined. Null is a type of object. */

// Reference Type (Non primitive) - (where we get the reference of the value from memory allocated)
// Array, Objects, Functions
// Array and Objects -> typeof is object
// Functions -> typeof is object function
const heros = ["iron man", "superman", "batman", "spiderman"]
let myObj = {
    name: "devi",
    age: 22
}

//function as variable
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);


//Q: javaScript is Dynamically typed language or Statically typed language ? ans: Dynamically typed language ex: const score = 100;
//Q: TypeScript is Dynamically typed language or Statically typed language ? ans: Statically typed language ex: const score: Number = 100; (type safety)
