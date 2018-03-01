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

function show(req, res) {
  MovieList.findById(req.params.movieList_id, function(err, oneMovieListFromServer) {
    if (err) {
    	res.send(err);
    } else {
    	res.json(oneMovieListFromServer);
    }
  });
}

function create(req, res) {
  // console.log(req.body)
  MovieList.create(req.body, function(err, newlyCreatedMovieListInDb){
    if (err) res.send(err);
    else res.json(newlyCreatedMovieListInDb);
  });
}

function destroy(req, res) {
  MovieList.findByIdAndRemove(req.params.movieList_id, function(err, deletedAlbum) {
    if (err) { console.log('error', err); }
    res.send(200);
  });
}

module.exports.index = index;
module.exports.show = show;
module.exports.create = create;
module.exports.destroy = destroy;
