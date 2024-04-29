// let num;
// function some() {
//   num = 123;
//   console.log(num);
// }

// function some1() {
//   num = 456;
//   console.log(num);
// }
// some();
// some1();
function some1() {
  if (true) {
    let num = 123456;
    console.log(num); // 123456
  }
  console.log(num); // undefined 123456
}

some1();
