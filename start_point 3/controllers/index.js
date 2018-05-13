const express = require('express');
// var router = new express.Router();
const router = express.Router();        // Don't need new here...

const path = require("path");

// This will route all /films restful routes to ./films.js:
router.use('/api/films', require('./films'));

// This is a "get" request restful route for '/', with a response:
router.get('/', function(req, res){
  // res.json({data: "Welcome!"});
  res.sendFile(path.join(__dirname + "/../client/build/index.html"))
})

// This is a "get" request restful route for '/about', with a response:
router.get('/about', function(req, res){
  res.json({data: "All about us"});
})

module.exports = router;
