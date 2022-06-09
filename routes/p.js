//organize all the routes for all the different pages
const express = require('express');
const router = express.Router();
const mysql = require('mysql');



//this will load when user logs in
router.get('/user', (req,res) => {
    if(req.session.loggedin){
        if(req.session.isAdmin){
            //if admin
            res.sendFile('indexAuth.html', { root: __dirname });
        }else{
            //if basic
            res.sendFile('index.html', {root: __dirname});
        }
    }else{
        //not logged in
        res.render('login.ejs', {
            errorMessage: 'Please log in'
        })
    }
});

router.get('/dashboard', (req,res)=> {
    if(req.session.loggedin){
        if(req.session.isAdmin){
            res.render('dashboarduser.ejs', {
                errorMessage: req.session.username
            })
        }else{
            //not admin so no acess
            res.sendFile('index.html', {root: __dirname});
        }
    }else{
        res.render('login.ejs', {
            errorMessage: 'Please log in'
        })
    }
})

router.get('/login', (req,res) => {
    if( req.session.loggedin){
        res.redirect('/api/user');
    }else{
        res.render('login.ejs')
    }
});

router.get('/register', (req, res) => {
    res.render('register.ejs')
})

router.get('/collector', (req, res) => {
    res.sendFile('hw4_collector.js', {root: __dirname});
})

module.exports = router;