// for-in loop
// The for...in loop in JavaScript iterates over the enumerable string properties of an object.
// It provides a way to access each key (property name) of an object.
// basically the major difference is for-in iterates on the key aspect whereas for-of works on the value.
const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in myObject) {
  // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
  console.log(key) // this give the index as output whereas in for-of loop this was giving value
  console.log(programming[key]);
}
for (const keys of programming) {
    console.log(keys)
    console.log(programming[keys])
}
// just like in object we applied for-of loop and saw can we iterate on object using for-of loop.
// let's see can we use for-in loops to iterate over a map

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

for (const key in map) {
  // console.log(key);
}
// these will not print any thing in map as for-in loop works only on key of iterable object

// summary - for in loop is used for iterating Enumerable property keys. works on Objects (and arrays, but not ideal)
// these loop return the keys as string like if there is another datatype in a particular key it will convert it into string