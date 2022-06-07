const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const mysql = require("mysql");

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '(Water1)s',
  database: 'login'
})

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

app.use('/', express.static(path.join(__dirname, 'static')))

app.get('/login', (req, res) => {
  res.render('login');
})

app.get('/register', (req, res) => {
  res.render('register');
})

app.post('/register', async (req, res) => {
  console.log(req.body);
  res.json({status: 'ok'})
})

app.listen(3000, () => {
  console.log("We are listening");
})