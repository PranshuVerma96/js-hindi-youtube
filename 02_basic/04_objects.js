// const tinderUser=new Object()
// console.log(tinderUser);

const tinderUser={}

//  tinderUser.id= '123abc'
//  tinderUser.name='pransh'
//  tinderUser.isLoggedIn=false

// //  console.log(tinderUser);


// const regularUSer={
//   email: 'p.gmail.com',
//   fullname:{
//     userFullname:{
//       firstName: 'pranshu',
//       LastName: 'pranshu'
//     }
//   }
// }

// // console.log(regularUSer.fullname.userFullname.LastName);

// const obj1={1:'a',2: 'b' }
// const obj2={3:'a',4: 'b' }
// const obj4={5:'a',6: 'b' }

// // const obj3={obj1,obj2}

// const obj3=Object.assign({},obj1,obj2,obj4)

// const obj5={...obj1,...obj2,...obj4}
// console.log(obj5);

// const user=[
//   {
//     1:3
//   }
// ]

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));

// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course={
  courseName: 'js in hindi',
  price: '999',
  couseTeacher: 'hitesh'
}

const {courseName}= course
console.log(courseName);

const{couseTeacher:teacher}=course

console.log(teacher);

// {
//   'name':'hitesh',
//   'courseName':'js in hindi',
//   'price': 'free'
// }









