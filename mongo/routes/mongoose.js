var subapp = module.exports = require("express")();
var mongoose = require('mongoose');

var url = "mongodb://127.0.0.1:27017/person";
var options = {};

mongoose.connect(url, options);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

var personSchema = mongoose.Schema({
    name: String,
    age: Number
});

var Person = mongoose.model('Person', personSchema);

subapp.get("/mongoose", function (req, res) {
    var p = new Person({
        name: 'Roy',
        age: 25
    });

    p.save(function(err, p) {
        if (err) {
            console.log(err);
            return res.end('failure');
        }

        console.log(p);
        res.end('success');
    });
});

subapp.get("/mongoose/find", function (req, res) {
    Person.find({name: 'Roy'}, function(err, persons) {
        if (err) {
            console.log(err);
            return res.end('failure');
        }

        res.json(persons);
    });
});
