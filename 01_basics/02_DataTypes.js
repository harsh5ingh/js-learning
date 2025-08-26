"use strict"; //treat all JS code as newer version

//alert("kya haal hai?"); // we are using nodejs, not browser

console.log( 3 
  + 7); // code readability should be high



let name = "Harsh"; // string

let age = 20; // number

let isStudent = true; // boolean true or false

let state; //undefined

let city = null; //null is a special value

let bigNumber = 1234567890123456789012345678901234567890n; //bigint

let sym = Symbol("unique"); //symbol is a unique value

//objects

log(typeof name); // output => string
log(typeof age); // output => number
log(typeof isStudent); // output => boolean
log(typeof state); // output => undefined
log(typeof city); // output => object (null is a special case)
log(typeof bigNumber); // output => bigint
log(typeof sym); // output => symbol