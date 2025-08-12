const marvel_heros=['thor','Ironman','spiderman']
const dc_heroes=['superman','flash','batman']
// marvel_heros.push(dc_heroes)
// console.log(marvel_heros);

// console.log(marvel_heros[3][1]);

// let all_Heros=marvel_heros.concat(dc_heroes)
// console.log(all_Heros); // retun new array

const all_new_heroes=[...marvel_heros,...dc_heroes]
// console.log(all_new_heroes);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array);

console.log( Array.isArray('pranshu'));
console.log( Array.from('pranshu'));

console.log(Array.from({name:'pranshu'})); //interesting case

let score1=100
let score2=200
let score3=400
console.log(Array.of(score1,score2,score3));






