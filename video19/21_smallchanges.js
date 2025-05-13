function loginUserMessage(username = "sam"){   // here sam is the default value if nothing is passed
if(!username){
console.log("Please enter  a username")
 return 
}

	return `${username} just logged in`;
}

console.log(loginUserMessage("rohan")) 
console.log(loginUserMessage()) 