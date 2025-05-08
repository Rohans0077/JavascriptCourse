// ************************numbers****************************************


const score = 400       // here it automatically assigns score as a number 
console.log(score)

const balance = new Number(100)   //  here i explicitly define as a number

console.log(balance);


console.log(balance.toString().length);

const number = 23.9213

console.log(number.toFixed(2));  //  to fix the precision


console.log(number.toFixed(1));

const otherNumber = 23.8966;

console.log(otherNumber.toPrecision(3));  // 23.9   here it rounds of 3 places including decimal, so here it rounds of to 23.9  

const secondNumber = 123.8966;    // 124   // here it takes 3 places and rounds off from left to right so it doesnt consider after decimal , so here it rounds of to 124  
console.log(secondNumber.toPrecision(3));


const hundreds = 1000000

console.log(hundreds.toLocaleString('en-IN'));
console.log(hundreds.toLocaleString('en-US'));





// open chrome and go to inspect and select console

// then type this 
// const balance = new Number(100)
// then type 
// balance
// and select the prototype

// you get some list of functions



// ****************************Maths**********************************

console.log(Math);

console.log(Math.abs(-4));  // negative values become positive and positive remains positive only

console.log(Math.round(4.3));   //it rounds off
console.log(Math.round(4.8));   //it rounds off




console.log(Math.ceil(4.2));   //it takes top value



console.log(Math.floor(4.9));   //it takes bottom value



console.log(Math.min(4, 3,6,5,3,5,7,2));   //it gives min value
console.log(Math.max(4, 3,6,5,3,5,7,2));   //it gives max value


console.log(Math.random());  // by default it gives values in range of 0 - 1



console.log((Math.random()*10) + 1);  //  it gives values in range of 1- 10 and since values range from 0 -1 there is a possibility that we get 0.0132, which we get as 0 so to avoid this we can add 1
console.log(Math.floor(Math.random()*10) + 1); 
 


const min = 10
const max =  20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

// go to chrome and inspect and do console 
// type 
// console.log(Math);

// you get a lot of functions









