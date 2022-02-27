// Prototypes

/*
let person = {
  name: 'Buwaneka Saranga',
  age: 29,
};

let employee = {
  position: 'Software Developer',
  company: 'Zone24x7',
};

employee.__proto__ = person;

console.log(employee.name); // name is missing from employee object, therefore JS goes into the prototype to get it
console.log(employee.age); // similar behavior here
*/

let person = {
  setName: function (name) {
    this.name = name;
  },
};

let saranga = {
  __proto__: person,
};

saranga.setName('jdfhsk');
console.log(saranga.name);
