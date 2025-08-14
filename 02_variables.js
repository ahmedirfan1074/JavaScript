// variables and constant are used to store some data inside the memory

const empId = 14245
let empMail = "abc@mail.com"
var empPassword = "zxc123"
let empState; // JS assign undefined to the variable which are initialised but not declared.

empCity = "delhi" // you can also declare variable without using let or var. But it is recommended not to use this.

/* 
prefer not to use var in JS
issues in block and fuctional scope
*/

// empId = 1234 // you cannot change the valur of constant

empMail = "xyz@mail.com"
empPassword = "qwe789"
empCity = "mumbai"

// Process.stdout.write(empId) // this will print error as constant cannot be changed

console.table([empId,empMail,empPassword,empCity,empState]); // print in tabular form

