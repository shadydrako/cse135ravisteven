//needs to define series of words

//how to define a route, node js search up 

//

const express = require('express');
const app = express();

const router = express.Router()

router.get('/', (req, res) => {
    res.jsonp({ msg: 'hello' })
  });