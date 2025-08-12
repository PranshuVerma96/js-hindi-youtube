// IIFE = Immediatey Invoked Function Expression (IIFE)

// function chai(){
//   console.log( 'Db connected');
  
// }
// chai()

(function chai(){
  console.log( 'Db connected');
  // name iife
})();

( ()=>{
  console.log(('Db connected two'));
  
})();


( (name)=>{
  console.log((` DB connected ${name}`));
  
})('Pranshu')

