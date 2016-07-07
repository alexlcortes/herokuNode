var express = require('express');
var app = express();

var PORT = 3000;

app.get('/', function(req, res) {
	res.send('Hello W0rld');
});

app.listen(PORT, function() {
	console.log("I think I hear something...");
});