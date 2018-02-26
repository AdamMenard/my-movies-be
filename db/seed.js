let models = require('../models');

let users = [{
  	name: 'Adam',
  	email: 'adam@email.com',
  	password: 'adam',
  	movie_lists: [MovieList[0]],
    // comments: [Comment.schema]
  }, {
    name: 'Bob',
  	email: 'bob@email.com',
  	password: 'bob',
  	movie_lists: [MovieList[1]],
    // comments: [Comment.schema]
  }
];

let movies = [{
  title: 'Terminator',
  description: 'Best Movie of all time, almost.',
  image: 'http://t1.gstatic.com/images?q=tbn:ANd9GcRHzSaUCOKu1RwS-bfbaUeeo_I1JcBkiuJRjBElvJi7qsHXkUkJ'
  }, {
  title: 'Terminator 2',
	description: 'Runner up best movie of all time.',
	image: 'http://t1.gstatic.com/images?q=tbn:ANd9GcS5J6Ay6y1UT7WAI4U7Zm2KDYITrvfOI3vmaCNdGhx_0jmWiI1d'
  }
];

// let comments = [{
//   user:
//   }
// ];
//
let movieList = [{
  title: 'Best movies ever',
  movies: [movies[0], movies[1]],
  // comments: []
  }, {
  title: 'Really good movie',
  movies: [movies[0]],
  // comments: []
  }
]

models.User.remove({}, function(err, res) {
  if (err) {
    console.log('Error removing comments: ', err);
    process.exit();
  }
  console.log('Removed all Users');
  models.User.create(users, function(err, users) {
    if (err) {
      console.log('Error creating users: ', err);
      process.exit();
    }
    console.log('Created', users.length, 'users');
  });
});

models.Movie.remove({}, function(err, res) {
  if (err) {
    console.log('Error removing movies: ', err);
    process.exit();
  }
  console.log('Removed all Movies');
  models.Movie.create(movies, function(err, movies) {
    if (err) {
      console.log('Error creating movies: ', err);
      process.exit();
    }
    console.log('Created', movies.length, 'movies');
  });
});

models.MovieList.remove({}, function(err, res) {
  if (err) {
    console.log('Error removing movie lists: ', err);
    process.exit();
  }
  console.log('Removed all Movie Lists');
  models.MovieList.create(movieList, function(err, movies) {
    if (err) {
      console.log('Error creating movie list: ', err);
      process.exit();
    }
    console.log('Created', movieList.length, 'movieList');
  });
});
