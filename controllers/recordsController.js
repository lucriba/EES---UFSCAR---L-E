var redis = require('redis');
var bodyParser = require('body-parser');
var Record = require("../models/Record");

var client = redis.createClient();

client.on('connect', function(){
  console.log('Controller connected to Redis...');
});

var recordsController = {};

// Show list of employees
recordsController.list = function(req, res) {
  client.zrevrange("records", 0, -1, function (err, list) {
    if (err) throw err;
    res.render("../views/index", {list: list})
    console.log("Controller Blood Pressure:", JSON.parse(list[0]).blood_pressure);
    console.log('Controller Size: ' + list.length)
  });
};

// Adds a new record
recordsController.save = function(req,res) {
  var HealthRecord = {
    blood_pressure: "120/88",
    weight: "80Kg",
    timestamp: Date.now()
  }

  console.log('Body: ' + req.body);

  client.zadd('records', Date.now(), JSON.stringify(HealthRecord), function(err,res) {
    if (err) throw err;
  
    console.log(res);
  });

  res.redirect('/');

}


module.exports = recordsController;