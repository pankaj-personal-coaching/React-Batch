// map
// const contries = ["India", "Australia", "Finland", "Sweden", "Norway"];
// // using traditional way
// let upperCaseCountries = [];
// for (let i = 0; i < contries.length; i++) {
//   upperCaseCountries.push(contries[i].toUpperCase());
// }
// console.log(upperCaseCountries);
// // using map
// let upperCaseCountriesMap = contries.map((current) => {
//   return current.toUpperCase();
// });
// console.log(upperCaseCountriesMap);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // num*num
// const squares = numbers.map((num) => {
//   return { [`square_of_${num}`]: num * num };
// });
// console.log(squares);

// filter:
// const contries = [
//   "India",
//   "Australia",
//   "Finland",
//   "Sweden",
//   "Norway",
//   "England",
// ];
// const filteredResults = contries.filter((current) => {
//   return current.includes("land");
// });
// console.log(filteredResults);
// const filteredResultsMap = contries.map((current) => {
//   return current.includes("land"); // true or flase
// });
// console.log(filteredResultsMap);

// const numbers = [1, 2, 3, 4, 5];
// const cb = (current) => {
//   return current % 2 === 0; // true | false
// };
// console.log(numbers.filter(cb));
// console.log(numbers.map(cb));

// reduce:
// let numbers = [1, 2, 3, 4, 5]; // 120
// let sum = numbers.reduce((pre, current) => {
//   return pre * current;
// }, 1);
// console.log(sum);
// let chars = ["P", "a", "n", "k", "a", "j"];

// let join = (array, identifier = "") => {
//   return array.reduce((pre, cur) => {
//     return pre ? `${pre}${identifier}${cur}` : cur;
//   }, "");
// };
// console.log(join(chars));
// console.log(join(chars, "-"));
// console.log(join(chars, "/"));

// find:
// const numbers = [1, 2, 3, 4, 5];
// let find3 = numbers.find((item) => {
//   return item === 3;
// });
// console.log(find3);
// const users = [
//   {
//     id: 1,
//     first_name: "Roberta",
//     last_name: "Peele",
//     email: "rpeele0@nasa.gov",
//     gender: "Female",
//   },
//   {
//     id: 2,
//     first_name: "Rodrique",
//     last_name: "Quant",
//     email: "rquant1@rambler.ru",
//     gender: "Male",
//   },
//   {
//     id: 3,
//     first_name: "Ingamar",
//     last_name: "Lillie",
//     email: "ilillie2@squidoo.com",
//     gender: "Male",
//   },
//   {
//     id: 4,
//     first_name: "Port",
//     last_name: "Thurske",
//     email: "pthurske3@ihg.com",
//     gender: "Male",
//   },
//   {
//     id: 5,
//     first_name: "Zedekiah",
//     last_name: "Washington",
//     email: "zwashington4@friendfeed.com",
//     gender: "Male",
//   },
//   {
//     id: 6,
//     first_name: "Selinda",
//     last_name: "Knibb",
//     email: "sknibb5@parallels.com",
//     gender: "Bigender",
//   },
//   {
//     id: 7,
//     first_name: "Kessiah",
//     last_name: "MacNeil",
//     email: "kmacneil6@go.com",
//     gender: "Female",
//   },
//   {
//     id: 8,
//     first_name: "Ambros",
//     last_name: "Shepperd",
//     email: "ashepperd7@sakura.ne.jp",
//     gender: "Male",
//   },
//   {
//     id: 9,
//     first_name: "Tedda",
//     last_name: "Davydychev",
//     email: "tdavydychev8@lulu.com",
//     gender: "Agender",
//   },
//   {
//     id: 10,
//     first_name: "Borg",
//     last_name: "Ech",
//     email: "bech9@thetimes.co.uk",
//     gender: "Male",
//   },
//   {
//     id: 11,
//     first_name: "Selinda",
//     last_name: "Kuch bhi",
//     email: "skuchbhi5@parallels.com",
//     gender: "Bigender",
//   }
// ];

// const findUser = users.find((item) => {
//   return item.first_name === "Selinda";
// });
// const filterUser = users.filter((item) => {
//   return item.first_name === "Selinda";
// });
// console.log(findUser); {}
// console.log(filterUser); [{}]

// findIndex
// const numbers = [1, 2, 3, 4, 5, 3];
// let eleIndex = numbers.findIndex((item) => {
//   return item === 3;
// });

// console.log(eleIndex);

// some
// const numbers = [1, 2, 3, 4, 5, 3];
// let some = numbers.some((item) => {
//   return item === 6;
// });
// console.log(some);

// every
// const numbers = [1, 2, 3, 4, 5, 3];
// let every = numbers.every((item) => {
//   return item === 3;
// });
// console.log(every);
// let num = [2, 4, 6, 8, 10];
// let evenNums = num.every((item) => {
//   return item % 2 === 0;
// });
// console.log(evenNums);


