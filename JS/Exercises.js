// 1. Create a function to check if a string contains a substring or not.
// checkSubString(str, substring);
// String {str} has sub string {substr}
// String {str} dont have sub string {substr}

// const checkSubString = (str, subStr) => {
//   // if (str.includes(subStr)) {
//   //   console.log(`String "${str}" has sub string "${subStr}"`);
//   // } else {
//   //   console.log(`String "${str}" dont have sub string "${subStr}"`);
//   // }
//   return str.includes(subStr);
// };
// let string = "I am a Programmer";
// let substr = "Programmersd";
// console.log(checkSubString(string, substr));

// 2. Create a function to return reverse words from a string.
//   i/p: "I am a Programmer" // remmargorP a ma I
//   o/p: "Programmer a am I"; // split()
// const reverseWords = (str) => {
//   // let rev = "";
//   // for (i = str.length - 1; i >= 0; i--) {
//   //   rev += str[i];
//   // }
//   // console.log(rev);
//   // First wat
//   let splitStr = str.split(" ");
//   let reverseArr = splitStr.reverse();
//   let join = reverseArr.join(" ");
//   console.log(join);

//   // Second Way
//   console.log(str.split(" ").reverse().join(" "));
// };
// reverseWords("I am a Programmer");

// 3. Remove duplicate words from a string.
// i/p "function is used for execution and function is easy to write"
// o/p "function is used for execution and easy to write"
// i/p aaabbbcccdde o/p abcde

// const removeWords = (str) => {
//   let indentifier = "";
//   if (str.split(" ").length > 1) {
//     indentifier = " ";
//   }
//   return [...new Set(str.split(indentifier))].join(indentifier);
// };
// console.log(
//   removeWords("function is used for execution and function is easy to write")
// );
// console.log(removeWords("aaabbbcccdde"));

// 4. Count the number of words from a string.
// i/p "I am a Programmer" o/p 4
// const countWords = (str) => {
//   return str.split(" ").length;
// };
// console.log(countWords("I am a Programmer"));
// console.log(
//   countWords("function is used for execution and function is easy to write")
// );
// 5. Write a function to remove specified character from a string. removeChar(str, char);
// i/p "aaaabbbacadaeeaaddbca" "a" o/p bbbcdeeddbc
// const removeChar = (str, char) => {
//   str = str.toLowerCase();
//   char = char.toLowerCase();
//   let output = "";
//   for (let _char of str) {
//     if (_char !== char) {
//       output += _char;
//     }
//   }
//   return output;
// };
// console.log(removeChar("aaaabbbacadaeeaaddbcaA", "A"));
// 6. Split a sentence into different sentences. splitSentence(str, char)
// const splitSentence = (sentence, identifier) => {
//   return sentence.split(identifier);
// };
// console.log(
//   splitSentence(
//     "function is used for execution and function is easy to write",
//     " "
//   )
// );

// 2. In the following shopping cart add, remove, edit items
// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//  - add 'Meat' in the beginning of your shopping cart if it has not been already added
//  - add Sugar at the end of you shopping cart if it has not been already added
//  - remove 'Honey' if you are allergic to honey
//  - modify Tea to 'Green Tea'
// const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
// shoppingCart.unshift("Meat");
// console.log(shoppingCart);
// shoppingCart.push("Sugar");
// console.log(shoppingCart);
// const filterHoney = shoppingCart.filter((item) => {
//   return item !== "Honey";
// });
// console.log(filterHoney);
// const modify = filterHoney.map((item) => {
//   return item === "Tea" ? "Green Tea" : item;
// });
// console.log(modify);

