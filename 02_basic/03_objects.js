// singleton
// object literals

// Object.create

const mySym=Symbol('key1')

const JsUser={
  name: 'pranshu',
  age:18,
  'full-name' : 'pranshu verma',
  location:'jaipur',
  email:'pransh34@gmail.com',
  isLoggedIn: false,
  lastLoginDays : ['monday', 'saturday'],
  [mySym] : 'mykey1'

}

// console.log(JsUser.email);
// console.log(JsUser['email']);

// console.log(JsUser["full-name"]);
// console.log((JsUser[mySym]));

// Object.freeze(JsUser)
JsUser.email='sandesh@gmail.com';

// console.log(JsUser);

JsUser.greeting=function(){
  console.log('Hello js user');
  
}


JsUser.greeting2=function(){
  console.log(`Hello js user ,${this.name}`);
  
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());







