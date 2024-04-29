// class Person {
//   constructor() {
//     this.firstName = "Pankaj";
//     this.lastName = "Shimpi";
//   }
// }
// const person = new Person();
// const p1 = new Person();
// console.log(person.firstName, person.lastName);
// console.log(p1.firstName, p1.lastName);
// class Person {
//   constructor(firstName, lastName, age = 40) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }
// }
// const pankaj = new Person("Pankaj", "Shimpi", 31);
// console.log(pankaj.firstName, pankaj.lastName, pankaj.age);
// const rohit = new Person("Rohit", "Sharma");
// console.log(rohit.firstName, rohit.lastName, rohit.age);

// class methods:
// class Person {
//   constructor(firstName, lastName, age, country, city) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.country = country;
//     this.city = city;
//   }

//   getFullName = () => {
//     return `${this.firstName} ${this.lastName}`;
//   };
// }

// const person = new Person("Pankaj", "Shimpi", 31, "India", "Pune");
// // console.log(person);
// console.log(person.getFullName()); // Pankaj Shimpi
