function SetUsername(username){
  // complex DB calls
  this.username = username
  console.log('called');
  
}


function createUser(username, email, passward){
  SetUsername.call(this,username)

  this.email = email
  this.passward = passward
}

const chai = new createUser('chai', 'chai@google.com','453')
console.log(chai);
