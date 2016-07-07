var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;

app.get('/', function(req, res) {
	res.send('Hello W0rld');
});


// static route
app.get('/meow', function(req, res) {
	res.send('cat');
});


// dynamic route
app.get('/meow/:something', function(req, res) {
	console.log(req.params);
	res.send(req.params.something);
}

app.listen(PORT, function() {
	console.log("I think I hear something...");
});