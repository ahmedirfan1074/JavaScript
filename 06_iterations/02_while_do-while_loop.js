// while loop is used when we don't know no of iterations to perform

let index = 0;
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }

// how we use it in array
let myArray = ["flash", "batman", "superman"];

let arr = 0;
while (arr < myArray.length) {
  //console.log(`Value is ${myArray[arr]}`);
  arr = arr + 1;
}

// do-while loop
// this loop runs atleast once, then the condition is checked

let score = 11;

do {
  console.log(`Score is ${score}`);
  score++;
} while (score <= 10);
// as we said above it will print the do block once after checking it will stop