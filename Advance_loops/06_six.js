const myNumbers = [1,2,3,4,5]

// const myTotal = myNumbers.reduce(function (acc,curval) {
//   console.log(`acc : ${acc} and curval :- ${curval}`);
  
//   return (acc + curval)
// },0)

const myTotal = myNumbers.reduce( (acc , curval) => acc +curval,0)

console.log(myTotal);

const shoppingCart = [
  {
    itemName: 'js course',
    price: 999
  },
  {
    itemName: 'java course',
    price : 1999
  },
  {
    itemName: 'python course',
    price : 999
  },
  {
    itemName: 'C# course',
    price : 2999
  },
  {
    itemName: 'mobile application development',
    price : 59990
  },
]
const mySum =shoppingCart.reduce( (acc,item) => acc + item.price,0)
console.log('this is price to pay :- ' , mySum);
