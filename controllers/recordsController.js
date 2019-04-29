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
      jsontosend["timestamp"] = jparsed["timestamp"];
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

  console.log("Saving new data")

  client.hset('hrecords', HealthRecord.timestamp, JSON.stringify(HealthRecord), function(err,res) {
    if (err) throw err;
    console.log(res);
  });

  if(redirect) {
    res.redirect('/');
  }

  res.send(JSON.stringify(HealthRecord));

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

// Removes an existing record
recordsController.api_delete = function(req,res) {

  console.log('Deleting ' + req.body);
  client.hdel('hrecords', req.body, function(err, res) {
    if (err) throw err;
    console.log(res);
  });

}

// Edit an existing record
recordsController.update = function(req,res, redirect) {

  console.log('Updating ' + req.body.timestamp);

  if(req.body.timestamp == "") {
    req.body.timestamp = Date.now()
  }

  var HealthRecord = {
    blood_pressure: req.body.blood_pressure,
    weight: req.body.weight,
    more: req.body.more,
    timestamp: req.body.timestamp
  }

  if(HealthRecord.timestamp )
 
  client.hset('hrecords', req.body.timestamp, JSON.stringify(HealthRecord), function(err,res) {
    if (err) throw err;
    console.log(res);
  });

  if(redirect) {
    res.redirect('/');
  }

  res.send(JSON.stringify(HealthRecord));

}

module.exports = recordsController;