
function sayMyName(){
console.log("H");
console.log("A");
console.log("R");
console.log("S");
console.log("H");
}

// sayMyName()

/* function addTwoNumbers(number1, number2){ 
  // here number1 & number2 are paramters
  console.log(number1 + number2);
  
} */


  function addTwoNumbers(number1, number2){ 

    //let result = number1 + number2
    // console.log("harsh");
    //return result // result k baad kuchh bhi print ni hota h
    return number1 + number2
    
  
}
const result = addTwoNumbers(2, 5) 

//console.log("Result", result);

function loginUserMessage(username){
  return `${username} just logged in`
}

// console.log(loginUserMessage("Harsh"))

function calculateCartPrice(...num1){ // ... ko rest bolte h
  return num1
}

console.log(calculateCartPrice(200, 400, 500));

const user = {
  username: "harsh",
  price: 199,
}

function handleObject(anyobject){
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
  
}

//handleObject(user)
handleObject({
  username: "sam",
  price: 399,
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
  return getArray[1]
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));