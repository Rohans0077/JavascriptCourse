// const addTwo = (num1, num2) =>{ return num1 + num2}
// here when u use curly braces({}) you have to always write return keyword



// another way applicable for any single line
const addTwo = (num1, num2) =>  num1 + num2

console.log(addTwo(3,5))


// if we use parenthesis "()" we dont have to write return keyword
// This is called as implicit return where we do not use return keyword
const addThree = (num1, num2,  num3) =>  (num1 + num2 + num3)

console.log(addThree(3,5, 6))


// in explicit return we use the keyword return 


// if i want to return  an object

const messageObj = () => ({username : "Rohan",age: 23})

console.log(messageObj())



// const myArray = [2,5,3,7,8]











