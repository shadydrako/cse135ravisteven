//needs to define series of words

//how to define a route, node js search up 

//
var http = require('http');
var https = require('https');
const express = require('express');
const app = express();

const router = express.Router()

app.get('/', (req, res) => {
    res.send('hello world')
  });

app.use(router);


  http.createServer(app).listen(3001);
  https.createServer(app).listen(3000);