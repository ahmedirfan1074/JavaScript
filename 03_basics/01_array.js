// array -> javascript arrays are resizable and contain a mix of different datatype 
// uses same reference point means changes made will affect original

const myArr = [9, 8, 7, 6, 5, 4]
const myArr2 = ["ironman", "superman", "thor"]
const myDetail = ["Irfan", "Ahmed", 18, true]
const myNewArr = new Array(1, 2, 3, 4, 5)

// console.log(myArr[0]) // zero based indexing
// console.log(myArr["2"])  

// array method 
let nums = [1, 2, 3, 4, 5, 6]

nums.push(7) // add element at the end
nums.push(8,9)

nums.pop()

nums.unshift(0) // this one add element at the start which causes problem and make system slow when work on array with large data

nums.shift() // delete data from start

console.log(nums.includes(4)) //tells whether they are present in array. (true/false)

console.log(nums.indexof(4)); // returns the index of first occurence of value in an array, -1 if not present

const newArr = nums.join("-") // return string after joining all the elemnt of the array , seperated by specified seperator string
console.log(nums)
console.log(newArr)

// slice and splice 

console.log("A ", nums) // original array

const mynA1 = nums.slice(1, 3) // start index included end index excluded, no change in the original array. Returns a copy of a section of an array.
console.log(mynA1) 
console.log("B ", nums) 

const mynA2 = nums.splice(1, 3) // both start, end index included, element delete from original array.Return an array containing the elements that were deleted.
console.log(mynA2)
console.log("C", nums)