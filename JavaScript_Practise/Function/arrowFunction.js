const user = {
    username : "pranshu",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
    //    console.log(this);
       
    }
}
// user.welcomeMessage();

// user.username = "sam";
// user.welcomeMessage();

// console.log(this);

// function chai(){
//     let username = "pranshu"
//     console.log(this.username);
//     }

// chai();

// const chai = ()=>{
//     let username = 'sandhesh'
//     console.log(this.username);
    
// }
// chai()

const addTwoNum=(num1 , num2)=>{
return num1+ num2;
}
//console.log(addTwoNum(8 ,9));

const addTwoNu=(num1 , num2)=> num1+ num2;

const Info = ()=>({username : 'pranshu'})
/* java script me array function object return karne ke liye app ko ye () lagan he padgega */
console.log(Info());


console.log(addTwoNu(8 ,9));

// const myNewArr = [ 2,3,4,5];
// myNewArr.forEach
