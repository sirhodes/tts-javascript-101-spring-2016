// write a static HTML using express as a webserver
// bring in express after running `npm install` in
// your terminal
var express = require('express');

//create a server
var server = express();

//listen on a port
server.listen(8081);

//serve static files using express.static
console.log(__dirname);
server.use(express.static(__dirname + '/'));
