// comparison operators

 
// console.log(2>1)
// console.log(2<1)
// console.log(2>=1)
// console.log(2<=1)
// console.log(2!=1)
// console.log(2==1)

// comparison between different dataypes

// console.log("2" > 1)             //true
// console.log("02" > 1)                 //true



console.log(null > 0)       // false
console.log(null == 0)       //false
console.log(null >= 0)        //true         here null gets converted to 0

// The reason is that the equality check == and comparison >,<,>=,<= works different.The
// Comparisons convert null to a number, treating it as 0 . 
// Thats why null>= 0 is true and null>0 is false


console.log(undefined == 0);         // false
console.log(undefined > 0);         //false
console.log(undefined < 0);     // false


// ===  this strictly checks the value i.e not only value but also its datatype


console.log("2" == 2);        // true
console.log("2" === 2);    // false  because here datatype is different











