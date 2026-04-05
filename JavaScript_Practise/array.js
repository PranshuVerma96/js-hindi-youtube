// this is array Practise section 

//  In JavaSctipt array is a data type which is used to stored multiple data in a variable 
// In js array is resizble .
// We can strored any kind of valve

// Example 

// In js array inilization having two method  1. using[]  and 2. using Array() function 
// print(arr); we can not print using print message because this in python 
const arr = [2,3,4,5,6] // we can stored the dublicate element also 
//console.log(arr);


// second method 

// const array = Array(1,2,3,4);
//console.log(array);

// how to calculate the lenght of array 

let myarr = [1,2,3,4,4,5];
//console.log(myarr.length);


// +++++++++++++++++++++++++++++ ************* +++++++++++++++++++++++++++++++

// different type of method whoese are using array manupulation 
// push() => this push the value in the last of array 

myarr.push(9);
//console.log(myarr);

// pop() => this method is used to delete the last value of the array 

myarr.pop();
//console.log(myarr);


// shift()  this is method is used to delete the first element of the array and adjust all element 

myarr.shift()
//console.log(myarr);

// unshift() => this is method is used to insert a elemet first index and ajust all element 

myarr.unshift(9);
//console.log(myarr);

// slice and splice method 

// slice()  this is used to delete the elemet using range which is given by the user 
// this is change not  the orignal arr 

// console.log(myarr.slice(2,4));
// console.log(myarr);

// splice this is methd is also do the same work but  change the oringal array 

let myArr = [2,3,4,5,5,4,3]
// console.log(myArr.splice(2,4));
// console.log(myArr);


// join() method it conver all element in the string
// console.log(myArr.join());
// console.log(typeof(myArr.join()));


// merge two array 

const myHero = ['pranshu' , 'shivam' , 'raju'];
const myVillion = ['shyam' , 'ram' , 'mohan'];
//myHero.push(myVillion);

//console.log(myHero); // if do this so myVillion array pass as a element in the myHero array 


// we can use the concat method to merge array
// console.log(myHero.concat(myVillion));
// console.log(myHero);


// second method to merge array using spread operator
// you can merge more than two array 
const myNewHV = [...myHero,...myVillion]
// console.log(myNewHV);

// if having array in array task convert this is a single array 

const numArr = [1,2,[3,4],5,[3,9]];

// console.log(myArr.flat(Infinity));

// array advance method 

// map()  this method is return a new arry apply some operation 

const myNewChange = myArr.map((num)=>{
  return num * 3;
})

console.log(myNewChange);
console.log(myArr);


// filter is used to return filtering element 

const filterarray = myArr.filter((num)=>{
  return num > 4;
})

console.log(filterarray);


// forEach() that is used to interate all array 
 myArr.forEach((num)=>{
  console.log(num);
  
})

// reduce() this is very spical method that is used to calculate the total price 



const priceCount = [1,2,3,4,5,6];
const initalValue = 0;
const totalPrice = priceCount.reduce((acc, curr)=>   acc + curr,initalValue)
  

console.log(totalPrice);

const array = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array.reduce((accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);


// find() method 

const dataValue = [1,2,3,4,5,6,7,8,9];
const data =  dataValue.find((num)=>{
  return num > 8;
 })

 console.log(data);

 const str = 'pranshu';
 console.log(Array.from(str));

 console.log(Array.isArray(dataValue));


 const n1 = 12;
 const n2 = 13;
 const n3 = 34;

 const arrData = Array.of(n1,n2,n3) 
 console.log(arrData);
 
 



