const marvel_heroes = ['thor','Ironman','spiderman']
const dc_heroes = ['superman','flash','batman']

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);

// console.log(marvel_heroes[3][0]);

// const new_heroes =  marvel_heroes.concat(dc_heroes) // push are concat are done work approx same
// // console.log(marvel_heroes);
// console.log(new_heroes);

const all_new_heroes = [...marvel_heroes,...dc_heroes]
//console.log(all_new_heroes);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_array = another_array.flat(Infinity)
//console.log(real_array);

console.log(Array.isArray('Hitesh'))
console.log(Array.from('hitesh'));



console.log(Array.from({name : 'hitesh'})); // interesting 

let score1 =300
let score2 = 200
let score4 =900

console.log(Array.of(score1,score2,score4));

