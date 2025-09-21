// //const coding = ['js','java','ruby','python','c']

//  const value = coding.forEach( (item) =>{ // for each loop kush return lahi  karata he
//   //console.log(item);
//   return item
  
// })

// console.log(value);

const Mynum = [1,2,3,4,5,6,7,8,9]

// const values = Mynum.filter( (num)=>num>5) // basic filter
// console.log(values);

// const New_num = Mynum.filter( (item)=>{
//   return item>5
// })

// console.log(New_num);

// const newNums = []
// Mynum.forEach( (item)=>{
//   if(item>4){
//     newNums.push(item)
//   }
// } )
// console.log(newNums);

const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, rating: 4.3 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, rating: 4.8 },
  { title: "1984", author: "George Orwell", year: 1949, rating: 4.6 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951, rating: 3.9 },
  { title: "The Pragmatic Programmer", author: "Andrew Hunt", year: 1999, rating: 4.7 },
  { title: "Clean Code", author: "Robert C. Martin", year: 2008, rating: 4.9 },
];

const UserBooks =books.filter( (item)=>{
  return item.year <1950 && item.author === 'George Orwell'})

console.log(UserBooks);


