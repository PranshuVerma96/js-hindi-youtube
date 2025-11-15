console.log("hitesh");

function sayMyname(){
    console.log('hello Pranshu');
    
}
sayMyname()

// jab app function ki defination likte ho to diye gay 
// variable ko paramerter kahte he

// function addTwoNumber(num1 , num2){
//     console.log(num1 + num2);
    
// }
// jab app function ko call karate he to use bolte he argument 


function addTwoNumber(num1 , num2){
    return(num1 + num2);
    
}
const result = addTwoNumber(9,8);
console.log(result);

function loginUserMessage(username = "satyam"){
    if(username === undefined){// 
        console.log('plesase enter user name');
        // alert('please enter your name');
        return;
    }
    return `${username} just logged in `;
    
}

// console.log(loginUserMessage('hitesh'));
console.log(loginUserMessage());





 
