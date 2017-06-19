// require the HTTP node package
var http = require("http");

// define port that the server will run on
var PORT = 8080;

// function that will handle requests
function handleRequest(request, response) {
	response.end("It works! Path hit: "+request.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
	console.log("Server listening on http://localhost:%s", PORT);
});