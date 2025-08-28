// scope is "where a variable lives" and where you can access it.
// javascript provides 3 type of scope (global, block, functional)

// global scope
// A variable declared outside of any function or block has global scope.
// It can be accessed anywhere in the code.
// Variables declared with var, let and const are quite similar when declared outside a block.

// block scope. this came in ES6
// variables declared inside a block is only accessible within that block.
// variable declared with let, const are blocked scoped and using var will create a global variable

let a = 100; // global variable
const b = 200; // global variable
var c = 300; // global variable

if (true) {
  let a = 10; // block scoped
  const b = 20; // block scoped
  var c = 30; // global scoped. as using var create global scope inside block. it is excessible outside block also
  //   console.log("inner : ", a);
}
// console.log(a)
// console.log(b)
// console.log(c); // we get 30. because JS interprets code line by line. c will store 30 from 300

// local/function scope
// Variables declared inside a function are only accessible within that function.
// Variables with the same name can be used in different functions.
// variables declared with let, const and var are functional scoped when declared inside a function.

function carDetail() {
  let carName = "honda city";
  const carNo = 1111;
  var carColor = white;
  //   console.log(carName);
  //   console.log(carNo);
  //   console.log(carColor);
}

// console.log(carName); // this will give error as this declared inside function
// console.log(carNo); // this will give error as this declared inside function
// console.log(carColor); // this will give error as this declared inside function

// nested funtion scope
// variables declared in parent function are excessible to child function
// same applies on nested loops and nested conditional statement

function one() {
  let firstName = "Irfan"
  function two() {
    let lastName = " Ahmed"
    console.log(firstName + lastName); // no error as for child function parent variable is like global variable
  }
  two()
  // console.log(lastName) // give error as we are excessing it outside block
}
// one()

// ********************hoisting(overview)********************
console.log(addone(5))
function addone(num) {
    return num + 1
}
// calling function before initialization. execute without error


console.log(addTwo(5))
const addTwo = function (num) {
    return num + 2
}
// calling function before initialization. give error