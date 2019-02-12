var redis = require('redis');

var client = redis.createClient();

client.on('connect', function(){
  console.log('Controller connected to Redis...');
});

var recordsController = {};

// Show list of employees
recordsController.list = function(req, res) {
  client.hgetall("hrecords", function (err, list) {
    if (err) throw err;
    res.render("../views/index", {list: list});
  });
};

// Adds a new record
recordsController.save = function(req,res) {
  var HealthRecord = {
    blood_pressure: req.body.blood_pressure,
    weight: req.body.weight,
    more: req.body.more,
    timestamp: Date.now()
  }

  client.hset('hrecords', HealthRecord.timestamp, JSON.stringify(HealthRecord), function(err,res) {
    if (err) throw err;
    console.log(res);
  });

  res.redirect('/');

}

// Removes an existing record
recordsController.delete = function(req,res) {

  console.log('Deleting ' + req.params.id);
  client.hdel('hrecords', req.params.id, function(err, res) {
    if (err) throw err;
    console.log(res);
  });

  res.redirect('/');

}

// Edit an existing record
recordsController.update = function(req,res) {

  console.log('Updating ' + req.body.timestamp);

  var HealthRecord = {
    blood_pressure: req.body.blood_pressure,
    weight: req.body.weight,
    more: req.body.more,
    timestamp: req.body.timestamp
  }
 
  client.hset('hrecords', req.body.timestamp, JSON.stringify(HealthRecord), function(err,res) {
    if (err) throw err;
    console.log(res);
  });

  res.redirect('/');

}

module.exports = recordsController;