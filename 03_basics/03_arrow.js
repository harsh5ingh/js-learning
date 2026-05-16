// const user = {
//   username: "harsh",
//   price: 999,

//   welcomeMessage: function() {
//     console.log(`${this.username} , welcome to website`);
//     //console.log(this);
    
    
//   }
// }

// // user.welcomeMessage()
// // user.username = "sam"
// // user.welcomeMessage()

// // console.log(this);

// function chai(){
//   let username  = "harsh"
//   console.log(this.username);
  
// }
// chai()

// const chai = function (){
//    let username  = "harsh"
//   console.log(this.username);
// }

const chai = () => {    // arrow function
   let username  = "harsh"
  console.log(this.username);
}

// chai()

// const addTwo = (num1, num2) => {
//   return num1 + num2
// }

// curly { } use krne pee return use krna hi parega useful in ReactJs
// => arrow fxn m direct bhi kr skte h

const addTwo = (num1, num2) => num1 + num2

console.log(addTwo(3, 4));