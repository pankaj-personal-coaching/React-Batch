// let num = 1234;
// let float = 1.234;
// console.log(num);
// console.log(float);
// let str = "Some String";
// console.log(str);
// let booleanTrue = true;
// let booleanFalse = false;
// console.log(booleanTrue);
// console.log(booleanFalse);
// let nullValue = null;
// let undefinedValue;
// console.log(nullValue);
// console.log(undefined);
// let symbol = Symbol("Pankaj");
// let symbol1 = Symbol("Pankaj");
// console.log(symbol === symbol1);

// Different operations on data types.
// let float = 1.81;
// console.log(Math.round(float));
// console.log(Math.floor(float));
// console.log(Math.ceil(float));

// 1,2,9,6,3,6,-1,-5
// console.log(Math.min(1, 2, 9, 6, 3, 6, -1, -5));
// console.log(Math.max(1, 2, 9, 6, 3, 6, -1, -5));
// console.log(Math.round(Math.random())); // 0-1

// We need to create a function to generate otp.
// function generateOtp(digit) {
//   let otp = "";
//   for (let i = 0; i < digit; i++) {
//     otp = otp + Math.floor(Math.random() * 10).toString();
//   }
//   return otp;
// }

// console.log(generateOtp(4));
// console.log(generateOtp(6));

// let a = "A"; // String
// let name = "Pankaj"; // String.

// \n is used for next line
// \t tab, adding 8 spaces betweeen string
// \\ back slash
// \' single quote.
// \" double quote.
// let firstName = "Rohit";
// let lastName = "Sharma";
// let birthYear = 1987;

// console.log(firstName + "\n" + lastName);
// console.log(firstName + "\t" + lastName);

// function calculateAge(year) {
//   return Number(new Date().getFullYear()) - year;
// }

// // Template Literal: ``
// // Rohit sharma is -- years of old.
// console.log(
//   `${firstName} ${lastName} is
//   ${calculateAge(birthYear)} years of old.`
// );
// console.log(
//   "Signed SHASUMS for release files (How to verify) \n",
//   "All download options \n",
//   "Installing Node.js via package manager \n",
//   "Previous Releases\n",
//   "Nightly builds\n",
//   "Unofficial builds\n",
//   "Building Node.js from source on supported platforms\n",
//   "Installing Node.js via binary archive\n",
//   "Install on Windows Subsystem for Linux (WSL)"
// );
// console.log(`Signed SHASUMS for release files (How to verify)
// All download options
// Installing Node.js via package manager
// Previous Releases
// Nightly builds
// Unofficial builds
// Building Node.js from source on supported platforms
// Installing Node.js via binary archive
// Install on Windows Subsystem for Linux (WSL)`);

//

// let str =
//   "I am a react developer, and i know HTML, CSS, Javascript and ReactJS";
// let str1 = "        pankaj";
// console.log("length", str.length);
// console.log("Spilt => ", str.split(","));
// console.log(str1);
// console.log("trim", str1.trim());
// console.log(str.includes("ReactJS"));
// console.log(str.includes("NodeJS"));
// str = str.replace("ReactJS", "NodeJS");
// console.log(str.includes("NodeJS"));
// console.log(str.indexOf("HTML"));

// reverse, pallindrome.
// pallindrome: input string and reverse should be equal.
// e.g nitin === nitin
let name = "pankaj";

// value p a n k a j
// index 0 1 2 3 4 5
function reverse(str) {
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr = `${revStr}${str[i]}`;
  }
  return revStr;
}

function pallindrome(input) {
  return input === reverse(input);
}
let strReversed = reverse(name);
console.log(strReversed);
console.log(name === strReversed);
console.log(pallindrome("nitin"));