// 3. In countries array check if 'Ethiopia' exists in the array
//    if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
// const countries = [
//   "Afghanistan",
//   "Albania",
//   "Algeria",
//   "Andorra",
//   "Angola",
//   "Antigua and Barbuda",
//   "Argentina",
//   "Armenia",
//   "Australia",
//   "Austria",
//   "Azerbaijan",
//   "Bahamas",
//   "Bahrain",
//   "Bangladesh",
//   "Barbados",
//   "Belarus",
//   "Belgium",
//   "Belize",
//   "Benin",
//   "Bhutan",
//   "Bolivia",
//   "Bosnia and Herzegovina",
//   "Botswana",
//   "Brazil",
//   "Brunei",
//   "Bulgaria",
//   "Burkina Faso",
//   "Burundi",
//   "Cambodia",
//   "Cameroon",
//   "Canada",
//   "Cape Verde",
//   "Central African Republic",
//   "Chad",
//   "Chile",
//   "China",
//   "Colombi",
//   "Comoros",
//   "Congo (Brazzaville)",
//   "Congo",
//   "Costa Rica",
//   "Cote d'Ivoire",
//   "Croatia",
//   "Cuba",
//   "Cyprus",
//   "Czech Republic",
//   "Denmark",
//   "Djibouti",
//   "Dominica",
//   "Dominican Republic",
//   "East Timor (Timor Timur)",
//   "Ecuador",
//   "Egypt",
//   "El Salvador",
//   "Equatorial Guinea",
//   "Eritrea",
//   "Estonia",
//   "Ethiopia",
//   "Fiji",
//   "Finland",
//   "France",
//   "Gabon",
//   "Gambia, The",
//   "Georgia",
//   "Germany",
//   "Ghana",
//   "Greece",
//   "Grenada",
//   "Guatemala",
//   "Guinea",
//   "Guinea-Bissau",
//   "Guyana",
//   "Haiti",
//   "Honduras",
//   "Hungary",
//   "Iceland",
//   "India",
//   "Indonesia",
//   "Iran",
//   "Iraq",
//   "Ireland",
//   "Israel",
//   "Italy",
//   "Jamaica",
//   "Japan",
//   "Jordan",
//   "Kazakhstan",
//   "Kenya",
//   "Kiribati",
//   "Korea, North",
//   "Korea, South",
//   "Kuwait",
//   "Kyrgyzstan",
//   "Laos",
//   "Latvia",
//   "Lebanon",
//   "Lesotho",
//   "Liberia",
//   "Libya",
//   "Liechtenstein",
//   "Lithuania",
//   "Luxembourg",
//   "Macedonia",
//   "Madagascar",
//   "Malawi",
//   "Malaysia",
//   "Maldives",
//   "Mali",
//   "Malta",
//   "Marshall Islands",
//   "Mauritania",
//   "Mauritius",
//   "Mexico",
//   "Micronesia",
//   "Moldova",
//   "Monaco",
//   "Mongolia",
//   "Morocco",
//   "Mozambique",
//   "Myanmar",
//   "Namibia",
//   "Nauru",
//   "Nepal",
//   "Netherlands",
//   "New Zealand",
//   "Nicaragua",
//   "Niger",
//   "Nigeria",
//   "Norway",
//   "Oman",
//   "Pakistan",
//   "Palau",
//   "Panama",
//   "Papua New Guinea",
//   "Paraguay",
//   "Peru",
//   "Philippines",
//   "Poland",
//   "Portugal",
//   "Qatar",
//   "Romania",
//   "Russia",
//   "Rwanda",
//   "Saint Kitts and Nevis",
//   "Saint Lucia",
//   "Saint Vincent",
//   "Samoa",
//   "San Marino",
//   "Sao Tome and Principe",
//   "Saudi Arabia",
//   "Senegal",
//   "Serbia and Montenegro",
//   "Seychelles",
//   "Sierra Leone",
//   "Singapore",
//   "Slovakia",
//   "Slovenia",
//   "Solomon Islands",
//   "Somalia",
//   "South Africa",
//   "Spain",
//   "Sri Lanka",
//   "Sudan",
//   "Suriname",
//   "Swaziland",
//   "Sweden",
//   "Switzerland",
//   "Syria",
//   "Taiwan",
//   "Tajikistan",
//   "Tanzania",
//   "Thailand",
//   "Togo",
//   "Tonga",
//   "Trinidad and Tobago",
//   "Tunisia",
//   "Turkey",
//   "Turkmenistan",
//   "Tuvalu",
//   "Uganda",
//   "Ukraine",
//   "United Arab Emirates",
//   "United Kingdom",
//   "United States",
//   "Uruguay",
//   "Uzbekistan",
//   "Vanuatu",
//   "Vatican City",
//   "Venezuela",
//   "Vietnam",
//   "Yemen",
//   "Zambia",
//   "Zimbabwe",
// ];
// if (countries.includes("Ethiopia")) {
//   console.log("ETHIOPIA");
// } else {
//   countries.push("Ethiopia");
// }
// 5. Concatenate the following two variables and store it in a fullStack variable.
// const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
// const backEnd = ["Node", "Express", "MongoDB"];
// const fullStack = frontEnd.concat(backEnd);
// console.log(fullStack);

