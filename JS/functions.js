// function add(num, num1) {
//   return num + num1;
// }
// function mul(num, num1) {
//   return num * num1;
// }
// function div(num, num1) {
//   return num / num1;
// }
// function sub(num, num1) {
//   return num - num1;
// }
// console.log(add(10, 5));
// console.log(mul(5, 5));
// console.log(div(100, 10));
// console.log(sub(50, 20));

// Declaration functions
// let num = 10;
// let num1 = 20;
// function add() {
//   console.log(num1 + num);
// }
// add();

// function sum() {
//   // arguments
//   // console.log(arguments);
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum = sum + arguments[i];
//   }
//   return sum;
// }

// function sum(...values) {
//   return values.reduce(function (prev, cur) {
//     return prev + cur;
//   }, 0);
// }

// console.log(sum(10, 20));
// console.log(sum(10, 20, 30));
// console.log(sum(10, 20, 30, 40));
// function sum(num, num1, cb) {
//   let res = num + num1;
//   cb(res);
// }
// sum(10, 20, (res) => {
//   console.log(res);
// });

//Expressions functions:
// Expressions functions are the functions which are assigned to a variable.
// console.log(sum1(20, 20));
// function sum1(num1, num2) {
//   return num1 + num2;
// }
// const sum = function (num1, num2) {
//   return num1 + num2;
// };
// console.log(sum(10, 20));

// Anonumous functions: A funtion without a name;
// self invoking functions.
// (function (num, num1) {
//   console.log(num + num1);
// })(100, 20);

// let add = (function (num, num1) {
//   return num + num1;
// })(100, 20);
// console.log(add);

// Arrow functions:

function sqaure(num = 5) {
  return num * num;
}
const squareArrow = (num = 25) => {
  return num * num;
};
console.log(sqaure(10));
console.log(squareArrow(20));
console.log(sqaure());
console.log(squareArrow());
