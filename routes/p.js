//organize all the routes for all the different pages
const express = require('express');
const router = express.Router();

//this will load when user logs in
router.get('/user', (req,res) => {
    if(req.session.loggedin){
        if(req.session.isAdmin){
            //if admin
            res.sendFile('/reporting/indexAuth.html', { root: '../' });
        }else{
            //if basic
            res.sendFile('/var/www/cse135ravisteven.site/reporting/index.html');
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
        }
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

module.exports = router;