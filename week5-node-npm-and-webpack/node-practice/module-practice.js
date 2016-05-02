// we can require other files (or modules) in our NodeJS programs
var Person = require('./Person'); // the variable Person is now equal to the
// Function we exported in the Person file
var creator = Person(
  "Seth", // firstName
  "Rhodes", // lastName
  "brown", // eyeColor
  9000 // age
);

console.log(creator);
