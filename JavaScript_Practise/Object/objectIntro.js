// singleton


const mySym = Symbol("key1");
const JsUser = {
    name : 'pranshu',
    "full_name " : 'Pranshu  verma',
    age : 18,
    [mySym] : 'mykey1',
    location : 'lucknow',
    email : "pranshu75@google.com",
    isLoggedIn : false,
    lastDayes : ['monday' , 'sunday']

};

// console.log(JsUser);
// console.log(JsUser['email']);
// console.log(JsUser["full_name "]);
// console.log(JsUser[mySym]);
// console.log(typeof(mySym));

JsUser.email = "abneet34@chatgpt.com";
//console.log(JsUser.email);

// Object.freeze(JsUser); // object ki freeze kare ne per koi bi change nahi kare sakte he

JsUser.email = 'sandesh34@gmail.com';
//console.log(JsUser.email);

JsUser.greeting = function(){
    console.log("hello js jser");
    
}

JsUser.greetingTwo = function(){
    console.log(`heloo js user ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


console.log(JsUser.greeting);










