const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));


//this will pull up login page
app.get('/login', function (req, res){
	res.sendFile('login.html', {root: __dirname});
});



app.listen(3000);