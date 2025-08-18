// primitives -> number, string, boolean, null, undefined, symbol, BigInt
// they are stored in stack memory and a copy of variable is passed for use
// there is no effect on original when value is change somewhere else

const score = 100
let newNumber = 100.3

const name = "Irfan"

let isLoggedIn = false

let ousideTemp = null

let newProject

// symbol uniquely identify variable
let sym1 = Symbol("@")
let sym2 = Symbol("@")
// although the value are same but sym1 And Sym2 are different
console.log(sym1 === sym2)

// non-primtives -> array, object, function
// they are stored in heap memory and reference of the variable is passed for used
// any change will affect the original

// array
let teaName = ["lemon tea" , "orange tea" , "oolong tea"]
console.log(typeof(teaName));

// object
let user = {
    firstName : "Irfan",
    lastName : "Ahmed",
    age : 22
}
console.log(typeof user);


// function
let myFunction = function(){
    console.log("hello world")
}

console.log(typeof myFunction); 
