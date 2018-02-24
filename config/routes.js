var express = require('express');
var router = express.Router();
var usersController = require('../controllers/users');
var moviesController = require('../controllers/movies');
var movieListsController = require('../controllers/movieLists');

// User Routes
router.get('/api/users', usersController.index);

//API Call Movie Routes
router.get('/api/movies', moviesController.index);

//Movie List Routes
router.get('/api/movie_lists', movieListsController.index);

module.exports = router;
