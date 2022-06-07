
const mysql = require('mysql'); 
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const db = mysql.createConnection({
    host: process.env.HOST,
    user:  process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
  })


exports.register = (req, res) => {
    console.log(req.body);
    const username = req.body.username; //came from the form
    const password = req.body.password; // came from the form

    db.query('SELECT user FROM users WHERE user = ?', [username], async (error, results) =>{
        if(error){
            console.log(error);
        }

        if(results.length > 0){
            //already a user in the thing
            return res.render('register.ejs'); //will deal with message later;
        }

        let hashedPassword = await bcrypt.hash( password, 10);
        console.log( hashedPassword); 

    })




    res.send("Form successfuly submit");
}