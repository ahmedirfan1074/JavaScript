// singleton -> singleton object is simply an object that is created only once and provides a single global point of access.a singleton ensures there’s only one instance throughout the application.

// Object.create -> we can create singleton object using this

// object literals -> this is the concept of creating multiple instance of a object
// data of the object are stored as a (key, value) pair here (name, full name, age) etc are key and (irfan, Irfan Ahmed, 22) etc are value.
// these keys are stored as string inside system and can be written inside "" or without ""

const mySym2 = Symbol() // symbol without discription
const mySym = Symbol("key1") // symbol created with discription

const user = {
    name: "irfan",
    "full name": "Irfan Ahmed", // can only be accessed using ["key"]
    [mySym]: "mykey1", // using symbol as a key, if we write directly mySym JS wil treat it as a string key just like name
    age: 22,
    location: "Delhi",
    email: "xyz123@mail.to",
    isLoggedIn: false,
    lastLogInDays: ["Monday", "Wednesday", "Friday"]
}

// in above example we have created object and define some properties of it
// to access objects we have two ways

// console.log(user.email)
// console.log(user["email"])
// we cannot access "full name" using . , it can only be accessed using ["key"]
// console.log(user["full name"])
// console.log(user[mySym]) // symbol can be accessed only using []

user.email = "abc987@gmail.com" 
// Object.freeze(user) //freeze -Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
user.email = "irfan@help.com"
// console.log(user) // here irfan@help.com is not printed because of freeze method

user.greeting = function() {
    console.log("hello JS user")
}
user.greetingTwo = function() {
    console.log(`hello JS user, ${this.name}`) // using this. we can access the keys of the object.
}


console.log(user.greeting())
console.log(user.greetingTwo())