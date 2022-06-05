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



//from discussion
function ensureAuthentication(req,res,next){
	if(req.isAuthenticated() ){return next();}
	res.redirect('login');
}

//this will pull up login page
//this works at least
app.get('/login', function (req, res){
	res.sendFile('/hw4_login/login.html', {root: __dirname});
});

app.post('/login', function (req, res){
	res.sendFile('index.html', {root: __dirname});
});

//this should not do anything
app.get('/logout', function(req, res){
	req.logout();
	req.redirect('login');
})

//this shall send us back to the home page with all the links
app.get('/home', ensureAuthentication, function(req, res){
	res.sendFile('index.html', {root: __dirname});
})


// app.get('/reports', ensureAuthentication, function(req, res){
// 	res.sendFile('login.html', {root: __dirname});
// });


app.listen(3000);