class User{
  constructor(username){
    this.username = username
  }

  logMe(){
    console.log(`Username is ${this.username}`);
    
  }
}


class Teacher extends User{
  constructor(username,email, password){
   super(username)
    this.email = email;
    this.password = password
  }

  addCourse(){
    console.log(`a new couse was added by ${this.username}`);
    
  }
}

const chai = new Teacher('pransh', 'cai@google.com', '345')

console.log(chai);


const maslaChai = new User('masalaChai')
maslaChai.logMe()

console.log(chai instanceof Teacher);


