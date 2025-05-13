// suppose iam registering a user to my website , Iam creating object for it


// to refer to current context we use this keyword
const user = {
  username : "Rohan",
  price : 1000,

  welcomeMessage : function(){
	console.log(`${this.username} , welcome to website`);
	console.log(this);
	
  }


}
 
user.welcomeMessage()   // default value

// here i changed the current context, so therefore previous context gets changed


user.username = "Sam"  // changing value changing context
user.welcomeMessage()

console.log(this)         // {} here iam in global environment so current context is empty



function chai(){
  let username = "Rohan"
  console.log(this.username)   // i cannot use "this" keyword in functions
}
 
chai();