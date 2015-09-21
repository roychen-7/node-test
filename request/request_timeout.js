var express = require('express');
var http = require('http');
var app = express();

// Demo server
app.get("/timeout", function (req, res) {
    console.log("Start");
    setTimeout(function() {
        res.end("Finished");
    }, 1 * 60 * 1000);
});

http.createServer(app).listen(4000, function () {
    console.log('Server is listening on 4000');
});

var request = require('request');

// Test default timeout
var startTime = new Date().getTime();
request("http://127.0.0.1:4000/timeout", {
}, function(err, res, body) {
    // Default no timeout
    console.log("Request timeout ===");
    console.log(body);
    console.log(new Date().getTime() - startTime);
    console.log("Request timeout end===");
});
