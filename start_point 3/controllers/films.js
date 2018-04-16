//since we don't have a database we'll use our front end models at the moment
var films = require('../client/src/models/films')();
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');

var express = require('express');
var filmRouter = new express.Router();

// This is a "get" request restful route for '/films/:id',
// which will respond with the JSON for the film at the
// given index in the films array (id):
filmRouter.get('/:id', function(req, res) {
  res.json({data: films[req.params.id]});
});

// This is a "get" request restful route for '/films',
// which will respond with the JSON for all films:
filmRouter.get('/', function(req, res){
  res.json({data: films});
});

// This is a "post" request restful route for '/films/:id/review',
// which will push a review for the given film onto the films[:id].reviews array - use INSOMNIA to test
// and then will respond with the JSON for all films:
filmRouter.post('/:id/review', function(req, res) {
  films[req.params.id].reviews.push(req.body.review);      // looks for an object denoted like so: {"review":"review object"}
  res.json({data: films});
});

// This is a "post" request restful route for '/films',
// which will push the given film onto the films array - use INSOMNIA to test
// and then will respond with the JSON for all films:
filmRouter.post('/', function(req, res) {
  films.push(req.body.film);      // looks for an object denoted like so: {"film":"film object"}
  res.json({data: films});
});

// This is a "put" request restful route for '/films/:id',
// which will update the film in the films array, with the updated film object - use INSOMNIA to test
// and then will respond with the JSON for all films:
filmRouter.put('/:id', function(req, res){
  films[req.params.id] = req.body.film;
  res.json({data: films});
});

// This is a "delete" request restful route for '/films/:id',
// which will delete the film in the films array - use INSOMNIA to test
// and then will respond with the JSON for all films:
filmRouter.delete('/:id', function(req,res){
  films.splice(req.params.id, 1);
  res.json({data: films});
});



module.exports = filmRouter;
