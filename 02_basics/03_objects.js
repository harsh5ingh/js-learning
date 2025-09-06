// singleton object

// object literals

const mySym = Symbol("key1")

const JsUser = {
  name: "Harsh",
  "full name": "Harsh Singh",
  mySym: "myKey1",
  age: 21,
  location: "Patna",
  email: "harshkr.5216@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// // console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "harshkr0502@gmail.com"
Object.freeze(JsUser) // isse koi value change ni kr payega

console.log(JsUser);

JsUser.greeting = function(){
  console.log("Hello JS User");
  
}

console.log(JsUser.greeting());


