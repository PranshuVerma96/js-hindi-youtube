// Object are non primitive data type in js . this is store the value in kay and pair form.

//  very common interview question add a symbole in the object

const mySym = Symbol('mykey');
// const obj = {
//   name : "pranshu",
//   age  : 34,
//   email : 'pranshu@gmail.com',
//   isLoggedin : true,
//   "salary" : 34400,
//   [mySym] : 'mykey'
// }


console.log(typeof(mySym));

// print the object in the console 

// console.log(obj);

//  find the value of object has two method 
// . operator 
// [] using brackets 


console.log(obj.name);
console.log(obj.salary);

 
console.log(obj['name']);

//you can freeze the object so no one can change the object properties 

Object.freeze(obj);

obj.age = 23;
console.log(obj.age);




// merge two object in my object 

const obj1 = {
  name : 'pranshu',
  age :  34
}
 
const obj2 = {
  salary : 45000
}

const newObj = Object.assign(obj1 , obj2);

console.log(newObj);

const nayaObj = {...obj1, ...obj2}
console.log(nayaObj);


const obj = {
  name : "pranshu",
  age  : 34,
  email : 'pranshu@gmail.com',
  isLoggedin : true,
  "salary" : 34400,
  [mySym] : 'mykey'
}

const mynewObj = Object.keys(obj);
const allValue = Object.values(obj);

console.log(allValue);


console.log(mynewObj);

// that is used to convert object properties in array.
console.log(Object.entries(obj));

// object destructuring 

const course = {
  courseName : 'js',
  price : 100,
  CoursTeacher : 'pranshu'
}

const {courseName:cN , price:pr} = course;

console.log(cN);
console.log(pr);


const arr = {
  name : 'pranshu',
  age : 34
}

Object.seal(arr);
arr.age = 59;
console.log(arr);

// Object.freeze(arr);
// console.log(arr);









 