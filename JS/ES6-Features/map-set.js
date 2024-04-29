// let user = new Map();
// user.set("firstName", "Rohit");
// user.set("lastName", "Sharma");
// user.set("address", "Pune");
// user.set("id", 12345);
// user.set("age", 37);
// console.log(user);
// console.log(user.firstName);
// console.log(user.get("firstName"));

// let set = new Set();
// set.add(1);
// set.add(2);
// set.add(3);
// set.add(4);
// set.add(5);
// set.add(4);
// set.delete(4);
// console.log(set);
// console.log(set.has(4));
// console.log(set.has(6));

let nums = [1, 2, 3, 4, 5, 6, 7, 7, 6, 5, 4, 3, 2, 1];
let uniq = [];
for (let num of nums) {
  if (!uniq.includes(num)) {
    uniq.push(num);
  }
}
let setUniq = [...new Set(nums)];
console.log(uniq);
console.log(setUniq);
