var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var redis = require('redis');

var indexRouter = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

// Create Redis Client
let client = redis.createClient();

client.on('connect', function(){
  console.log('Connected to Redis...');
});



var jsonstr = "{ '1549932156948': 'asdfasdf' } "; //,'1549932185410': '{\"blood_pressure\":\"120/80\",\"weight\":\"80Kg\"}''1549932206400': '{\"blood_pressure\":\"120/80\",\"weight\":\"80Kg\"}'";

var json2 = '{name: "John", age: 31, city: "New York"}';
var myJSON = '[{"name":"John", "age":31, "city":"New York"},{"name":"Billy", "age":31, "city":"New York"}]';

console.log(myJSON);
var parsed = JSON.parse(myJSON);
console.log(parsed);
console.log(parsed[1].name + 'Size: ' + parsed.length);

var HealthRecord = {
  blood_pressure: "120/80",
  weight: "80Kg",
  timestamp: Date.now()
}

client.zrevrange("records", 0, -1, function (err, list) {
  if (err) throw err;
  console.log("Blood Pressure:", JSON.parse(list[0]).blood_pressure);
  console.log('Size: ' + list.length)
});

