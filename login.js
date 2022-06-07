const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
//using views lfg
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static(path.join(__dirname, 'static')))

app.get('/login', (req, res) => {
  res.render('login');
})

app.listen(3000, () => {
  console.log("We are listening");
})