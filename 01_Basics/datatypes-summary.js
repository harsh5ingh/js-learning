// # Primitive

// 7 types : String, Number, Boolean, null, Symbol, undefined, BigInt

const score = 100
const scoreValue = 100.3

const issLoggedIn = false
const outsideTemp = null
let userEmail = undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456789225674334125665689896n


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktimaan", "naagraj", "doga"];
let myObj = {
    name: "harsh",
    age: 21,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction); // output => function
console.log(typeof heros); // output => string

