var models = require('../models');
var Movie = models.Movie;
var MovieList = models.MovieList;
let fetch = require('node-fetch');

function index(req, res) {
  console.log(req.query.query)
  fetch('http://api.themoviedb.org/3/search/movie?api_key=fa2ca4d107cc5c945afc0d149bd3b890&query=' + req.query.query)
    .then(res => res.json())
    .then(json => res.json(json));
}

// function create(req, res) {
//   console.log(req.body)
//   Movie.create(req.body, function(err, newlyCreatedMovieInDb){
//     if (err) res.send(err);
//     else res.json(newlyCreatedMovieInDb);
//   });
// }

function create(req, res) {
  MovieList.findById(req.params.movieList_id, function(err, foundMovieList) {
    console.log(req.body)
    var newMovie = new Movie(req.body);
    console.log(newMovie)
    foundMovieList.movies.push(newMovie);
    foundMovieList.save(function(err, savedMovieList) {
      res.json(newMovie);
    });
  });
}

module.exports.index = index;
module.exports.create = create;
