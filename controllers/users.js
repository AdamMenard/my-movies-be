var models = require('../models');
var User = models.User;

function index(req, res) {
  User.find({}, function(err, allUsersFromServer) {
    if (err) {
    	res.send(err);
    } else {
    	res.json(allUsersFromServer);
    }
  });
}

module.exports.index = index;
