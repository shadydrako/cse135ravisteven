const express = require('express')
const app = express()
const port = 3000
const router = express.Router()

const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'cse135ravisteven.site:3000',
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
    /*
    connection.query('SELECT * FROM tourneys', (err, rows, fields) => {
        if(err) throw err

        res.send( JSON.stringify(rows[0].name));
    })
    */
   res.send('fuck');
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
  
  
