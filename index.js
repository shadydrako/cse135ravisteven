//needs to define series of words

//how to define a route, node js search up 

//
var http = require('http');
var https = require('https');
const express = require('express');
const app = express();
const router = express.Router()
app.use(router);


router.get('/', (req, res) => {
    res.json({ msg: 'hello' })
  });



http.createServer(app).listen(300);