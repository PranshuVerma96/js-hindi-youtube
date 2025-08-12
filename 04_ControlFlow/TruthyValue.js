const userEmail = []

if(userEmail){
  console.log('got user email');
  
} else {
  console.log('Do not have user Email ');
  
}

// Falsy value :- false , 0 , -0 , 0n , " " , null , NaN ,undefined 

// Truthy Value :-  / "0" ,'false' ,  " " ,  [] , {} ,function (){}

if ( userEmail.length ==  0){
  console.log('Array is empty');
  
}

//empty object

// const emptyObj = {}
// if(Object.keys(emptyObj).length === 0){
//   console.log('Object is empty');
  
// }

// Nullish Coalescing Operato (??) : null ,undefined

let val1;
val1 = 5 ?? 10

console.log(val1);

// val1 = null ?? 10
// console.log(val1);

// val1 = undefined ?? 12
// console.log(val1);

// val1 =null ??10 ??  10
// console.log(val1)

// ternary operator

// condition :true: false

const iceTeaPrice = 90
 iceTeaPrice >= 89 ? console.log('less than 90') :console.log('more than 80');
 
 





