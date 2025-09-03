// for each loop
// syntax using normal function=>  variable.forEach ( function (anyname){})
// syntax using arrow function=>  variable.forEach ( (anyname) => {})
// in call back function we don't give function name

const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach( function (val){
// console.log(val);
// } )

// by using arrow function
// coding.forEach( (item) => {
//     console.log(item);
// } )

// by declaring function outside
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// in for-each loop we can also excess the index or whole array in it according to the need.
// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

// using foreach loop in objects-array
const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});
// summary - forEach loop is a property/method of array which basicaly helps to iterate the object
// without giving the detail of starting index length etc