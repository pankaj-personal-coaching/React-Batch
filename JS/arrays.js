// Create array
// console.log(arr1);
// let arr2 = Array(1, 2, 3);
// console.log(arr2);
// let arr3 = new Array(1, 2, 3);
// console.log(arr3);
// let str = "Pankaj";
// let strArr = str.split("");
// console.log(strArr);

// Access elements or values from an array.
// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(arr1[0]);
// console.log(arr1[arr1.length - 1]);

// Array Modification.
// let arr1 = [1, 2, 3];
// arr1.length = 0; // To empty array.
// push and pop: These methods are work on last values of an array.
// push method will add a value at the end of an array.
// pop method will remove value from an end of an array
// shift and unshift: These methods are work from starting index.
// unshift method will add values from the starting index.
// shift method will remove values from starting index.
// arr1.push(4);
// console.log(arr1);
// arr1.push(5, 6, 7);
// console.log(arr1);
// arr1.pop();
// arr1.pop();
// arr1.pop();
// console.log(arr1);
// arr1.unshift(0);
// console.log(arr1);
// arr1.unshift(-1, -2, -3);
// console.log(arr1);
// arr1.shift();
// arr1.shift();
// arr1.shift();
// arr1.shift();
// console.log(arr1);

// let arr1 = [1, 2, 3, 4, 5];
// arr1[2] = "Pankaj";
// console.log(arr1);
// for (let i = 0; i < arr1.length; i++) {
//   if (i % 2 === 0) {
//     arr1[i] = 10;
//   }
// }
// console.log(arr1);

// let arr = Array(5).fill("Name");
// console.log(arr);

// let arr1 = [1, 2, 3, 4];
// let arr2 = [5, 6, 7, 8];
// console.log(arr1.concat(arr2));
// console.log([...arr1, ...arr2]);

// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr1.slice());
// console.log(arr1.slice(0));
// console.log(arr1.slice(2, 8));

// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr1.indexOf(6)); // 5
// console.log(arr1.indexOf(234)); // -1
// if (arr1.indexOf(6) !== -1) {
//   console.log("Array has the element in it!");
// }

let arr1 = [1, 2, 3];
console.log(arr1.lastIndexOf(2));
console.log(arr1.lastIndexOf(123));
console.log(arr1.join("-"));
console.log(arr1.includes(3));
console.log(arr1.includes(123));
console.log(arr1.toString());
arr1.splice(1, 2, 4, 5, 6, 7, 8, 9);
console.log(arr1);
