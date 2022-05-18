//needs to define series of words

//how to define a route, node js search up 

//
var http = require('http');
var https = require('https');
const express = require('express');
const app = express();

const router = express.Router()

router.get('/', (req, res) => {
    res.json({ msg: 'hello' })
  });

app.use(router);


http.createServer(app).listen(3001);
https.createServer(app).listen(3000);