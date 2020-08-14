var http = require('http');
var fs = require('fs');
var url = require('url');
const { response } = require('express');

http.createServer(function(request, response) {
  var req = url.parse(request.url, true)
  var action = req.pathname;

  if (action == '/sammy.jpg') {
    var img = fs.readFileSync('./sammy.jpg');
    response.writeHead(200, {'Content-Type': 'image/gif'});
    response.end(img, 'binary');
  } else {
    var page = fs.readFileSync("index.html");
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(page)
  }
}).listen(3001);


