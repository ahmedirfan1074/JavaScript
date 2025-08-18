// primitives -> number, string, boolean, null, undefined, symbol, BigInt
// they are stored in stack memory and a copy of variable is used
// there is no effect on original when value is changed as it is copy

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
// any change will affect the original as the reference is passed

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

// ******************************memory************************************

// stack(primitives)
/*
as the data of the primitive datatype is stored in stack memory, assigning it to another variable and changes made in other variable doesn't affect the first variable because the copy is send not the reference
*/ 

let myAccountName = "ahmedirfan"
let anotherAccount = myAccountName
anotherAccount = "irfanahmed"

console.log(myAccountName)
console.log(anotherAccount)

// heap(non-primitives)
/*
variables are stored in stack memory and reference to heap where data is stored.If it is assigned to some other variable, changes made in other variable will affect the original stored data as it also reference to the same data not to a copy.
*/ 

let userOne = {
    firstname : "Irfan",
    mail : "xyz@mail.com"
}

let userTwo = userOne

userTwo.mail = "abc@mail.com" 

console.log(userTwo)
console.log(userOne)
