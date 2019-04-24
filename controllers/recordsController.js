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

// Show json list of employees
recordsController.list = function(req, res) {
  client.hgetall("hrecords", function (err, list) {
    if (err) throw err;
    res.render("../views/index", {list: list});
  });
};

// Show json list of employees
recordsController.api_list = function(req, res) {
  client.hgetall("hrecords", function (err, list) {
    if (err) throw err;

    console.log("Treating records");
    jsonObj = []


    for( var item in list)  {
      var jparsed = JSON.parse(list[item]);
      jsontosend = {}

      var date = new Date(jparsed["timestamp"]);

      // Will display time in 10:30:23 format
      var formattedTime = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' ' +
                          date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
      jsontosend["timestamp"] = formattedTime;
      jsontosend["blood_pressure"] = jparsed["blood_pressure"];
      jsontosend["weight"] = jparsed["weight"];
      jsontosend["more"] = jparsed["more"];
      jsonObj.push(jsontosend);
    }
    jsonwithquotes = JSON.stringify(jsonObj);
    console.log(jsonwithquotes);
    res.send(jsonwithquotes);
  });
};

// Adds a new record
recordsController.save = function(req,res, redirect) {
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

  if(redirect) {
    res.redirect('/');
  }

  res.send('{"timestamp":"23/4/2019 23:48:0","blood_pressure":"1","weight":"1","more":"1"}');

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