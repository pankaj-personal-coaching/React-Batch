class Person {
  #name; // private to the class.
  constructor(name) {
    this.#name = name;
  }
  #getName = () => {
    return this.#name;
  };
  getName = () => {
    return this.#getName();
  };
}
let p = new Person("Pankaj");
console.log(p.getName());
