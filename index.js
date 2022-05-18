const express = require('express')
const app = express()
const port = 3000
const router = express.Router()

const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '(Water1)s',
    database: 'birthdays'
})


connection.connect((err) => {
    if (err) {
        console.log('Connection error message: ' + err.message);
        return;
    }
    console.log('Connected!')
});


'use strict';
const fs = require('fs');

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
    })
    .post((req, res) => {
        let query1 = "INSERT INTO tourneys (name, wins, best, size) VALUES ('" + req.body.name + "','" + req.body.wins + "','" + req.body.best + "','"  + req.body.size + "');" 
        connection.query( query1, function(err,result){
            if(err) throw err;
            console.log("1 record inserted");
        })
        console.log("POST REQUEST HANDLED");
    })

app.get('/static/:id', (req, res) => {
    res.send(req.params['id']);
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

app.delete('/static/:id', (req,res)=>{
    res.send('delete smtn');
})

//update something 
app.put('/static/:id', (req,res)=>{
    res.send('update shit')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
  
  
