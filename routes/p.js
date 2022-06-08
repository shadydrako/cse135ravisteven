//organize all the routes for all the different pages
const express = require('express');
const router = express.Router();


router.get('/user', (req,res) => {
    res.render('dasboarduser.ejs')
});

router.get('/login', (req,res) => {
    res.render('login.ejs')
});

router.get('/register', (req, res) => {
    res.render('register.ejs')
})

module.exports = router;