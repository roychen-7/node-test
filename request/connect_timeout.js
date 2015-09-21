var express = require('express');
var http = require('http');
var app = express();

// Demo server
app.get("/", function (req, res) {
    res.end("Finished");
});

http.createServer(app).listen(4000, function () {
    console.log('Server is listening on 4000');
});

var request = require('request');

// Test connect timeout
for (var i = 0; i < 10000; i++) {
    request("http://127.0.0.1:4000/", {
        timeout: 15 * 1000
    }, function(err, res, body) {
        if (err) {
            console.log(err);
            // { [Error: ETIMEDOUT] code: 'ETIMEDOUT', connect: true }
        }
    });
}
