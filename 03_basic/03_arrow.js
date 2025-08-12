const user={
  username : 'pranshu',
  price : 90,

  welcomeMessage : function(){
    console.log(`${this.username} ,welcome to website`);
     console.log(this);
    
  }
 
}

// user.welcomeMessage()
// user.username ='sandesh'
// user.welcomeMessage()

// console.log(this);

// function chai(){
//   let username ='pranshu'
//   console.log(this.username);
  
// }
// chai()

const chai= ()=>{
 
   let username ='pranshu'
  console.log(this.username);
}
// chai()

// const  addTwo  = (num1 ,num2) => {
//  return num1+num2
// }

// console.log(addTwo(5,6)) 

// const  addTwo  = (num1 ,num2) => num1+num2

const  addTwo  = (num1 ,num2) => (num1+num2)
console.log(addTwo(5,6))               