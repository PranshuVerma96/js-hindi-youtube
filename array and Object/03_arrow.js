const user = {
  username : 'hitesh',
  price :99,

  welcomeMessage : function(){
    console.log(`${this.username}, welcome to website`);
    console.log(this);
    
  }

}

// user.welcomeMessage()
// user.username = 'sam' // this change the value of username
// user.welcomeMessage();
console.log(this);  // brower ke ander obeject is window

// function chai(){
//   console.log(this.username);

  
// }
// chai()'


// const chai = function (){
//   let username = 'pranshu'
//   console.log(this.username);
  
// }

// chai()


const chai =  ()=>{
  let username = 'pranshu'
  console.log(this);
  
}


//chai()

// const addTwo = (num1, num2)=>{
//   return num1+num2
// }
// console.log(addTwo(2,3));

// if you use {} bracket than must to write retrun and if () that not write return keyword

// const addTwo = (num1, num2)=> (num1+num2) // implicit return

const addTwo = (num1, num2)=> ({username : 'pranhu'})

console.log(addTwo(2,3));

// const MyArray = [1,2,3,4,5,6]
// MyArray.forEach(()=>())






