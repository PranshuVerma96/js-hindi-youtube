// Primitive  all is call by value

// 7 types: String , Number, Boolean, null , undefind, Symbol,  BigInt 

// const score = 90
// const scoreValue=40.43

// const isLoggedIn=false
// const outSideTemp=null
// let userEmail;

// const id=Symbol('232')
// const anotherId=Symbol('232')

// console.log(id==anotherId);

// const bigNumber=343434333333333333333n





// Reference Types (Non primitive)

// Array, Objects, Functions

// const heros=["shakiman","naagraj","doga"]

// let myObj={
//   name:'pranshu',
//   age:45,
// }

// const myFun=function(){
// console.log('hello world');
// }

// console.log(typeof(myFun))
// console.log(typeof(bigNumber));

// console.log(typeof(myObj))

// console.log(typeof(anotherId));

//************** */

//Stack (Primitive), Heap(Non-Primitive)

let myYoutubename='praunshu.com'

let anotherName=myYoutubename
anotherName='chaiourcode'

console.log(anotherName)
console.log(myYoutubename)

let user1={
  email:'gmail.com',
  upi:'uer@google.com'
}

let user2=user1

user2.email='sandesh@gmail.com'
console.log(user1.email)
console.log(user2.email)



