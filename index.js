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


connection.connect((err) => {
    if (err) {
        console.log('Connection error message: ' + err.message);
        return;
    }
    console.log('Connected!')
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
        let query1 = "INSERT INTO tourneys (name, value ) VALUES ('" + req.body.name + "','" + req.body.wins + "');" 
        connection.query( query1, function(err,result){
            if(err) throw err;
            console.log("1 record inserted");
        })
        console.log("POST REQUEST HANDLED");
        return;
    })

app.get('/static/:id', (req, res) => {
    let query1 = "SELECT * FROM tourneys WHERE name='"+req.params.id+"';"
    console.log(query1)
    connection.query(query1,function(err,result){
        if(err) throw err;
    })
    console.log("POST REQUEST ID HANDLED ");
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
  
  


