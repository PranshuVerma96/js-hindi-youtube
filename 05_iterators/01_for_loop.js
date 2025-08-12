// for

// for (let i = 0; i <10; i++) {
//   const element = i;
//   if(element == 5){
//     console.log('5 is best number');
    
//   }
//   console.log(element);
// }

// let count=0
// for (let i = 0; i < 10; i++) {
//   // console.log(`Outher loop Value : ${i}`);
  
//     for (let j = 0; j < 10; j++) {
//       // console.log(`Inner loop Value : ${j}`);
//     console.log(i + '*' + i + '=' + i*j);
    
      
//  count++
//     }
  
// }
// console.log('total iteration is : -', count);

let myArray = ['flash ' , 'batman ', 'superman ']
for (let index = 0; index <myArray.length; index++) {
  const element = myArray[index];
  //console.log(element);
  
  
}

// break and continue
// for (let i = 1; i < 20; i++) {
//   if(i== 5){
//     console.log('Detected 5 ');
//     break
    
//   }
//  console.log(` value of i is ${i}`);
 
  
// }

for (let i = 1; i < 20; i++) {
  if(i== 5){

    continue   
  }
 console.log(` value of i is ${i}`);
}