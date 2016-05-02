greet("Seth")(); // greet invoked immediately

// async!
setTimeout(greet("Seth"), 5000); // greet will be invoked after 5 seconds

function greet(name) {
  return function() {
    console.log('Hi ' + name);
  };
}
