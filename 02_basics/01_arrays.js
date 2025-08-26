// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["shaktiman", "naagraj", "jumbo"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6) // push simply values ko add kr deta hai array k ander
// myArr.push(7)
// myArr.pop(7) // pop array ki last value ko remove kr deta hai

// myArr.unshift(9) // unshift given value ko array m 0 k pehle shift kr deta hai
// myArr.shift()

// console.log(myArr.includes(9)); // .include se hm yeh pta kr skte h ki jo given data hai woh hmaare array m hai ki ni Output -> true/false
// console.log(myArr.indexOf(4)); // yeh bhi include k tarah h but isme t/f k jagah true hone pe given data output m show krta h & false hone pe -1

const newArr = myArr.join()


// console.log(myArr);
// console.log(typeof newArr); // string m convert ho gyi hai


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

