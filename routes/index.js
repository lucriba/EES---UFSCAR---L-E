var express = require('express');
var router = express.Router();
var records = require("../controllers/recordsController.js");
var bodyParser = require('body-parser');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('Routing //');
  records.list(req, res);
});


router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
  
// Save employee
router.post('/save', function(req, res) {
  console.log('Routing post /save');
  console.log('Bodyyyy: ' + req.body);
  console.log('Bodyyyy: ' + req.body.blood_pressure);
  records.save(req, res);
});

module.exports = router;
