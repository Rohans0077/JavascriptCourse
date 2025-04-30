let score = 33

console.log(typeof score)

score = "33"

console.log(typeof score)

let valueInNumber = Number(score)   // converting string to number

console.log(typeof valueInNumber)         


let score2 = 34
let valueInString = String(score2)          // converting number to string
console.log(typeof valueInString)


let score3 = "32abc"
console.log(typeof Number(score3))
console.log( Number(score3))     // NaN - Not a number



let score4 = null
console.log(typeof (score4))
console.log(typeof Number(score4))
console.log(Number(score4))    // gives 0


let score5 = undefined
console.log(typeof score5)
console.log(typeof Number(score5))
console.log(Number(score5))    // NaN

let score6 = true
console.log(typeof score6)
console.log(typeof Number(score6))
console.log( Number(score6))    //1


let score7 = false
console.log( Number(score7))    //0


let score8 = "Rohan"
console.log(typeof Number(score8))
console.log( Number(score8))            // NaN


let isLoggedIn  = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)    // converting number to boolean
console.log(booleanIsLoggedIn)    // true


isLoggedIn  = ""

 booleanIsLoggedIn = Boolean(isLoggedIn)    
console.log(booleanIsLoggedIn)    // false


isLoggedIn  = "Rohan"

 booleanIsLoggedIn = Boolean(isLoggedIn)    
console.log(booleanIsLoggedIn)    // true

let value = 33
console.log(String(value))
console.log(typeof String(value))