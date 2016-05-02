// use the module.exports keyword to define the exported functionality
// you might (will) see packages and code that uses the keyword "exports"
// without module in front of it, you should just use module.exports
// to keep it consistent
module.exports = function(firstName, lastName, eyeColor, age) {
  var firstName = firstName; // points to the firstName argument, stored as a local variable also called 'firstName'
  var lastName = lastName;
  var eyeColor = eyeColor;
  var age = age;

  // then we exposed traits of our Person by using return
  // and returning an Object
  return {
    // the key is arbitrary and can be named anything
    // the value points to the variable 'firstName' on line 6
    firstName: firstName,
    lastName: lastName,
    eyeColor: eyeColor,
    age: age
  };
};
