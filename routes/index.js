var express = require('express');
var router = express.Router();
var records = require("../controllers/recordsController.js");

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('Routing /');
  records.list(req, res);
});
  
// Save record
router.post('/save', function(req, res) {
  console.log('Routing post /save');
  records.save(req, res, true);
});

// Delete record
router.get('/delete/:id', function(req, res) {
  console.log('Routing get /delete');
  records.delete(req, res);
});

// Update record
router.post('/update', function(req, res) {
  console.log('Routing post /update');
  records.update(req, res);
});

//################################ API SECTION DESIGNED FOR MOBILE APP CLASSES #############################
router.get('/api/record', function(req, res, next) {
  console.log('Routing /api/record');
  records.api_list(req, res);
});

// Save record
router.post('/api/record', function(req, res) {
  console.log('Routing post /api/save');
  records.save(req, res, false);
});


module.exports = router;