// 6. The following is an array of 10 students ages: js
// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//   - Sort the array and find the min and max age
//   - Find the median age(one middle item or two middle items divided by two)
//   - Find the average age(all items divided by number of items)
//   - Find the range of the ages(max minus min)

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// const sortedAges = ages.sort();
// // console.log(sortedAges);
// const min = Math.min(...sortedAges);
// const max = Math.max(...sortedAges);
// // const min = sortedAges[0];
// // const max = sortedAges[sortedAges.length - 1];
// // console.log(min, max);
// // const median = ages[ages.length / 2];
// // console.log(median);
// // const sumAges = ages.reduce((a, i) => {
// //   return a + i;
// // }, 0);
// // const average = sumAges / 2;
// // console.log(average);
// const rangeOfAges = max - min;
// console.log(rangeOfAges);

// i/p = "aaabbbcccddef" o/p = a=3, b=3, c=3 d=2, e=1, f=1.
// str = array. to iterate.
// temp = [], to store char and occurances.
// time and spcae complexity.

// temp = {}.
// const countChar = (str) => {
//   let temp = {};
//   for (let char of str) {
//     // temp[char] = temp[char] + 1 || 1;
//     if (temp[char]) {
//       temp[char] = temp[char] + 1;
//     } else {
//       temp[char] = 1;
//     }
//   }
//   return temp;
// };

// // 1st iteration: char = 'a' temp = {},
// // if(temp[char]) temp['a'] = false it goes in else block. temp['a'] = 1
// // after 1st iteration temp = {a: 1}

// const checkAnagram = (str1, str2) => {
//   const s1 = countChar(str1); // {s:1, i:1, l:1, e:1, n:1, t:1}
//   const s2 = countChar(str2); // {l:1, i:1, s:1, t:1, e:1, n:1}
//   let isAnagram = true;
//   for (let key in s1) {
//     if (s1[key] !== s2[key]) {
//       isAnagram = false;
//       break;
//     }
//   }
//   return isAnagram;
// };
// //countChar("pankaj");
// if (checkAnagram("silent", "listen")) {
//   console.log("Strings are anagram");
// } else {
//   console.log("Strings are not anagram");
// }
// anagram strings
// silent listen
const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

// 1. Find the person who has many skills in the users object.
//  op: Asab
// const getMaxSkilledPerson = (obj) => {
//   let maxSkills = 0;
//   let person = "";
//   for (let key in obj) {
//     if (obj[key].skills.length > maxSkills) {
//       person = key;
//       maxSkills = obj[key].skills.length;
//     }
//   }
//   return person;
// };
// console.log(getMaxSkilledPerson(users));

// 2. Count logged in users,count users having greater than equal to 50 points from
// the object.
//   op loggedIn users: count
//  usersWith50Points: users having greater than equal to 50 points:

// const getLoggenIdUSerWith50Points = (obj) => {
//   const loggenIdUSerWith50Points = [];
//   for (let key in obj) {
//     if (obj[key].isLoggedIn && obj[key].points >= 50) {
//       loggenIdUSerWith50Points.push(key);
//     }
//   }
//   return loggenIdUSerWith50Points.join(",");
// };
// console.log(getLoggenIdUSerWith50Points(users));

// 3. Find people who are MERN stack developer from the users object
// MERN Stack developer: users with these skills: MongoDB, Express, React, Node
// const getMERNDev = (obj) => {
//   const mernDev = [];
//   const MERN = ["MongoDB", "Express", "React", "Node"];
//   for (let key in obj) {
//     let mern = [];
//     obj[key].skills.forEach((skill) => {
//       if (!mern.includes(skill) && MERN.includes(skill)) {
//         mern.push(skill);
//       }
//     });
//     if (mern.length === 4) {
//       mernDev.push(key);
//     }
//   }
//   return mernDev.join(",");
// };
// console.log(getMERNDev(users));

// 4. Set your name in the users object without modifying the original users object
//   add your details with same properties and different values.
// const addUser = (user, obj) => {
//   const { name, ...rest } = user;
//   return { ...obj, [name]: { ...rest } };
// };
// let newUser = {
//   name: "Pankaj",
//   email: "pan@kaj.com",
//   skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"],
//   age: 31,
//   isLoggedIn: true,
//   points: 60,
// };
// console.log(addUser(newUser, users));

