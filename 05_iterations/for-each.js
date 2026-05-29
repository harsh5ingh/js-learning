const coding = ["js", "rb", "go-lang", "python", "cpp"]

// coding.forEach(
//   function name(item) {
//     console.log(item);
    
//   }
// )

// coding.forEach( (item) => {
//   console.log(item);
  
// })

// function printMe(item){
//   console.log(item);
  
// }
// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//   console.log(item, index, arr);
// })

const myCOding = [
  {
    languageName: "Javascript",
    languageFormat: ".js"
  },
  {
    languageName: "Python",
    languageFormat: ".py"
  },
  {
    languageName: "C++",
    languageFormat: ".cpp"
  },
  {
    languageName: "Java",
    languageFormat: ".java"
  }
]

myCOding.forEach( (item) => {
  console.log(item.languageName);
  
})