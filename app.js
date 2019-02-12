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


var client = redis.createClient();

client.on('connect', function(){
  console.log('Controller connected to Redis...');
});

var HealthRecord = {
  blood_pressure: '120/80',
  weight: '90Kg',
  more: 'Nothing',
  timestamp: Date.now()
}

client.hset('testdu', HealthRecord.timestamp, JSON.stringify(HealthRecord), function(err, res) {
  if(err) throw err;

  console.log(res);
});

client.hgetall('testdu', function(err, res) {
  if(err) throw err;

  for( var idx in res ) {
    var obj = JSON.parse(res[idx]);
    console.log(idx + ' ' + obj.blood_pressure);
    //client.hdel("testdu", idx);
  }
});

client.hset('testdu', 1550009340922, "444444", function(err, res) {
  if(err) throw err;

  console.log(res);
});