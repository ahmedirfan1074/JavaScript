const myNums = [1, 2, 3, 4, 5];

// reduce take accumulator and current value (mainly)
// if we provide initial value accumulator take it as argument but for only first time
// after that accumulated result is stored in the acc.
// current value is the array value at every iteration and reduce return single value can be of any datatype.

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

// const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);

console.log(myTotal);

// const shoppingCart = [
//   {
//     itemName: "js course",
//     price: 2999,
//   },
//   {
//     itemName: "py course",
//     price: 999,
//   },
//   {
//     itemName: "mobile dev course",
//     price: 5999,
//   },
//   {
//     itemName: "data science course",
//     price: 12999,
//   },
// ];

// const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

// console.log(priceToPay);
