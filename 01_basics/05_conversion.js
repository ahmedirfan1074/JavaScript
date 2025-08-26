let number = 33

// gives the type of data stored
console.log(typeof number)
console.log(typeof(number)) // pass as a method

let newNumber = String(number)
console.log(number)
console.log(newNumber)

// conversion of string into number datatype
let string = "33abc"
console.log(typeof string);
console.log(string);

let newNum = Number(string) // explicit conversion of String(string) into number
console.log(typeof newNum);
console.log(newNum); // this will give NaN(not a number) which also a number datatype
// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0

let valueNull = null
let newValueNull = Number(valueNull)
console.log(newValueNull)

let valueUndefined = undefined
let newValueUndefined = Number(valueUndefined)
console.log(newValueUndefined)

let boolean = false
let newBoolean = Number(boolean)
console.log(newBoolean)


// 1 => true
// 0 => false
// "" => false
// "string" => true