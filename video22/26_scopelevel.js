// nested scope

// simple example : small children can ask for icecream from parents but parents cannot ask for icecream from children
// here function two is small children and function one is parent

function one(){
	const username = "Rohan"

	// function inside function

	// here function two can access contents of function one because function two is written inside of function one but function one cannot access contents of function two


	function two(){
        const website = "youtube"
		console.log(username);   
		
	}



	// uncommenting this gives error

	// console.log(website);   //function one cannot access contents of function two
two()

}

one()
