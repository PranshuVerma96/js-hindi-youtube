//singleton 
//object literals
// Object.create

let mySym = Symbol('key1')
const jsUser = {
  name : 'pranshu',
  [mySym] : 'key1',
  age : 34,
  location :'luchnow',
  email : 'pranshu34@gmail.com',
  lastLoginDays :['monday','sunday'],
  'full-name' : 'pranshu verma'
}

// console.log((jsUser.age));
// console.log(jsUser.email);
// console.log(jsUser["full-name"]);
// console.log(jsUser[mySym]);
// // console.log( typeof jsUser.muSym);
// console.log( typeof jsUser[mySym]);


console.log(jsUser.email = 'chargpt@gmail.com');
// Object.freeze(jsUser)
// console.log(jsUser.email = 'microchargpt@gmail.com');
// console.log(jsUser);


jsUser.greeting = function (){
  console.log('hello Jsuser');
  
}

jsUser.greetingTwo = function (){
  console.log(`Hello Js user ,${this.name}`);
  
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());







