const name = "Rohan"
const repoCount = 20

// console.log(name+ " has "+repoCount + " repositories");  this type of syntax is outdated


// in modern days we use "back ticks". 
// in back ticks  we get the advantage of  string interpolation
// here we make place holders and inside them i can directly inject varaibles 

// here i can even add functions to these place holderes

console.log(`Hello my name is ${name.toUpperCase()} and my repository count is ${repoCount}`);


// another syntax to declare string

const gameName  = new String('Rohan Rocky')  // behind the scenes its invoking objects

console.log(gameName)


console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());   //this doesnt change the original value it creates a copy(stack)


console.log(gameName.charAt(2));   


console.log(gameName.indexOf('c'));   
console.log(gameName.indexOf('o'));   


 
const varName  = new String('Rohan-Rocky') 

console.log(varName.substring(1,4))
console.log(varName.substring(0,4))

console.log(varName.slice(-8,7))   // in slice you can use negative values whereas in substring you cant use negative values

const newStringOne = "     Rohan     ";
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://rohan.com/rohan%20shiva"

console.log(url.replace('%20', '-'));

console.log(url.includes('rohan'));



const userName = "Rohan-RC-Chan";

console.log(userName.split('-'));




