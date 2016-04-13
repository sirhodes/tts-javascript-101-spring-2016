var Person = require('./Person');

var Woody = Person('Woody');
var Buzz = Person('Buzz');

Woody.greet(Buzz);
Buzz.greet(Woody);
