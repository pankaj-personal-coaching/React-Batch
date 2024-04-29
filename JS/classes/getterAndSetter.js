class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.score = 0;
  }

  getFullName = () => {
    return `${this.firstName} ${this.lastName}`;
  };

  set setScore(score) {
    this.score += score;
  }

  get getScore() {
    return this.score;
  }
}
const person = new Person("Pankaj", "Shimpi", 31, "India", "Pune");
person.setScore = 20;
console.log(person.getScore);
person.setScore = 20;
console.log(person.getScore); // 40
person.setScore = 10;
console.log(person.getScore); // 40
