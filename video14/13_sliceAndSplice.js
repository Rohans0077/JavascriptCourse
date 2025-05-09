let myArr = [0,1,2,3,4,5,6]

// slice and Splice

console.log("A ",myArr);

const myNewArray = myArr.slice(1,3)
console.log(myNewArray);
console.log("B ", myArr)


// splice

// here "splice" operation manipulates the original array and "slice" doesnt manipulate original array

const myNewArray2 = myArr.splice(1,3)     //splice operation removes the element from original array and puts them into another array


console.log(myNewArray2);   

console.log("Original Array ", myArr)


