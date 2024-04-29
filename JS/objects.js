// const user = {
//   firstName: "Pankaj",
//   lastName: "Shimpi",
//   id: 1234,
//   address: {
//     city: "Pune",
//     pin: 412101,
//     addressLine: "Adarsh nagar, Kiwale",
//   },
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// console.log(user.getFullName()); // Pankaj Shimpi
// user.country = "India"; // To upadte/add properties to an object.
// user["age"] = 31; // To upadte/add properties to an object.
// console.log(user.country);
// console.log(user.age);

// Object Methods:
// const user = {
//   firstName: "Pankaj",
//   lastName: "Shimpi",
//   id: 1234,
// };
// user => 1234534523
// let user1 = Object.assign({}, user); // user1 => 1234534523
// user1.firstName = "Rahul";
// user.lastName = "Patil";
// console.log(user); // user = { firstName: "Pankaj", lastName: "Patil", id: 1234};
// console.log(user1); // user1 = { firstName: "Rahul", lastName: "Shimpi", id: 1234};
const user = {
  firstName: "Pankaj",
  lastName: "Shimpi",
  id: 1234,
  getFullName: function (age, country) {
    return `${this.firstName} ${this.lastName} ${age} ${country}`;
  },
};
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));
// console.log(user.hasOwnProperty("name"));

// console.log(getFullName.call(user));
console.log(user.getFullName()); // Pankaj Shimpi
console.log(
  user.getFullName.call({ firstName: "Rohit", lastName: "Sharma" }, 36, "India")
); // Rohit Sharma
console.log(
  user.getFullName.apply({ firstName: "Virat", lastName: "Kohli" }, [
    37,
    "India",
  ])
);

let bindFun = user.getFullName.bind(
  { firstName: "Sachin", lastName: "Tendulkar" },
  36,
  "India"
);
console.log(bindFun());
