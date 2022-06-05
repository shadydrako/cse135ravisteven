const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const mysql = require('mysql');
const crypto=require('crypto');
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);


/*Mysql Express Session*/

app.use(session({
	key: 'session_cookie_name',
	secret: 'session_cookie_secret',
	store: new MySQLStore({
        host:'localhost',
        port:3000,
        user:'root',
        database:'cookie_user'
    }),
	resave: false,
    saveUninitialized: false,
    cookie:{
        maxAge:1000*60*60*24,
       
    }
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static('public'));
app.set("view engine", "ejs");


/*Mysql Connection*/

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "user",
	password: "(Water1)s",
    multipleStatements: true
  });
  connection.connect((err) => {
    if (!err) {
      console.log("Connected");
    } else {
      console.log("Conection Failed");
    }
  });
 

const customFields={
    usernameField:'uname',
    passwordField:'pw',
};


/*Passport JS*/
const verifyCallback=(username,password,done)=>{
   
     connection.query('SELECT * FROM users WHERE username = ? ', [username], function(error, results, fields) {
        if (error) 
            return done(error);

        if(results.length==0)
        {
            return done(null,false);
        }
        const isValid=validPassword(password,results[0].hash,results[0].salt);
        user={id:results[0].id,username:results[0].username,hash:results[0].hash,salt:results[0].salt};
        if(isValid)
        {
            return done(null,user);
        }
        else{
            return done(null,false);
        }
    });
}

const strategy=new LocalStrategy(customFields,verifyCallback);
passport.use(strategy);


passport.serializeUser((user,done)=>{
    console.log("inside serialize");
    done(null,user.id)
});

passport.deserializeUser(function(userId,done){
    console.log('deserializeUser'+ userId);
    connection.query('SELECT * FROM users where id = ?',[userId], function(error, results) {
            done(null, results[0]);    
    });
});



/*middleware*/
function validPassword(password,hash,salt)
{
    var hashVerify=crypto.pbkdf2Sync(password,salt,10000,60,'sha512').toString('hex');
    return hash === hashVerify;
}

function genPassword(password)
{
    var salt=crypto.randomBytes(32).toString('hex');
    var genhash=crypto.pbkdf2Sync(password,salt,10000,60,'sha512').toString('hex');
    return {salt:salt,hash:genhash};
}


 function isAuth(req,res,next)
{
    if(req.isAuthenticated())
    {
        next();
    }
    else
    {
        res.redirect('/notAuthorized');
    }
}


function isAdmin(req,res,next)
{
    if(req.isAuthenticated() && req.user.isAdmin==1)
    {
        next();
    }
    else
    {
        res.redirect('/notAuthorizedAdmin');
    }   
}

function userExists(req,res,next)
{
    connection.query('Select * from users where username=? ', [req.body.uname], function(error, results, fields) {
        if (error) 
            {
                console.log("Error");
            }
       else if(results.length>0)
         {
            res.redirect('/userAlreadyExists')
        }
        else
        {
            next();
        }
       
    });
}


app.use((req,res,next)=>{
    console.log(req.session);
    console.log(req.user);
    next();
});

/*routes*/
//this shall load the login page
app.get('/login', (req, res, next) => {
        res.render('login')
});
// this fucking works lets go
app.get('/dashboarduser', (req, res, next) => {
	res.render('dashboarduser');
});

app.listen(3000, function() {
    console.log('App listening on port 3000!')
});
