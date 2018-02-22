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

module.exports.index = index;
