// we have core modules built into Node!
// we can require them without having to install anything
var fs = require('fs');
// readFileSync reads files SYNCHRONOUSLY
var personFile = fs.readFileSync('./Person.js', 'utf-8');

// readFile reads files ASYNCHRONOUSLY
fs.readFile('./Person.js', {encoding: 'utf-8'}, function(err, data) {
  if (err) {
    console.log(err);
  }
  // console.log(data);
});

// async, will be queued up and ran later
setTimeout(function() {
  console.log('this is async, will log after synchronous commands');
}, 0);

// sync, will be ran instantly
console.log('this is a synchronous command, file will be read after this executes');

// we also have access to an 'os' module that can give info about
// our computer
var os = require('os');
console.log(os.cpus().length);
console.log(os.homedir());
