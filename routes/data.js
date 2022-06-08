const express = require('express');
const { appendFile } = require('fs');
//const authController = require('../controller/auth')
const router = express.Router();
const mysql = require('mysql'); 
const { route } = require('./p');
const bcrypt = require('bcryptjs');

//const zgRef = document.querySelector('zing-grid');
//let count = 0;


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

router.get('/users/:id',(req, res)  => {
    //SENDING TABLE DATA TO WHATEVER
    db.query('SELECT * FROM users WHERE id =?', [req.params.id] , (err, rows, fields ) =>{
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

<<<<<<< HEAD
<<<<<<< HEAD
zgRef.addEventListener('data:users:delete', (e) => {
=======
router.put("/users")
=======
router.put("/users/:id", (req, res ) => {
    let ogId = req.params.id;
    let id = req.body.id;
    let password = req.body.password;
    let username = req.body.user;

    db.query('UPDATE users SET ? WHERE id = ?', [{id: id, user: username,  password: hashedPassword}, ogId], (err,rows, fields) => {
        if(err) throw err;
        console.log("UPDATED ROW");
        res.end();
    })
    
})
>>>>>>> 4725f7ca1f938859149c826d55b3bf8f57a15029
/*
zgRef.addEventListener('data:record:delete', (e) => {
>>>>>>> a40c98a555dbbb6401dcd4f913befbd6539475f2
    result.textContent = `"data:record:delete" triggered ${++count} times, view console for full event data.`;
    console.log(`--- Event Detail ---`, e.detail);
  });
*/

//adding user from admin control
router.post('/users', async (req, res ) =>  {

    console.log(req.body);
    let id = req.body.id;
    let password = req.body.password;
    let username = req.body.user;

    
    let hashedPassword = await bcrypt.hash(password,10);
    
    db.query('SELECT user FROM users WHERE user = ? ', [username], async (error,results) => {
        if(results.length > 0){
            console.log("THERE EXISTS THIS USER");
            res.end();
        }else{
            db.query('INSERT INTO users SET ?', {id: id, user: username,  password: hashedPassword}, (error, results) => {
                if(error){
                    console.log(error)
                    res.end();
                }
                res.end();
            })
        }
    })
})


module.exports = router;