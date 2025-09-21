// for of Loop

const arr = [1,2,3,4,5,6,7]

for (const num of arr) {
  //console.log(num);
  
}

const str = 'Pranshu'
for (const st of str) {
  //console.log("Enter :",st);
  
}

//Maps containes only value
const map =new Map()
map.set('In','India')
map.set('fr', 'France')
map.set('fr', 'France')

console.log(map);
for (const [key,value] of map) {
  console.log(key , ':-' ,value);
  
}

const MyObj = {
  'game' : 'gt',
  'Game1' :'pt'
}

// for (const [obj] of MyObj) {
//   console.log(obj);
  
//}

