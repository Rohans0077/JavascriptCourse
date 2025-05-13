function calculateCartPrice(val1, val2, ...number1){   //spread operator or rest operator
     
return [number1 , val1, val2]


}


console.log(calculateCartPrice(2,200,400,500))      //if we want to input multiple values


// here val1 gets 2
// here val2 gets 200

// number1 will have 400 , 500 as an array


// Object

const user = {
	username : "Rohan",
	price:199
}

// how to pass object to a function

function handleObject(anyobject){

	console.log(`The username is ${anyobject.username} and the price is ${anyobject.price} ` )

}

// call the function

handleObject(user)

// giving object to a function itself

handleObject({
	username: "Raone",
	price : 299
})


// to pass arrays

const myNewArray = [200,400,600,800]

function  returnSecondValue(getArray){
	return getArray[1]

}

console.log(returnSecondValue(myNewArray));


console.log(returnSecondValue([1,2,3,4,5]));


