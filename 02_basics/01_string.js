// strings

let string1 = "hello";
let string2 = `hi`;
let username = "irfan";

//old type of manipulating string
let oldGreeting = string1 + " " + "irfan";
console.log(oldGreeting);

// modern way of manupulating/printing string
// using `` in string called string interpolation
// ${} -> placeholder
let newGreeting = `hello ${username} !`;

let result = `value is ${2 * 2}`;
console.log(result);

// another way of declaring string as an object
let userName = new String("ahmedirfan");

// ******************************************************
// operations on string using inbuild functions

const handleName = new String("IrfanAhmed");
console.log(handleName[2]);
console.log(handleName.charAt(3));
console.log(handleName.indexOf("n"));
console.log(handleName.toUpperCase());
console.log(handleName.toLowerCase());

const newstring = handleName.substring(0, 8);
console.log(newstring);

const stringOne = handleName.slice(0, 3);
console.log(stringOne);
const stringTwo = handleName.slice(-5 , 10);
console.log(stringTwo);

const stringThree = "     hello     "
console.log(stringThree.trim()) // remove extra spaces
console.log(stringThree.trimStart())
console.log(stringThree.trimEnd())

const url = "https://github.com/Irfan20%Ahmed"

console.log(url.replace('20%' , '-'))
console.log(url.includes('Irfan')) // tells whether the given substring present in it or not

const gameName = "Battle Ground Mobile India"
console.log(gameName.split(" ")); // returns array of object
