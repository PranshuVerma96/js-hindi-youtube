
const { lazy } = require("react");

const coding = ['js','java','ruby','python','c']

coding.forEach( function (item){
  //console.log(item);
});

coding.forEach( (i)=> {
  //console.log(i)
});

function printMe(item){
  console.log(item);
  
}
// coding.forEach(printMe)

// coding.forEach( (item,index ,arr)=> {
//   console.log(item ,index , arr);
  
// } )

const Mycoding = [
  {
    languageName : 'javascript',
    lanFile : '.js'
  },
   {
    languageName : 'Java',
    lanFile : '.java'
  },
   {
    languageName : 'python',
    lanFile : '.py'
  }
]

Mycoding.forEach( (item) =>{
  console.log(item.lanFile);
    // console.log(item.languageName);
})

