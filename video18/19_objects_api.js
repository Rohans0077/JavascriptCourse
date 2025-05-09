const course = {
	coursename : "Javascript",
	price : "9990",
	courseInstructor : "Hitesh"
}

const {courseInstructor}  = course

console.log(courseInstructor)


const {courseInstructor: instructor}  = course   // here instead i dont want courseInstructor i can give it another name as instructor

console.log(instructor)


// {
// 	"name": "Rohan",
// 	"coursesname" : "js",
// 	"price" : "free" 
// }








