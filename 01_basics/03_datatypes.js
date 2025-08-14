/*
some data types

Number - it stores numerical value (integer/whole/double numbers) from -2^53 to 2^53.
bigint - stores value which cannot be stored by 'Number'.
string - stores sequence of symbols.
boolean - for true and false.
sumbol - are unique and immutable

undefined - value of variable is undefined when initialised and not declared 

null - it is a standalone value.It is also an object
object

*/

// eg. number datatype
var score = 100;
let weight = 10.2;
let pi = 3.1424;
let getScore = score;

// eg. string datatype
let fullName = "Irfan Ahmed";
let city = "delhi";

// eg. boolean datatype
let isLoggedIn = true;

// eg. objects datatype declaration
let teatype = ["lemon tea", "orange tea", "oolong tea"]; //sequence of object,multiple object
let user = { firstname: "Irfan", lastname: "Ahmed" }; // single object

console.log(getScore);
console.log(fullName);
console.log(isLoggedIn);
// eg of undefined
let country;
console.log(country);

// we can use typeof to check data type
console.log(typeof country) // undefined
console.log(typeof null) // object