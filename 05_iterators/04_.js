const myObject = {
  js : 'javascript' ,
  cpp : 'c++' ,
  rb : 'ruby'                                                     }
  for (const key in myObject) {
      //console.log(`${key} shortcut is for ${myObject[key]}`);
      
    }
  
const programming = ['js' ,'java' , 'c++' ,' python']    
for (const key in programming) {
  //console.log(programming[key]);
  
  }

 const coding =['js' , 'java', 'cpp' ,'python']
 
 coding.forEach( function (item){
  //onsole.log(item);
  
 })

 coding.forEach( (item,index ,arr) =>{
 // console.log(item  ,index ,arr);
  
 })

 const myCoding= [{
  languageName : 'javascript',
  languageFileName : 'js'
 },
 {
   languageName : 'java',
  languageFileName : 'java'
 },
 {
   languageName : 'c++',
  languageFileName : 'cpp'
 }
]

myCoding.forEach((item) =>{
  console.log(item.languageName);
  
})