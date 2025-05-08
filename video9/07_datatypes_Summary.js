// primitive data types

// 7 categories

// 1. String
// 2. number
// 3.Boolean
// 4. null
// 5.undefined
// 6. Symbol
// 7. BigInt


const score  = 100
const scoreValue  = 34.45

const isLoggedIn = false

const outsideTemperature = null

let userEmail;  // undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id ===  anotherId);       // false, here id and anotherId are not equal

const bigNumber = 2323133343434324332443214n;

console.log(bigNumber)

// reference types (non primitive)

//arrays, Objects, Functions

// arrays

const heroes = ["Iron Man", "Captain America", "Hulk"];


// Objects  - key-value pairs

let myObj = { 
	name : "Rohan",
	age: 23,
	grade: "A"
}





const myFunction = function(){
   console.log("Helllo Rohan");

}

myFunction();
console.log(typeof (bigNumber))  // bigint


console.log(typeof outsideTemperature); // object



console.log(typeof myFunction); // function





