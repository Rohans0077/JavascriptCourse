const marvelHeroes = ["Captain America","Iron Man","Thor"]

const dc_heroes = ["Batman","Superman","flash"]

// hover through concat to get to know what that method does

const all_heroes = marvelHeroes.concat(dc_heroes)
console.log(all_heroes);


// 2nd method -  spread operator

const newHeroes = [...marvelHeroes, ...dc_heroes]

console.log(newHeroes);


const anotherArray = [1,2,3,[4,5,6],7,[6,7, [4,5]]]

const realAnotherArray = anotherArray.flat(Infinity)

console.log(realAnotherArray)


const realAnotherArray2 = anotherArray.flat(2)

console.log(realAnotherArray2)


const realAnotherArray3 = anotherArray.flat(1)    //here flat(x) here x represents the depth of array inside of array

console.log(realAnotherArray3)


console.log(Array.isArray("Rohan"))  //it is not an array here
console.log(Array.from("Rohan"))     // to convert to an array


console.log(Array.from({name:"Rohan"}))     //here it gives an empty array 

let score1  = 100
let score2  = 200
let score3  = 300

console.log(Array.of(score1,score2,score3))

// used for data scraping widely