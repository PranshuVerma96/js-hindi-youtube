// // ES6

// class User {
//   constructor(username, email, password){
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }
//   encryptPassword(){
//     return `${this.password} abc`
//   }

//   ChangeUsername(){
//     return `${this.username.toUpperCase()}`
//   }
// }
//  const chai = new User('pranshu', 'pranshu@gmail.com', '123')

//  console.log(chai.encryptPassword());

//  console.log(chai.ChangeUsername());
 
// behing the scene

function User(username, email, password){
  this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
   return `${this.password} abc`
}
User.prototype.ChangeUsername = function(){
   return `${this.username.toUpperCase()}`
}

 const tea = new User('tea', 'pranshu@gmail.com', '123')
 console.log(tea.encryptPassword());
 console.log(tea.ChangeUsername());
 
 