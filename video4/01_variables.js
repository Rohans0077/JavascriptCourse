const accountId = 32324532
let accountEmail = "ROhan@google.com"
var accountPassword = "12345"
accountCity = "Delhi"    // works but is a bad practice

let accountState;



/* 
never use var, since it causes issue in block scope and functional scope
use only const and let

*/

// accountId = 23 // not allowed since it is defined as const

accountEmail = "rocky@google.com"
accountPassword = "0987"
accountCity = "Bangalore"

// prints in the form of table 

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


