const express = require('express');
const { appendFile } = require('fs');
//const authController = require('../controller/auth')
const router = express.Router();
const mysql = require('mysql'); 
const { route } = require('./p');
const bcrypt = require('bcryptjs');



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
        document.location.reload()
        res.end();
    })
})

//adding user from admin control
router.post('/users', async (req, res ) =>  {

    console.log(req.body);
    let id = req.body.id;
    let password = req.body.password;
    let user = req.body.username;

    
    let hashedPassword = await bcrypt.hash(password,10);
    
    db.query('SELECT user FROM users WHERE user = ? ', [username], async (error,results) => {
        if(results.length <= 0){
            res.end();
        }else{
            db.query('INSERT INTO users ?', {id: id, user: username,  password: hashedPassword}, (error, results) => {
                if(error){
                    console.log(error)
                    res.end();
                }
                document.location.reload()
                res.end();
            })
        }
    })
})

module.exports = router;