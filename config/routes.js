var express = require('express');
var router = express.Router();
var usersController = require('../controllers/users');
var moviesController = require('../controllers/movies');
var movieListsController = require('../controllers/movieLists');


// User Routes
router.get('/api/users', usersController.index);
router.post('/api/users', usersController.create);

//API Call Movie Routes
router.get('/api/movies', moviesController.index);
router.post('/api/movie_lists/:movieList_id/movies', moviesController.create);

//Movie List Routes
router.get('/api/movie_lists', movieListsController.index);
router.get('/api/movie_lists/:movieList_id', movieListsController.show);
router.post('/api/movie_lists', movieListsController.create);

module.exports = router;
