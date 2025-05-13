
function sayMyName(){      // this is my function definition
	console.log('R')
	console.log('o')
	console.log('h')
	console.log('a')
	console.log('n')
}

sayMyName()      //function reference

function addTwoNumbers(number1, number2){    // here we call it as parameters
	console.log(number1 + number2);

}

addTwoNumbers();    // Nan since no arguments have been passed
addTwoNumbers(4,3);        // here we call it as arguments as we pass values inside


addTwoNumbers(4,"3");        // 43
addTwoNumbers(4,"a");        // 4a
addTwoNumbers(4,null);       // 4
     

const result = addTwoNumbers(4,8); // here we get value as 12 sunce we have used printed it in function

console.log("result: ", result)  // but here we get value undefined because we havent returned the value in function

function  numbersadding(number1, number2){    // here we call it as parameters
	let result = number1 + number2
	return result;

}


let res = numbersadding(8,10)
console.log(res)    // here i get 18


function loginUserMessage(username){
if(!username){
console.log("Please enter  a username")
 return 
}

	return `${username} just logged in`;
}

console.log(loginUserMessage("Rohan"))


console.log(loginUserMessage(""))


console.log(loginUserMessage())   //undefined







