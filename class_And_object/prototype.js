


let myHeros = ['pranshu','sandesh','hitesh']
let heroPower = 
{
  pranshu : 'hammer',
  sandesh : 'sling',

  getPranshuPower : function(){
console.log(`spidy power is ${this.pranshu}`);

  }

}

let tempArray = []
Object.prototype.hitesh = function(){
  console.log(`hitesh is present is all object`);
  
}

// heroPower.hitesh() 
// myHeros.hitesh()
// tempArray.hitesh()

Array.prototype.heyHitesh = function(){
  console.log(`hey hitesh`);
  
}
myHeros.heyHitesh()
//heroPower.heyHitesh()

//inheritance

const User ={
  name :'cahi',
  email :'google.com'
}
 const Teacher = {
  makeVideo :true
 }
 const TeacherSupport = {
  isAvailabe : false
 }

 const TaSupport = {
  makeAssignment : 'js assnigment',
  fullTime : true,
  
  __proto__:TeacherSupport
 }

 Teacher.__proto__ = User

 // modern sntax
 Object.setPrototypeOf(TeacherSupport,Teacher)
//  console.log(TeacherSupport.makeVideo);
//  console.log(TeacherSupport);
 
 


let anotherUserName = 'ChaiaurCode    '

String.prototype.trueLength = function(){
  console.log(`${this}`);
  

  console.log(` true lenght is :${this.trim().length}`);
}
  
  anotherUserName.trueLength()
  'hite sh '.trueLength()
  'iceTea'.trueLength()