// 5. Get all keys or properties of users object:
// const getAllKeys = (obj) => {
//   const keys = [];
//   for (const key in obj) {
//     if (key) {
//       keys.push(key);
//     }
//   }
//   return keys;
// };
// console.log(getAllKeys(users));

// 6. Get all the keys and values of users object:
// const getAllValues = (obj) => {
//   const values = [];
//   const keys = [];
//   for (let key in obj) {
//     values.push(obj[key]);
//     keys.push(key);
//   }
//   return [...values, ...keys];
// };
// console.log(getAllValues(users["Paul"]));

// 7. Use the users object to print a name, email, age and skills.
// function getUserDetails() {
//   const { name, email, age, skills } = this;
//   return `${name}, ${email}, ${age}, ${skills}`;
// }

// const getAllUserDetails = (obj) => {
//   for (let key in obj) {
//     console.log(getUserDetails.call({ ...obj[key], name: key }));
//   }
// };
// getAllUserDetails(users);

const products = [
  { name: "Tea - Honey Green Tea", price: 1654 },
  { name: "Spice - Montreal Steak Spice", price: 8138 },
  { name: "Mayonnaise", price: 8414 },
  { name: "Tea - Black Currant", price: 7514 },
  { name: "Appetizer - Southwestern", price: 8285 },
  { name: "Mini - Vol Au Vents", price: 881 },
  { name: "Kellogs Special K Cereal", price: 4587 },
  { name: "Pastry - Banana Muffin - Mini", price: 4937 },
  { name: "Wine - Chardonnay Mondavi", price: 9385 },
  { name: "Sea Bass - Whole", price: 2303 },
];
// 1. Print product details of Each product using forEach.
//     The Price of {product_name} is {product_price} rs.
// products.forEach((product) => {
//   console.log(`The Price of ${product.name} is ${product.price}rs.`);
// });

// 2. Calculate sum of all the prioducts using forEach and reduce.
// let sum = 0;
// products.forEach((product) => {
//   sum += product.price;
// });
// console.log(`The sum of all products price is ${sum}`);
// let reduceSum = products.reduce((prev, cur) => {
//   return prev + cur.price;
// }, 0);
// console.log(`The sum of all products price is ${reduceSum}`);
// 3. Create array of product names and price.
//  names = [], prices = []
// const names = products.map((product) => {
//   return product.name;
// });
// const prices = products.map((product) => {
//   return product.price;
// });
// console.log(names, prices);

//4. Filter products which has "Tea" in names.
// const filterTea = products.filter((product) => {
//   return !product.name.includes("Tea");
// });
// console.log(filterTea);

// 1. Create a class Animal, which will have name, age, color and legs properties.
//    And also create different methods.
class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }
  getAnimalDetails = () => {
    return `${this.name}, ${this.age}, ${this.color}, ${this.legs}`;
  };
  getSound = () => {
    return this.sound;
  };
}
// 2. Create a Dog, Cat and Monkey as a child classes. which exteds Animal class.
class Dog extends Animal {
  constructor(name, age, color, legs, sound) {
    super(name, age, color, legs);
    this.sound = sound;
  }
  getDogDetailsWithSound = () => {
    return `${this.getAnimalDetails()} and the sound of dog is ${this.getSound()}`;
  };
}

class Cat extends Animal {
  constructor(name, age, color, legs, sound) {
    super(name, age, color, legs);
    this.sound = sound;
  }
  getCatDetailsWithSound = () => {
    return `${this.getAnimalDetails()} and the sound of cat is ${this.getSound()}`;
  };
}

class Monkey extends Animal {
  constructor(name, age, color, legs, sound) {
    super(name, age, color, legs);
    this.sound = sound;
  }
  getMonkeyDetailsWithSound = () => {
    return `${this.getAnimalDetails()} and the sound of monkey is ${this.getSound()}`;
  };
}

let dog = new Dog("Tommy", "6 Years", "Brown", 4, "Bow Bow");
console.log(dog.getDogDetailsWithSound());
let cat = new Cat("Lily", "4 Years", "white", 4, "Meow");
console.log(cat.getCatDetailsWithSound());
let monkey = new Monkey("John", "18 Years", "Brown", 2, "Monk");
console.log(monkey.getMonkeyDetailsWithSound());
