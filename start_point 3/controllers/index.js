var express = require('express');
var router = new express.Router();

// router.use('/cats', require('./cats'));

router.get('/films', function(req, res){
  res.json({data: "Welcome!"});
})

module.exports = router;
