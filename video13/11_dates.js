// Date object

let myDate  = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toJSON());


console.log(typeof myDate)


let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString());  // jan 23 2023


let mysecondDate = new Date(2023, 0, 23, 5, 3)
console.log(mysecondDate.toLocaleString());  



let mythirdDate = new Date("2023-01-14");
console.log(mythirdDate.toLocaleString());  


let myfourthdate = new Date("01-14-2023");
console.log(myfourthdate.toLocaleString());  


let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myfourthdate.getTime());
console.log(Math.floor(Date.now()/1000));



let newDate = new Date()
console.log(newDate);

console.log(newDate.getMonth() +  1);
console.log(newDate.getDay());


newDate.toLocaleString('default', {
	weekday: "long",
	
})





