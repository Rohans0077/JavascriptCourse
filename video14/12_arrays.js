

const myArr = [0,1,2,3,4,5]
console.log(myArr[4])




// 2nd method to declare arrays

const myArr2 = new Array("Iron Man", "Captain America");

console.log(myArr)
console.log(myArr2)

// array methods

myArr.push(6)
myArr.push(7)
myArr.push(7)   //pushes element to the array


myArr.pop()   // removes the last element in an array

console.log(myArr)



myArr.unshift(9);    //9 gets inserted at the start of an array

console.log(myArr)


myArr.shift();    //here removes the first element in an array

console.log(myArr)

console.log(myArr.includes(9))  // whether the element is present in array or not

console.log(myArr.indexOf(9))  // -1 since value doesnt exist


console.log(myArr.indexOf(7))  // 7 since value exist


const newArray = myArr.join()

console.log(myArr)
console.log(newArray)       //gets converted to String

console.log(typeof newArray)


