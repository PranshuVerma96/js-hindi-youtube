let mutliplyNum = (num1, num2)=>{
  return (num1*num2);
}
console.log(mutliplyNum(3,4));


let printGreeting= ()=>{
  console.log('papa ki pari');
  
}

let runTwice = inputfucntion =>{
  inputfucntion();
  inputfucntion();
};
console.log(runTwice(printGreeting));


let arr = [1,2,3,4,5,6]
let sum = 0;
arr.forEach(num => sum+= num);
console.log(sum);

let squars =arr.map(num =>num*num)
console.log(squars);

