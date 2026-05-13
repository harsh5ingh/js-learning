
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

console.log(loginUserMessage("Harsh"))