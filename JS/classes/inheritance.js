class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
  }

  getFullName = () => {
    return `${this.firstName} ${this.lastName}`;
  };
}

class Student extends Person {
  constructor(firstName, lastName, age, country, city, _class, marks) {
    super(firstName, lastName, age, country, city);
    this._class = _class;
    this.marks = marks;
  }
}
const marks = [{ eng: 78 }, { maths: 76 }, { marathi: 80 }];
const student = new Student(
  "Pankaj",
  "Shimpi",
  31,
  "India",
  "Pune",
  "8th",
  marks
);
// console.log(student.firstName);
// console.log(student.getFullName());
// console.log(student._class);
// console.log(student.marks);
class Employee extends Person {
  constructor(firstName, lastName, age, country, city, designation, company) {
    super(firstName, lastName, age, country, city);
    this.designation = designation;
    this.company = company;
  }
  getDetails = () => {
    return `${this.getFullName()} and he is working as a ${
      this.designation
    } in ${this.company}`;
  };

  getAllDetais = () => {
    return {
      name: this.getFullName(),
      age: this.age,
      contry: this.country,
      city: this.city,
      company: this.company,
      designation: this.designation,
    };
  };
}

const employee = new Employee(
  "Rahul",
  "Dev",
  35,
  "India",
  "Pune",
  "Software Engineer",
  "Infosys"
);
console.log(employee.getAllDetais());
