const express = require('express')
const app = express()
const port = 3000
const router = express.Router()
const bodyParser = require('body-parser');

const mysql = require('mysql')

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

app.get('/', (req, res) => {
  res.send('Hello World!')
})

/*
app.get('/static', (req,res) => {
    connection.query('SELECT * FROM tourneys', (err, rows, fields) => {
        if(err) throw err

        res.send(rows);
    })
    console.log("GET REQUEST HANDLED");
})
*/

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


//
/*
//adding new items to static
app.post('/static', (req, res) => {
    let query1 = "INSERT INTO tourneys (name, wins, best, size) VALUES ('" + req.body.name + "','" + req.body.wins + "','" + req.body.best + "','"  + req.body.size + "');" 
    connection.query( query1, function(err,result){
        if(err) throw err;
        console.log("1 record inserted");
    })
    console.log("POST REQUEST HANDLED");
})
*/

//delete something

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
            console.log("1 record inserted");
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
        res.send('update shit')
    })
    .put((req,res)=>{
        let query1 = "UPDATE stuff SET value='"+req.body.value +"' WHERE name ='" +req.params.name+"';"
        console.log(query1)
        connection2.query(query1,function(err,rows,fields,result){
            if(err) throw err;
        })
        res.send('update shit')
    })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


