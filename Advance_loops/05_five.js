const myNumbers = [1,2,3,4,5,6,7]

// const NewNums = myNumbers.map( (item)=>item+10)
// console.log(NewNums);

const newNums =myNumbers
.map((item)=> item*10)
.map((item)=> item +1)
.filter((item)=> item>=50)

console.log(newNums);
