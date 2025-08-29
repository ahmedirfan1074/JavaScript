// About this keyword
// it talks about current context. its value depend how it is called, not where it is written

// using inside browser, in global context it refers to windows
// using inside node environment it refers to global object
// using it inside node environment in strict mode 'this' in global context is undefined.

const user = {
  username: "irfan",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`); // using it inside a object refers to that object.And using it we can access any property of that object inside it. here we are talking about username only.
    console.log(this); //  it refers to the current context (the object whose scope you’re in).
  },
};

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage() // here we have updated username to sam. So this will print sam instead of

// console.log(this); // here this is refering to global object, we get (empty object) {} as o/p


// this inside a function

function chai(){
     console.log(this) // this will give us many value as an output as an object, it tell us that it is a object(special object)
}

// function chai() {
//     let username = "irfan"
//     console.log(this.username); // here we are getting undefined because we cannot access 
//     variables likr this inside a function. it works in context of object.
// }

// chai()

// const chai = function () {
//     let username = "irfan"
//     console.log(this.username);
// }

// Arrow function
// in above two ex we saw how to initialise function
// using arrow function we can declare it in one more way
// const/let variable = function () {} or const/let variable = () => {} both are same 
// but we get many options when we use arrow funtion

// const chai = () => {
//   let username = "irfan";
//   console.log(this); // 'this' works same here also as it is also a function.
//   console.log(this.usename); 
// };

// chai()

// basic arrow funtion
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2
// or
// const addTwo = (num1, num2) => ( num1 + num2 )

// above 3 examples are same 
// when you are using curly brackets you have to use return keyword. in 2nd and 3rd example node will implicit return the value we don't have to write it. this is for single expression only

// impicit return in object 
// returning an object literal, we have to use paranthesis() for other values it's our choice
const addTwo = (num1, num2) => ({ username: "irfan" });

// console.log(addTwo(3, 4));
