module.exports = function(firstName, lastName, hairColor, eyeColor, age) {
  var storedFirstName = firstName;
  var storedLastName = lastName;
  var storedHairColor = hairColor;
  var storedEyeColor = eyeColor;
  var storedAge = age;

  function greetPerson(Person) {
    console.log("Hello " + Person.firstName + ". My name is " + this.firstName);
  }
  function greetName(firstName) {
    console.log("Hello " + firstName + ". My name is " + this.firstName);
  }

  return {
    firstName: firstName,
    greet: greetName
  };
};
