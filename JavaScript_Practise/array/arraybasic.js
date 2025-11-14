const myArr = [0,1,2,3,4,5];

console.log(myArr[0]);

const myHeroes = ["shaktiman" ,"nagraj"]

// array methods

// myArr.push(6);

// console.log(myArr);

// myArr.pop();
// console.log(myArr);

myArr.unshift(0); // ye operation karne per array ke sake element to right sift karna padthe he so ye optimized tarika nahi 
//console.log(myArr);

console.log(myArr.shift());
//console.log(myArr);


console.log(myArr.includes(9));
console.log(myArr.indexOf(8));

const newArr = myArr.join() // it conver all array element in the string
// console.log(myArr);
// console.log(newArr);
// console.log(typeof(newArr));

// slice , splice

console.log("A  =" ,myArr);

const myn1 = myArr.slice(1,3);
console.log("B =" , myn1);
console.log("A  =" ,myArr);


const myn2  = myArr.splice(1,3);
console.log("C =" , myn2);
console.log(myArr);















