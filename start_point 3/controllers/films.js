//since we don't have a database we'll use our front end models at the moment
var films = require('../client/src/models/films')();
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');

var express = require('express');
var filmRouter = new express.Router();

// This is a "get" request restful route for '/films',
// which will respond with the JSON for the film at the
// given index in the films array (id):
filmRouter.get('/:id', function(req, res) {
  res.json({data: films[req.params.id]});
});

// This is a "get" request restful route for '/films',
// which will respond with the JSON for all films:
filmRouter.get('/', function(req, res){
  res.json(films);
})

module.exports = filmRouter;
