let foods = ['bread', 'rice', 'meat','pizza']
foods.forEach(function(food){
  console.log(food);
  
})

// anonimus function 
let dish =[1,2,3,4,5,6];

// function search(dish,num){
//   for (let i = 0; i < dish.length; i++) {
//     if(dish[i]==num){
//      console.log(`elemen fount at ${i}`);
//      return;
     
//     }
    
//   }
//   console.log('element was not found');
  
// }
// dish.forEach(num =>{
//   if(num==5)
// {
//   return
// }
// console.log('visited ', num)
// })

// search(dish,9)
// dish.forEach(dis_num => console.log(dis_num));

// array methods

let arr = [1,2,3,4,5,6,7,8,9];
let square =arr.map(num =>{
  return num*num
});
console.log(square);

let square1 =arr.map(num => num*num);
console.log(square1);



















// let odds = arr.filter((num , index) =>{
//   if(num%2==1){
//     return true
//   }else{
//     return false
//   }
// });
// console.log(odds);

// let arr1= [1,2,3,4,5,6,7,8,9];
// let newodds = arr1.filter((num , index) =>{
//   return num%2==1;
 
// });
// console.log(newodds);

// let aurodd =arr.filter((num, index)=>num%2==1);
// console.log(aurodd);




