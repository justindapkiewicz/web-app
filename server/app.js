var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

// User defined
var db = require('./db')();
var user = require('./user')();

app.use(express.static(path.resolve(__dirname + '/../front/static')));

app.use(bodyParser.urlencoded({limit: '50mb'}));
app.use(bodyParser.json({limit: '50mb'}));

// Login
app.get('/', function(req, res) {
  res.sendfile('index.html');
});

// Parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
var server = app.listen(8000);

// Connect to DB
mongoose.connect(db);
db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log('connected successfully');
});
db.on('disconnected', console.log.bind(console, 'disconnected from server'));

// Login a user
app.get('/login', function(req, res, next) {
  var username = req.query.username;
  var password = req.query.password;

  user.login(username, password, function(data) {
    res.send(data);
  });
});

// Remove Cookies from active user
app.post('/api/user/logout', function(req, res) {
  if (req.headers.cookie) {
    var cookie = req.headers.cookie.split('=')[1];

    user.logout(cookie, function(data) {
      res.send(data);
    })
  }
  else {
    res.redirect('/#/home');
  }
});