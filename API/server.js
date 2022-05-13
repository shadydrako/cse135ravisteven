var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
  mongoose = require('mongoose'),
  Task = ('./api/models/model'), //model loading here
  bodyParser = require('body-parser');

//mongoose connection url
mongoose.promise = global.Promise;
mongoose.connect('mongodb://cse135ravisteven.site/API')

app.use(bodyParser.urlencoded({extended: True}));
app.use(bodyParser.json());

var routes = require('./api/routes/routes'); //getting the route file

rotues(app) //register the route

app.listen(port);

console.log('API IS ON WOOO @ ' + port);