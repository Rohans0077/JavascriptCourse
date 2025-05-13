// const chai = function(){
// 	let username = "Rohan"
// 	console.log(this.username)  // undefined
// }

// chai()



const chai = (/* parameter */) => {
	let username = "Rohan"
	console.log(this)  // undefined
}

chai() 


// arrow function syntax

// () => {}

	const addTwo = (num1, num2) => {
		return num1 + num2;
	}      // holding a function inside the variable named addTwo

	console.log(addTwo(3,4))