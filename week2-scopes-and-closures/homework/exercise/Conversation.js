var Person = require('./Person');

// console.log(Person);

var Steve = Person("Steve", "Jobs", "Grey", "Blue", 68);
var Victor = Person("Victor", "Smith", "Brown", "Black", 26);

var Andrew = {
  firstName: 'Andrew',
  greet: Steve.greet
};

var greet = Andrew.greet;
greet(Victor);
// greet(Victor.firstName);
