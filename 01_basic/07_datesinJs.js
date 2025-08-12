// Dates
let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());

let myCreatedDate= new Date(2025,0,23)
// console.log(myCreatedDate.toDateString());

let myTimeStamp=Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Date.now()/1000);

let newDate=new Date()
console.log(newDate.getMonth());
console.log(newDate.getDay());


newDate.toLocaleString('default',{
  weekday: 'long',
  timeStyle: 'full'
})
 console.log((newDate));
 



