module.exports = function(name, eyeColor) {
  var name = name;
  var eyeColor = eyeColor;
  return {
    name: name,
    greet: function(Person) {
      console.log(`Hi ${Person.name}! I'm ${this.name}. Nice to meet you.`);
    }
  };
};
