// function 
console.log('h');

function sayMyname(){
  console.log('hitesh');
  
}
// sayMyname()

// function addTwo(num1, num2){
//   console.log(num1 + num2);
   
// }

function addTwo(num1, num2){
  return(num1 + num2);
   
}



const result = addTwo(3,5)
//console.log('result :', result);


function loginUser(username ='pranh'){
  if(!username){
  console.log('please enter your name');
  return
  
  }
  return`${username} just logged in `
}
//console.log( loginUser('pranshu'));

// console.log(loginUser());
// console.log(loginUser('hitesh'));

function calculateCartPrice(val1, val2,...num1){ // rest operator

  return num1
}
console.log(calculateCartPrice(3,4,5,1))


const user = {
  username : 'hitesh',
  price : 333
}
function handleOject(anyobject){
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
  
}
handleOject(user)
handleOject({
  username : 'shyam',
  price :999
})

const myNewArray = [3,2,4,5]

function returnSecondValue(getArray){
 return getArray[0]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([1,23,4,56,67]));



