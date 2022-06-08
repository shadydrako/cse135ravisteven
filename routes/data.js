const express = require('express');
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
        console.log(rows);
        res.send(rows);
    })

})

module.exports = router;