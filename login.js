const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const mysql = require("mysql");
//session stuff
const session = require('express-session');
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

const dotenv = require('dotenv');

dotenv.config({ path: './.env'})

const db = mysql.createConnection({
  host: process.env.HOST,
  user:  process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
})

app.use(session({
	secret: 'secret_sauce',
	resave: true,
	saveUninitialized: true
}));




db.connect( (error) => {
  if(error){
    console.log("Error connecting")
  }else{
    console.log("Database connection successful");
  }
})





//using views lfg
app.set("view engine", "ejs");
app.use(bodyParser.json());

// app.use(express.urlencoded({ extended: false }))
// app.use(express.json())

//THESE ARE WHERE THE ROUTES ARE
app.use('/', require('./routes/p'))
app.use('/a', require('./routes/auth'))

app.use('/data', require('./routes/data'))

app.listen(3000, () => {
  console.log("We are listening");
})