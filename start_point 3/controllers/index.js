var express = require('express');
var router = new express.Router();

// This will route all /films restful routes to ./films.js:
router.use('/films', require('./films'));

// This is a "get" request restful route for '/', with a response:
router.get('/', function(req, res){
  res.json({data: "Welcome!"});
})

// This is a "get" request restful route for '/about', with a response:
router.get('/about', function(req, res){
  res.json({data: "All about us"});
})

module.exports = router;
