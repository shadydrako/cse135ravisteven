
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
        } else if(results.length > 0){
            //already a user in the thing
            return res.render('register.ejs'); //will deal with message later;
        }

        let hashedPassword = await bcrypt.hash( password, 10);
        console.log( hashedPassword); 

        db.query('INSERT INTO users SET ?', {user: username, password: hashedPassword}, (error, results) => {
            if(error){
                console.log(error)
            }else {
                console.log("yay");
            }
            
        })

    })
}

exports.login = async (req,res) => {
    try {
        const username = req.body.username; 
        const password = req.body.password;

        db.query('SELECT * FROM users WHERE user = ?', [username], async (error, request, results) => {
            if( results.length <= 0 ){
                console.log("This user does not exist");
                res.render('login.ejs',{
                    errorMessage: 'This useer does not exist'
                });
            }else if( await bcrypt.compare(password, results[0].password)) {
                const id = results[0].id; 
                const username = results[0].user
                //making a session for this user
                request.session.loggedin = true;
                request.session.username = username;


                console.log("THIS USER EXITS");

                res.send("THIS USER EXITS AND IS REAL");
            }else{
                console.log("This user does not exist");
                res.render('login.ejs',{
                    errorMessage: 'Your email/password is incorrect'
                });
            }

        })

    }catch (error){
        console.log(error)
    }

}

  