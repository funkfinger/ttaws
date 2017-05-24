'use strict';
var express = require('express');
var app = express();

var path = require('path');
var fs = require('fs');

app.get('/', function(req, res) {
  // res.sendFile(path.join(__dirname, 'public/index.html'));
  var contents = fs.readFileSync("public/index.html");
  context.succeed({
    statusCode: 200,
    body: contents.toString(),
    headers: {'Content-Type': 'text/html'}
  });
})

module.exports = app;

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

 // exports.get = function(event, context) {
 //   var contents = fs.readFileSync("public/index.html");
 //   context.succeed({
 //     statusCode: 200,
 //     body: contents.toString(),
 //     headers: {'Content-Type': 'text/html'}
 //   });
 // };
