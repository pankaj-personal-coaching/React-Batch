// let numbers = [1, 2, 3, 4, 5, 6];
// let nums = [...numbers];
// nums.push(7);
// numbers.push(8);
// console.log(numbers);
// console.log(nums);
// let user = {
//   name: "Pankaj",
//   id: 12345,
//   address: "Pune",
// };
// let user1 = { ...user };
// user1.name = "Rohit";
// console.log(user);
// console.log(user1);

// const sum = (...rest) => {
//   return rest.reduce((prev, currentEle) => {
//     return prev + currentEle;
//   }, 0);
// };
// console.log(sum(10, 20));
// console.log(sum(10, 20, 30, 40, 50, 60));
// console.log(sum(10, 20, 30));
// console.log(sum(10, 20, 200, 300));

let user = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

const userDetails = ({ id, name, ...rest }) => {
  console.log(id);
  console.log(name);
  console.log(rest);
};
userDetails(user);
