// Immediately Invoked Function Experessions (IIFE)
(function chai(){
  console.log('db connected');
  
})(); // named iife

//() // global scope ke poluation se problem hoti he then bachne ke liye iife ka use karte he

((name)=>{
  console.log(`database connected ${name}`);
})('pranshu');

((name)=>{
  console.log(`database connected ${name}`);
})('sandesh')