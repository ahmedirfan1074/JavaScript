let score = 100
console.log(score);

const balance = new Number(400)
console.log(balance);

console.log(balance.toString().length)
console.log(balance.toFixed(2)) // return stored value upto 2 decimal. tofixed(precision)

const otherNumber = 124.7845
console.log(otherNumber.toPrecision(4)) // gives precise value 
console.log(otherNumber.toPrecision(3))
console.log(otherNumber.toPrecision(2))

const hundreds = 100000000
console.log(hundreds.toLocaleString()); // return value in international system
console.log(hundreds.toLocaleString('en-IN')) // return value in indian system

// // ******************************* Maths **********************************

console.log(Math)
console.log(Math.abs(-5)) // return positive value
console.log(Math.round(4.6)) // round off
console.log(Math.ceil(4.2)) // roundoff to upper value
console.log(Math.floor(4.9)) // round off to lower value
console.log(Math.min(2, 3, 1, 5, 9))
console.log(Math.max(2, 3, 1, 5, 9))

console.log(Math.random()) // this return random value [0,1)
console.log(Math.random() * 10) // this will return value [0,10)
// to avoid getting 0 value we add 1
console.log((Math.random() * 10) + 1) // this will give value [1,10)
console.log(Math.floor(Math.random() * 10 + 1)); // this will return only positive integer [1,10]

// if we wanted to get random value between some range for example in dice [1,6]

const min = 1
const max = 6

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // this will return value [1,6]