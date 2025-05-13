
// here this works 
console.log(addone(5));

// here i have just declared
function addone(number){

	return  number + 1
}


// 2nd one
// here i get an error if i declare it previously before declaring
// This concept is called as hoisting in js

addTwo(5)

// here in this function i have declared as well as holded in a variable named addTwo so it gives me an error since i havent declared the variable before calling it

const addTwo = function(number){
	return number + 2
}



