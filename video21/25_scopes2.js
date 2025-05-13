// Global Scope -> whatever varaible we declare outside is accessible anywhere
// local scope -> variables that we declare inside a function or scope is accessible only within that scope and cannot be accessible outside


// imp point : never use var, only use let and const

var number3 = 300

let number5 = 100;
console.log(number3)


if (true) {
	let number1 = 10
    const number2 = 20
    var number3  = 30
    let number5 = 1999;
    console.log("Inside : ",number5);
    
	
}

// console.log(number1)         // i get an error for this 
// console.log(number2)      // i get an error for this since it is defined in that scope and not outside


console.log(number3)
    console.log("outside : ",number5);

