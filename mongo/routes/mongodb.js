var subapp = module.exports = require('express')();
var mongodb = require('mongodb');

var mongoServer = new mongodb.Server('127.0.0.1', 27017);
var dbConn;

var dbAdmin = new mongodb.Db('admin', mongoServer);
dbAdmin.open(function(err, db) {
  dbConn = dbAdmin.db('test');
});

subapp.get("/mongodb/find", function (req, res) {
  var collection = dbConn.collection('people');

  collection.aggregate([{
    $match: {
      name: 'Roy'
    }
  }, {
    $group: {
      _id: {
        name: "$name",
        age: "$age"
      },
      count: {$sum: 1}
    }
  }], function (err, results) {
    console.log(err);
    console.log(results);
    res.end();
  });
});
