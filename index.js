//needs to define series of words

//how to define a route, node js search up 

//
//var http = require('http');
//var https = require('https');/
//const express = require('express');
//const app = express();

//const router = express.Router()

//app.get('/', (req, res) => {
  //  res.send('hello world')
  //});

//app.use(router);


  //http.createServer(app).listen(3001);
  //https.createServer(app).listen(3000);

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


connection.connect()


'use strict';
const fs = require('fs');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/static', (req,res) => {
    connection.query('SELECT * FROM tourneys', (err, rows, fields) => {
        if(err) throw err

        res.send( JSON.stringify(rows[0].name));
    })
})

app.get('/static/:id', (req, res) => {
    res.send(req.params['id']);
})

//adding new items to static
app.post('/static', (req, res) => {
    res.send('POST request to the homepage')
})

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
  
  
