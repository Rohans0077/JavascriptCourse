// singleton 

//Object Literals - to declare objects

//const jsUser = {}      //this is an object


const mysymbol = Symbol("key1")

const jsUser = {
	name: "Rohan",
	"fullname" : "Rohan.s",
	[mysymbol] : "mykey1",     //to refer a symbol
	age: 23,
	location : "Bangalore",          //here key values are treated as string
	email : "rohan@google.com",
	isLoggedIn : false,
	lastLoginDays : ["Monday", "Saturday"]   // we can also give objects , arrays as well
}      


console.log(jsUser.name)
console.log(jsUser.email)
console.log(jsUser.fullname)
console.log( jsUser[mysymbol])


console.log(jsUser["location"])               //key values are treated as string


jsUser.email = "Rohan@chatgpt.com"

Object.freeze(jsUser)   // here it gets locked i cannot change the values

console.log(jsUser.email)

jsUser.email = "Rocky@frf.com"   //even if i change also the value remains same and doesnt change since it is freezed(locked)

console.log(jsUser.email)
console.log(jsUser)


jsUser.greeting = function(){
	console.log("Hello Js User");
}


console.log(jsUser.greeting)   //undefined


// console.log(jsUser.greeting())    // here it doesnt work because we have locked it or freezed the object so refer 17_adding_function.js file over there i have removed object freeze