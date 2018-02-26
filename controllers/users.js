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

function create(req, res) {
  console.log(req.body)
  User.create(req.body, function(err, newlyCreatedUserInDb){
    if (err) res.send(err);
    else res.json(newlyCreatedUserInDb);
  });
}

module.exports.index = index;
module.exports.create = create;
