var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/movies" );

module.exports.User = require("./User");
module.exports.MovieList = require("./MovieList");
module.exports.Movie = require("./Movie");
module.exports.Comment = require("./Comment");
