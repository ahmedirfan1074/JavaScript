// for of loop
// these loop don't need any condition(no of iteration) or increment. they own calculate lenght of the iterable object(array, object, maps)
// The for...of loop in JavaScript provides a concise way to iterate over the values of iterable objects.

//these(for-of, for-in) loop are applied on arrays mainly with strings or objects inside it
// ["", "", ""]
// [{}, {}, {}]

// syntax-> for of loop
// for (const element of object) { // here element is current value(iteration) and object is used in broader term it can be array of string, object or simply any iterable object.
// }

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greetchar of greetings) {
    if (greetchar === " ") {
        // console.log("space found")
    } else {
        // console.log(`Each char is ${greetchar}`)
    }
}

// Maps
// The Map object (data structure): This is a built-in JavaScript object that stores unique key-value pairs. updates when new value is assigned to the same key.
// Unlike JavaScript objects, Map objects can use any data type (including objects or functions) 
// as keys, not just strings or symbols. They also maintain the insertion order of elements and 
// offer better performance for frequent additions or deletions of data, especially with large datasets.

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
map.set('ab', "India")
map.set("USA", "Amarica");

// console.log(map);                                         
//  o/p 
// Map(4) {
//   'IN' => 'India',   
//   'USA' => 'Amarica',
//   'Fr' => 'France',  
//   'ab' => 'India'    
// }

// destructuring of map [ key, value]
for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const val of myObject) {
    // console.log(key);
// }
// we cannot use object as an iterator in for-of loop
// If you want to iterate over object values:
for (const val of Object.keys(myObject)) {
//   console.log(val); 
}
for (const val of Object.values(myObject)) {
  console.log(val); 
}

// in above example we have made an array of keys using Object.keys() on which we can prform iteration.

// summary - for of loop is used for iterating the values. works on Arrays, strings, Maps, Sets
//  it will not iterate object as the keys cannot be iterated  (will throw error unless object is iterable by converting the values of object into an array)