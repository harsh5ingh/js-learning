const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, currval){
  console.log(`acc: ${acc} and currval: ${currval}`);
  
  return acc + currval
}, 0)

console.log(myTotal);


const shoppingCart = [
  {
    itemName: "Js course",
    price: 2999
  },
  {
    itemName: "Python course",
    price: 999
  },
  {
    itemName: "DSA course",
    price: 6999
  },
  {
    itemName: "Mobile Dev course",
    price: 4899
  }
]

const PriceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(PriceToPay);
