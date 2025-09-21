let sum = function(num1, num2){
  return (num1+num2)

};
// functions in javascript are first -class citizens they can be assigned to variables.
// console.log(sum);
// console.log(sum(1,2));

// let newSum = sum;
// console.log(newSum(7,3));


let sumThreeNumbers =function(num1,num2,num3,sumofTwoNum){

  let sum1 = sumofTwoNum(num1,num2);
  return sumofTwoNum(sum1 ,num3);
}

// console.log(sumThreeNumbers(2,3,4,sumofTwoNum()));
console.log(typeof(sumThreeNumbers));


// arrow functions

let add = (num1 , num2) =>{
  return (num1+ num2)
}

console.log(add(5,6));


let square2 = (n1)=>{
return n1*n1
}

console.log(square2(8));

// only single argument 
let square = num=> num*num;
console.log(square(9));

// console.log(square(99999));




// setTimeout(function (){
//   console.log('subah ho gayi , uth jao');
  
// },2000)
// console.log('alerm set');

let alarm = ()=>console.log('papa ki pari ' ,Date());
let timerID = setTimeout(alarm,2000);
// console.log('timer id ', timerID);

// clearTimeout(timerID)

setInterval(alarm,2000)


// even Listener







 
