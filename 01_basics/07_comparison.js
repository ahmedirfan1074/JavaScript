// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 < 1)
// console.log(2 == 1)
// console.log(2 != 1)

// console.log("2" > 1) // comparison of diff datatype
// console.log("2" < 1) // here we get predictable result.

// but sometimes we don't get predictable result when we compare diff datatype

console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)

// here the == and other checks works differently 
// comparison convert null to a number then check it.

// == it checks only value.
// === strict check.
// it checks both datatype and value. 