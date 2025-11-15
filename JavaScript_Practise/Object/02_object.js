// const tinderUser =  new Object ();
//this is a singleton object

const tinderUser = {}

 tinderUser.id = "890";
 tinderUser.name = "pranhsu";

// console.log(tinderUser);

const regularUser = {
    email : 'some@gmail.com',
    fullname :{
        userFullName :"hitesh",
        lastName : "verma"
    }
}
//console.log(regularUser.fullname.lastName);



const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: 'c',
    4 : 'd'
}
// this is the two method to concat the obejct
const obj3 = Object.assign( {} ,obj1,obj2);

const obj4 = {...obj1,...obj2};
console.log(obj4);

console.log(obj3);

// this is function the make the object keys in the a array
console.log(Object.keys(obj4));
console.log(Object.values(obj4));
console.log(Object.entries(obj4));

console.log(obj4.hasOwnProperty('2'));








