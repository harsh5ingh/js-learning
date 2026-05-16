// var c = 300
// global scope

/* let a = 300
if (true) {
  // block scope
  let  a = 10
  console.log("INNER BLOCK: ",a);
  
} */

// console.log(a);
// console.log(b);
// console.log(c);

/* function one(){
  const username = "harsh"

  function two(){
    const website = "youtube"
    console.log(username);
  }
  console.log(website);
  two()
  
} 

// one() */

/*if (true) {
  const username = "harsh"
  if (username === "harsh") {
    const website = " instagram"
    // console.log(username + website);
    
  }
  // console.log(website);
  
}
// console.log(username); */

// ++++++++++++++++++++ interesting ++++++++++++++++++

function addOne(num) {
  return num + 1
}

console.log(addOne(5))

const addTwo = function(num) {
  return num + 2
}

console.log(addTwo(6))


