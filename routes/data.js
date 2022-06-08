const express = require('express');
const { appendFile } = require('fs');
//const authController = require('../controller/auth')
const router = express.Router();
const mysql = require('mysql'); 



const db = mysql.createConnection({
    host: process.env.HOST,
    user:  process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
  })


router.get('/users',(req, res)  => {
    //SENDING TABLE DATA TO WHATEVER
    db.query('SELECT * FROM users', (err, rows, fields ) =>{
        if(err) throw err;
        res.send(rows);
    })
})

router.delete('/users/:id', (req, res) => {
    db.query('DELETE * FROM users WHERE id = ?', [req.params.id], (err,rows, fields)=>{
        if(err) throw err;
        res.end();
    })
})

module.exports = router;