const express = require('express')
const app = express()
const port = 3000
const router = express.Router()
const bodyParser = require('body-parser');
const mysql = require('mysql')
const session = require('express-session');
const path = require('path');


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// all of the databases we may need to use
//hw 4

const userAccounts = mysql.createConnection({
	host     : 'localhost',
	user     : 'ravi',
	password : '(Water1)s',
	database : 'accounts'
});



app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));


app.get('/', function(request, response) {
	// Render login template
	response.sendFile(path.join(__dirname + '/login.html'));
});

app.post('/auth', function(request, response) {
	// Capture the input fields
	let username = request.body.username;
	let password = request.body.password;
	// Ensure the input fields exists and are not empty
	if (username && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				request.session.loggedin = true;
				request.session.username = username;
				// Redirect to home page
				response.redirect('/home');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

app.get('/home', function(request, response) {
	if (request.session.loggedin) {
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});

//------------------------------------------------------------------------------------------------------------hw3
//------------------------------------------------------------------------------------------------------------

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '(Water1)s',
    database: 'static'
})

const connection2 = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '(Water1)s',
    database: 'performance'
})

const connection3 = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '(Water1)s',
    database: 'activity'
})


connection.connect((err) => {
    if (err) {
        console.log('Connection error message: ' + err.message);
        return;
    }
    console.log('Connected!')
});


connection2.connect((err) => {
    if (err) {
        console.log('Connection error message: ' + err.message);
        return;
    }
    console.log('Connected2!')
});

connection3.connect((err) => {
    if (err) {
        console.log('Connection error message: ' + err.message);
        return;
    }
    console.log('Connected3!')
});


'use strict';
const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




app.route('/static')
    .get((req,res) => {
        connection.query('SELECT * FROM tourneys', (err, rows, fields) => {
            if(err) throw err
            res.send(rows);
        })
        console.log("GET REQUEST HANDLED");
        return;
    })
    .post((req, res) => {
        let query1 = "INSERT INTO tourneys (name, value ) VALUES ('" + req.body.name + "','" + req.body.value + "')" 
        connection.query( query1, function(err,rows,fields,result){
            if(err) throw err;
            console.log("1 record inserted");
            res.send("POST HANDLED")
        })
        console.log("POST REQUEST HANDLED");
        return;
    })

app.get('/static/:name', (req, res) => {
    let query1 = "SELECT name,value FROM tourneys WHERE name='"+req.params.name+"'"
    console.log(query1)
    connection.query(query1,function(err,rows,fields,result){
        if(err) throw err;
        res.send(rows)
    })
    console.log("GET REQUEST ID HANDLED ");
    return;
})



app.delete('/static/:name', (req,res)=>{
    let query1 = "DELETE FROM tourneys WHERE name='" +req.params.name+"';"
    console.log(query1)
    connection.query(query1,function(err,rows,fields,result){
        if(err) throw err;
    })
    res.send("DELETE REQUEST ID HANDLED ");
    return;
})

//update something 
app.put('/static/:name', (req,res)=>{
    let query1 = "UPDATE tourneys SET value='"+req.body.value +"' WHERE name ='" +req.params.name+"';"
    console.log(query1)
    connection.query(query1,function(err,rows,fields,result){
        if(err) throw err;
    })
    res.send('update shit')
})

//-----------------------performance
app.route('/performance')
    .get((req,res) => {
        connection2.query('SELECT * FROM stuff', (err, rows, fields) => {
            if(err) throw err
            res.send(rows);
        })
        console.log("GET REQUEST HANDLED");
        return;
    })
    .post((req, res) => {
        let query1 = "INSERT INTO stuff (name, value ) VALUES ('" + req.body.name + "','" + req.body.value + "')" 
        connection2.query( query1, function(err,rows,fields,result){
            if(err) throw err;
            res.send("POST HANDLED")
        })
        console.log("POST REQUEST HANDLED");
        return;
    })


app.route('/performance/:name')
    .get((req, res) => {
    let query1 = "SELECT name,value FROM stuff WHERE name='"+req.params.name+"'"
    console.log(query1)
    connection2.query(query1,function(err,rows,fields,result){
        if(err) throw err;
        res.send(rows)
    })
    console.log("GET REQUEST ID HANDLED ");
    return;
    })
    .delete((req,res)=>{
        let query1 = "UPDATE stuff SET value='"+req.body.value +"' WHERE name ='" +req.params.name+"';"
        console.log(query1)
        connection2.query(query1,function(err,rows,fields,result){
            if(err) throw err;
        })
        res.send('delete shit')
    })
    .put((req,res)=>{
        let query1 = "UPDATE stuff SET value='"+req.body.value +"' WHERE name ='" +req.params.name+"';"
        console.log(query1)
        connection2.query(query1,function(err,rows,fields,result){
            if(err) throw err;
        })
        res.send('update shit')
    })


    //------------------------ACTIVITY
    app.route('/activity')
    .get((req,res) => {
        connection3.query('SELECT * FROM stuff', (err, rows, fields) => {
            if(err) throw err
            res.send(rows);
        })
        console.log("GET REQUEST HANDLED");
        return;
    })
    .post((req, res) => {
        let query1 = "INSERT INTO stuff (name, value ) VALUES ('" + req.body.name + "','" + req.body.value + "')" 
        connection3.query( query1, function(err,rows,fields,result){
            if(err) throw err;
            res.send("POST HANDLED")
        })
        console.log("POST REQUEST HANDLED");
        return;
    })


    app.route('/activity/:name')
    .get((req, res) => {
    let query1 = "SELECT name,value FROM stuff WHERE name='"+req.params.name+"'"
    console.log(query1)
    connection3.query(query1,function(err,rows,fields,result){
        if(err) throw err;
        res.send(rows)
    })
    console.log("GET REQUEST ID HANDLED ");
    return;
    })
    .delete((req,res)=>{
        let query1 = "UPDATE stuff SET value='"+req.body.value +"' WHERE name ='" +req.params.name+"';"
        console.log(query1)
        connection3.query(query1,function(err,rows,fields,result){
            if(err) throw err;
        })
        res.send('update shit')
    })
    .put((req,res)=>{
        let query1 = "UPDATE stuff SET value='"+req.body.value +"' WHERE name ='" +req.params.name+"';"
        console.log(query1)
        connection3.query(query1,function(err,rows,fields,result){
            if(err) throw err;
        })
        res.send('update shit')
    })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


//----------------------------------------------------------------------------------------------------------------------------------------------------





