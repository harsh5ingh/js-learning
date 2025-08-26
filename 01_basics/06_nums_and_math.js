/* 
const score = 400
console.log(score);


const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));


const otherNumber = 69.5216
console.log(otherNumber.toPrecision(3)); // 3 digit tk precision lenge

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // isse hm agar en-IN kiye to India k no. count m output aayega like 1,00,000
*/

// +++++++++++++++++++++ Maths +++++++++++++++++

/*
console.log(Math);
console.log(Math.abs(-4)); // negative ko postive ko positive m convert krti hai
console.log(Math.round(4.7)); // round off leni k kaam aata hai
console.log(Math.ceil(4.2));  // hamesa aage ( high value ) value pe shift hota hai
console.log(Math.floor(4.9)); // hamesa lower value pe shift kr deti hai
console.log(Math.min(4, 3, 8, 6)); // isme minimum value nikaalte hai
console.log(Math.max(4, 3, 8, 6)); // isme maximum value nikaalte hai
*/
console.log(Math.random());
console.log((Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.random() * (max - min + 1))
console.log(Math.floor(Math.random() * (max - min + 1)) + min)

