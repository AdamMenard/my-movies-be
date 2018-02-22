var models = require('../models');
var Movie = models.Movie;

function index(req, res) {
  Movie.find({}, function(err, allMoviesFromServer) {
    if (err) {
    	res.send(err);
    } else {
    	res.json(allMoviesFromServer);
    }
  });
}

module.exports.index = index;
