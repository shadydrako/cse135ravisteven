//organize all the routes for all the different pages
const express = require('express');
const router = express.Router();


router.get('/user', (req,res) => {
    if(req.session.loggedin){
        if(req.session.isAdmin){
            res.render('dashboarduser.ejs', {
                errorMessage: req.session.username
            })
        }else{
            res.render('dashboard.ejs', {
                errorMessage: req.session.username
            })
        }
    }else{
        res.render('login.ejs', {
            errorMessage: 'Please log in'
        })
    }
});

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

module.exports = router;