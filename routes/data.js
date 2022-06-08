const express = require('express');
const { appendFile } = require('fs');
//const authController = require('../controller/auth')
const router = express.Router();
const mysql = require('mysql'); 

const zgRef = document.querySelector('zing-grid');
let count = 0;


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
    db.query('DELETE FROM users WHERE id = ?', [req.params.id], (err,rows, fields)=>{
        if(err) throw err;
        res.end();
    })
})

router.post('/users/:id', (req, res) => {
    db.query('CREATE FROM users ')
})


zgRef.addEventListener('data:record:delete', (e) => {
    result.textContent = `"data:record:delete" triggered ${++count} times, view console for full event data.`;
    console.log(`--- Event Detail ---`, e.detail);
  });

module.exports = router;