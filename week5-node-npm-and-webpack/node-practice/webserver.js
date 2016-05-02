// let's setup a webserver using express!

// first, let's define a PORT to run our webserver on
// we'll need the built-in 'process'
var process = require('process');
// process has a property called 'env' that points to
// environment
var PORT = process.env.PORT;
if (!PORT) {
  console.warn('Hey you didn\'t define PORT');
  PORT = 3000;
}

// we're going to use the Filesystem (fs) module
// to create some logs for our webserver
var fs = require('fs');

// let's bring in the express module
// notice here that we're not specifying a directory with a './',
// the first place it will look is within the built-in modules
// there's no module named express built into Node
// so node will look inside a folder called 'node_modules' by default
// we need to install express by running 'npm install express'
// from the command line
var express = require('express');
var logger = require('morgan');

// create a webserver
var server = express();

// create a counter variable
var counter = 0;

server.use(logger('dev'));

// tell the server to listen on PORT
server.listen(PORT);

server.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html');
  console.log('Page visited ' + counter++ + ' times');
  var indexFile = fs.readFileSync('./index.html', 'utf-8');
  // find the curly braces, and the number, replace it
  // with the number of visits (psuedo-angular)
  indexFile = indexFile.replace(/\{\{.{1,}\}\}/, '{{' + counter + '}}');
  fs.writeFileSync('./index.html', indexFile);
});

// level 1 hw:
// write a separate webserver in another folder
// copy your index.html & todo.js from last week's assignment
// into that folder, you should now have a working webserver hosting
// your Firebase Todo application
// (hint: you'll need express.static)

// level 2 hw:
// rewrite the reading and writing of the file on line 42 & 46
// with their asynchronous counterparts

// extra credit:
// research the ternary operator, and rewrite the part
// where we assigned a default port if none was given through the command
// line in 1 line
