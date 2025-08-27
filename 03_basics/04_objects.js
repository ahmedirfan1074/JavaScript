// const tinderUser = new Object() // singleton object

const tinderUser = {};

tinderUser.id = "1a2b3c";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = false;

// console.log(tinderUser)

// nested object
const newUser = {
  email: "user@mail.com",
  userName: {
    userFullName: {
      firstName: "Irfan",
      lastName: "Ahmed",
    },
  },
};
// accessing nested object
// console.log(newUser.userName.userFullName.firstName)

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj4 = { 5: "e", 6: "f" };

// const obj3 = {obj1, obj2} // this will give object inside inside object just like array
// const obj3 = Object.assign({}, obj1, obj2, obj4) // Object.assign(target,source) copy properties of source to target. Returns the target object.
// giving {}(empty object) as a target is good practice.
const obj3 = { ...obj1, ...obj2, ...obj4 }; // using spread

// console.log(obj3)

// array of object, usually data is stored in database like this

const user = [
  {
    id: 1,
    email: "a@mail.com",
  },
  {
    id: 2,
    email: "b@mail.com",
  },
  {
    id: 3,
    email: "c@mail.com",
  },
  {
    id: 4,
    email: "d@mail.com",
  },
];

// accessing array of object
user[1].email;

console.log(tinderUser);

console.log(Object.keys(tinderUser)); // this returns an array containing all the keys and values
console.log(Object.values(tinderUser)); // o/p [ '1a2b3c', 'Sam', false ]
console.log(Object.entries(tinderUser)); // o/p [ [ 'id', '1a2b3c' ], [ 'name', 'Sam' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty("name"));

// +++++++++++++++ object de-structuring ++++++++++++++++

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh",
};

// to access object we use course.price or by course["price"]
// but if we wanted to work on this again and again it would be time consuming.

// for this we use de-structuring
const {courseInstructor: instructor} = course
// inside curly brackets we write which value we wanted to extract and using this '=' we write from where we have to extract value

// we can use only courseInstructor or we can give a short name using : 
console.log(courseInstructor)
console.log(instructor)
// both will give same value

