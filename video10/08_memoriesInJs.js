// stack memory(Primitive type), heap memory(non primitive)


// whenever stack memory is used then whatever variable you have declared you get a copy of it.

// whenever heap memory is defined(object) then we get reference to original value, i.e if anything we change that will be reflected in the original value

let myChromeName = "rohansdotcom"

let anotherName  =  myChromeName;
anotherName = "rohans.sse24dotcom"      // these are all primitive types and we have copy of them stored in stack

console.log(myChromeName)
console.log(anotherName)

// here these are non primitive types and these goes to heap, so when we refernce heap we dont get copies but we get original values refernce


let userOne = {
	email : "user@google.com",
	upi : "user@ybl"
}


let userTwo = userOne

userTwo.email = "rohans@google.com"

console.log(userOne.email)     // rohans@google.com
console.log(userTwo.email)       // rohans@google.com




// here both of them gets same reference in heap
// Whatever values you keep in stack you get a copy, whereas whatever value you put in heap you get a reference , that is whatever value you update it gets updated in the original value



// for reference diagram

// https://rockyjavascript007.blogspot.com/2025/05/javascript-stack-and-heap-memory.html







