const marvel_heroes = ["Thor", "Spiderman", "Ironman"];
const dc_heroes = ["Batman", "Superman", "Wonderwoman"];

// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// marvel_heroes.concat(dc_heroes);
// console.log(marvel_heroes);

const all_new_heroes = [...marvel_heroes, ...dc_heroes];
//console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [4, 1, 0]]];

const real_another_array = another_array.flat(Infinity);

console.log(real_another_array);



console.log(Array.isArray("Harsh"))
console.log(Array.from("Harsh"))
console.log(Array.from({name: "Harsh"})) // it will give empty array because object is not iterable

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));

