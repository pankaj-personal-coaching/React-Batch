class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.score = 0;
  }

  static showDateAndTime() {
    return new Date().toISOString();
  }

  getFullName = () => {
    return `${this.firstName} ${this.lastName}`;
  };
}
const p = new Person("Pankaj", "Shimpi", 31, "India", "Pune");
console.log(p.getFullName());
console.log(Person.showDateAndTime());
