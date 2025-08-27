// FUNCTION basically  creates a reusable block of code designed to perform a specific task

function greeting() {
  console.log("H");
  console.log("E");
  console.log("L");
  console.log("L");
  console.log("O");
}

// greeting() // this is the function call
// only using greeting will give us the reference, greeting() will execute the function.

function addNumber1(number1, number2) {
    console.log(number1 + number2)
}


// const result = addNumber1(3, 5) 
// (number1 and number2) they are called parameters and when calling a function we pass arguments here (3, 5).
// console.log(result) // this will give undefined as nothing has returned back after function call, so if there is nothing stored in a variable it is undefined.


function addNumber2(number1, number2) {
//   const result = number1 + number2;
//   return result;
    return number1 + number2
}

const result2 = addNumber2
// console.log("Result : ", result2)

// return keyword is used inside function to
// terminate function execution.Any lines of code after the return statement within the same function will not be executed.
// The return statement specifies a value that the function should pass back to the part of the code that called it. This value can be of any data type, including numbers, strings, booleans, objects, arrays, or even other functions. If no value is explicitly specified after return (i.e., return;), or if a function does not contain a return statement, the function implicitly returns undefined

function userLoginMessage(username = "Ahmed") {
    if(username === undefined) { // we can also write (!username) as condition
        console.log("please enter a username")
        return
    }
    return `Hey! ${username}, welcome Back`
}

// in above funtion if we get a username then message will print otherwise if statement will be executed

// userLoginMessage() // if we give no argument, undefined will be sent to function as defaut argument

// console.log(userLoginMessage("irfan"))
// console.log(userLoginMessage()) // this return undefined but we have given value in parameter
// console.log(userLoginMessage(""))


// in websites like ecommerce, when we wanted to calculate total cart value but we don't know how many parameters to add
// in this case we use rest/spread operator(...). it add all values and give us as an array

function calculateCartPrice(val1, val2, ...num1){ 
    // according to this first, second value and so on will be stored in val1, val2 and rest in num1 respectively.
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))


// passing object as an argument
const user = {
    username: "salman",
    prices: 199
}

function handleObject(anyobject){
    // in anyobject parameter we can pass any object
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

// we can also pass object like this
handleObject({
    username: "salman",
    price: 399
})

// passing array as an argument

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    // we can pass any array in getArray parameter
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));

// this is just like object we can pass whole array here
console.log(returnSecondValue([200, 400, 500, 1000]));