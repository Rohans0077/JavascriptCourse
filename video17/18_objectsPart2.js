// const tinderUser = new Object()  this is a singleton object

const tinderUser = {}      // this is a non singleton object

// both represent the same thing that is empty Object


console.log(tinderUser)

tinderUser.id = "123abc"

tinderUser.name = "Sammy"

tinderUser.isLoggedIn = false

const regularUser = {
	email : "Sam@gmail.com",
	fullname : {
		userfullname : {
			firstname : "Rohan",
			lastname : "S"
		}
	}
}

console.log(regularUser.fullname)
console.log(regularUser.fullname.userfullname)
console.log(regularUser.fullname.userfullname.firstname)
const obj1 = {
	1:"a",
	2:"b"
}

const obj2 = {
	3:"a",
	4:"b"
}


const obj3 = {obj1,obj2}

console.log(obj3)

const obj4 = Object.assign({},obj1,obj2)  //for combining objects

const obj5 = { ...obj1, ...obj2}   // spread operator used in modern days
console.log(obj4)
console.log(obj5)

const users = [
	{
		id: 1,
		email: "roh@gmail.com"
	},
	{

	},
	{

	}
]

users[1].email

console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))   //every key value pair will be put into an array


console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // true
console.log(tinderUser.hasOwnProperty('name'));
console.log(tinderUser.hasOwnProperty('age'));   // false