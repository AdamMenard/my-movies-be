var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    Movie = require('./Movie');
    Comment = require('./Comment');

var MovieListSchema = new Schema({
	title: String,
	movies: [Movie.schema],
	comments: [Comment.schema]
});

var MovieList = mongoose.model('MovieList', MovieListSchema);

module.exports = MovieList;
