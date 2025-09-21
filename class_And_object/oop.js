const user ={
   username : 'hitesh',
   loginCount : 9,
   signedIN : true,

   getUserDetails : function(){
//  console.log('got user details form databse');
//  console.log(`Username ${this.username}`);
console.log(this);

 
   }

   
}

// console.log(user.username);
// //console.log(user.getUserDetails());

// console.log(this);



function User(username, loginCount, isLoggedIn){
  this.username = username
  this.loginCount = loginCount
  this.isLoggedIn = isLoggedIn
  this.greeting = function(){
    console.log(`welcome ${this.username}`);
    
  }


}



// const userOne = new User('hitesh', 45, true)
// const userTwo = new  User('pranshu',45,false)
// const userTw = new User('pranshi',452,false)
console.log(userOne.constructor);




// console.log(userTwo);






