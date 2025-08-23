const marvel_heros = ["Ironman", "Thor", "Spiderman"]
const dc_heros = ["Batman", "Superman", "Flash"]

// pushing an array into an array will treat it as a single data here(dc_heros) 
// marvel_heros.push(dc_heros) //modification is made on the array on which push is applied
// console.log(marvel_heros) 

// console.log(marvel_heros[3][1]) // access array inside array

const allHeros = marvel_heros.concat(dc_heros) // no modifiaction on original one
// console.log(allHeros)

// push works on same array whereas concat return a new array

// spread operation
const all_new_heros = [...marvel_heros, ...dc_heros] // spread all element, works on as many array you want to spread using '...'
// console.log(all_new_heros);

// flat function
// flat - Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth. stored into a new variable(array)
const nums = [1, 2, 3, [1, 2], 4, 5, [1, 2, [1, 2, 3], 3], 6]
const newNums = nums.flat(Infinity) 
// console.log(newNums)

console.log(Array.isArray("irfan")) // The Array.isArray() static method determines whether the passed value is an Array. true/false

console.log(Array.from("irfan")) //Array.from() is like a bridge that lets you safely convert anything that "looks like" or "acts like" an array into a real array, with all array methods available.
console.log(Array.from({name : "irfan"}))

const num1 = 100
const num2 = 200
const num3 = 300
console.log(Array.of(num1, num2, num3)) // of -> creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.