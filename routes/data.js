const express = require('express');
const { appendFile } = require('fs');
//const authController = require('../controller/auth')
const router = express.Router();
const mysql = require('mysql'); 
const { route } = require('./p');
const bcrypt = require('bcryptjs');
const { error } = require('console');

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

router.put("/users/:id", async (req, res ) => {
    let ogId = req.params.id;
    let id = req.body.id;
    let password = req.body.password;
    let username = req.body.user;
    var isAdmin;
    console.log(req.body.admin);
    if( req.body.admin == ''){
        isAdmin = 0;
    }else{
        isAdmin = req.body.admin
    }

    let hashedPassword = await bcrypt.hash(password,10);

    //id exists

    //username exists

    db.query('UPDATE users SET ? WHERE id = ?', [{id: id, user: username,  password: hashedPassword, admin: isAdmin}, ogId], (err,rows, fields) => {
        if(err) throw err;
        console.log("UPDATED ROW");
        res.end();
    })
})
/*
zgRef.addEventListener('data:record:delete', (e) => {
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
    let isAdmin = req.body.admin;

    
    let hashedPassword = await bcrypt.hash(password,10);

    db.query('SELECT id FROM users WHERE id = ?', [id], async (error, results)=>{
        if(results.length >= 1){
            return res.end();
        }
    })
    
    db.query('SELECT user FROM users WHERE user = ? ', [username], async (error,results) => {
        if(results.length > 0){
            console.log("THERE EXISTS THIS USER");
            res.end();
        }else{
            db.query('INSERT INTO users SET ?', {id: id, user: username,  password: hashedPassword, admin: isAdmin}, (error, results) => {
                if(error){
                    console.log(error)
                    res.end();
                }
                res.end();
            })
        }
    })
})

router.post('/static', (req,res )=>{

    // const data = {
    //     user_string: req.body.userString,
    //     user_lang: req.body.userLanguage,
    //     cookie_en:  req.body.userCookieEnabled, 
    //     user_sc_width: req.body.screenDimensionWidth, 
    //     use_sc_height: req.body.screenDimensionHeight,
    //     window_width: req.body.windowDimensionWidth,
    //     window_height: req.body.windowDimensionHeight, 
    //     JS_en: req.body.js_en,
    //     network_connection: req.body.networkConnection
    // }
    let result = (typeof req.body);
    console.log(result);

    for (const property in req.body) {
        console.log(`${property}: ${req.body[property]}`);
      }

    let items = [req.body.userString, req.body.userLanguage, req.body.userCookieEnabled, req.body.screenDimensionWidth, req.body.screenDimensionHeight, req.body.windowDimensionWidth, req.body.windowDimensionHeight, req.body.js_en, req.body.networkConnection];
    // (user_string,user_lang, cookie_en, user_sc_width, use_sc_height, window_width, window_height, JS_en, network_connection) VALUES ?
    // db.query('INSERT INTO static SET ? ', {user_string: }, (error, result)=>{
    //     if(error){
    //         console.log(error)
    //     }else{
    //         console.log("Completed Insertion!");
    //     }
    // })

})


module.exports = router;