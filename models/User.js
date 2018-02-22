var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    MovieList = require('./MovieList');

var UserSchema = new Schema({
	name: String,
	email: String,
	password: String,
	movie_lists: [MovieList.schema],
  comments: [Comment.schema]
});

var User = mongoose.model('User', UserSchema);

module.exports = User;
