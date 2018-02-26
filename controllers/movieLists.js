var models = require('../models');
var MovieList = models.MovieList;

function index(req, res) {
  MovieList.find({}, function(err, allMovieListsFromServer) {
    if (err) {
    	res.send(err);
    } else {
    	res.json(allMovieListsFromServer);
    }
  });
}

function create(req, res) {
  console.log(req.body)
  MovieList.create(req.body, function(err, newlyCreatedMovieListInDb){
    if (err) res.send(err);
    else res.json(newlyCreatedMovieListInDb);
  });
}

module.exports.index = index;
module.exports.create = create;
