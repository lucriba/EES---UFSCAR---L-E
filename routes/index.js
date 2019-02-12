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
  records.save(req, res);
});

// Delete record
router.get('/delete/:id', function(req, res) {
  console.log('Routing get /delete');
  records.delete(req, res);
});


module.exports = router;
