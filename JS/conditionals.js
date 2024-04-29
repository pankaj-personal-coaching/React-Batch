// let num = 5;
// if (num > 5) {
//   console.log("The condtion is true!");
// } else {
//   console.log("The condtion is false!");
// }
// check if number is positive or negative.
// function checkNumber(num) {
//   if (num > 0) {
//     console.log(`${num} is Positive`);
//   } else if (num < 0) {
//     console.log(`${num} is Negative`);
//   } else if (num === 0) {
//     console.log(`${num} is Zero`);
//   } else {
//     console.log(`${num} is not a valid number`);
//   }
// }

// function checkNumber(num) {
//   switch (true) {
//     case num > 0:
//       console.log(`${num} is Positive`);
//       break;
//     case num < 0:
//       console.log(`${num} is Negative`);
//       break;
//     case num === 0:
//       console.log(`${num} is Zero`);
//       break;
//     default:
//       console.log(`${num} is not a valid number`);
//       break;
//   }
// }

// checkNumber(-1);
// checkNumber(10);
// checkNumber(-10);
// checkNumber(0);
// checkNumber("String");

// function checkSeason(season) {
//   switch (season) {
//     case "rainy":
//       console.log("You need rain coat!");
//       break;
//     case "cloudy":
//       console.log("You need a jacket!");
//       break;
//     case "sunny":
//       console.log("You dont need anything! Go freely");
//       break;
//     default:
//       console.log("You dont need a rain coat or jacket!");
//   }
// }
// checkSeason("sunny");
// checkSeason("cloudy");
// checkSeason("rainy");
// checkSeason();

// (condition) ? true : false

let num = 1;
num > 0
  ? console.log(`${num} is positive`)
  : num === 0
  ? console.log(`${num} is Zero`)
  : console.log(`${num} is Negative`);
