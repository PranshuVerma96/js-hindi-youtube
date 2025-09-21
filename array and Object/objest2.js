//const tinderuser =  new Object() // single ton object


const tinderuser = {}
tinderuser.id = '123'
tinderuser.name = 'syam'
tinderuser.isLogged = false
//console.log(tinderuser);

const regularUser = {
  email : 'somegmail.com',
  fullname :{
    userfullName :{
      firstName : 'pransh',
      lastName : 'verma'
    }
  }
}
console.log(regularUser.fullname.userfullName.firstName);

const obj1 ={'name' :'pranshu',
  b : 3
}

const obj2 ={lastname : 'verma',
  c :4
}
 const obj3 = {obj1,obj2}
// console.log(obj3);

//const obj4 = Object.assign(obj1,obj2)

//const obj5 = Object.assign({},obj1,obj2)
// console.log(obj4);
// console.log(obj5);

const obj5 = {...obj1,...obj2}
console.log(obj5);

const users = [
  {
  id :1,
  email : 'abcgmail.com'
,},
  {
  id :1,
  email : 'abcgmail.com'
,},
  {
  id :1,
  email : 'abcgmail.com'
,},
  {
  id :1,
  email : 'abcgmail.com'
,}

]

users[1].email

// console.log(tinderuser);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));

// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty('isLoggedin'));

// destructuring
const course = {
  courseName : 'javascript',
  coursePrice : '99',
  courseTeacher : 'hitesh'
}

//course.courseName

const {courseTeacher : teach} =course
console.log(teach);

const {coursePrice:papa} = course
console.log(papa);




// const navbar = (compeny)=>{

// }
// navbar(compeny = 'hitesh')

// {
//   'name' : 'hitesh',
//   'courseName' : 'js',
  
// }

// [
//   {},
//   {}
// ]





 



