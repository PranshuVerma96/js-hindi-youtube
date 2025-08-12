// function sayMyName(){
//   console.log('hitesh');
// }

// sayMyName()

// function addTwoNumbers(number1, number2){
//    console.log( number1+number2)
// }

// const result=addTwoNumbers(3,2)
// console.log(result);

function addNum(num1, num2){
  let res=num1+num2
  return res
}

// const answer=addNum(9,8)
// console.log((` your answer is : ${answer}`));

function loginUserMessage(username = 'syam'){
  if(!username){
    console.log('please enter a user name');
    return
  }
  return ` ${username } just logged in `
}

// console.log( loginUserMessage('prashu'));
// console.log( loginUserMessage('hitesh'));

function calculateCartPrice(...num1){
return num1
}

// console.log(calculateCartPrice(3,4,3,2));

const user={
  username:'hitesh',
  price :29
}

function handleObject(anyobject){
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
  
}
handleObject(user)

