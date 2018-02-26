require('dotenv').config();

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var myMoviesRoutes = require('./config/routes.js');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
  next();
});

// app.use(express.static('public'));
app.use(bodyParser.json());

app.use(myMoviesRoutes);

let port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log(`Listening on port ${ port }`);
});
