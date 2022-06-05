const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const path = require('path');

var passport = require('passport');
var LocalStrategy = require('passport-local');
var crypto = require('crypto');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));


app.get('/', function (req,res){
	res.sendFile('login.html', {root: __dirname});
})

//this will pull up login page
app.get('/login', function (req, res){
	res.sendFile('login.html', {root: __dirname});
});


passport.use(new LocalStrategy(function verify(username, password, cb) {
	db.get('SELECT * FROM users WHERE username = ?', [ username ], function(err, row) {
	  if (err) { return cb(err); }
	  if (!row) { return cb(null, false, { message: 'Incorrect username or password.' }); }
  
	  crypto.pbkdf2(password, row.salt, 310000, 32, 'sha256', function(err, hashedPassword) {
		if (err) { return cb(err); }
		if (!crypto.timingSafeEqual(row.hashed_password, hashedPassword)) {
		  return cb(null, false, { message: 'Incorrect username or password.' });
		}
		return cb(null, row);
	  });
	});
}));

router.post('/login/password', passport.authenticate('local', {
	successRedirect: '/',
	failureRedirect: '/login'
  }));



app.listen(3000);