const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// map => Calls a defined callback function on each element of an array, and returns an array that contains the results.
// const newNum = myNumbers.map( (value) => {return value * 10})
// console.log(newNum)

// ******************** chaining *******************

let newNum = myNumbers
            .map((value) => value * 10)
            .map((newvalue) => {return newvalue + 1})
            .filter((updatedValue) => updatedValue > 40)

console.log(newNum)