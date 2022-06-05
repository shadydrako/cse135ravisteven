const express = require('express')
const app = express()


app.set('view-engine', 'ejs')

/*routes*/

//this shall load the login page
app.get('/login', (req, res, next) => {
        res.render('login.ejs')
});
// this fucking works lets go
app.get('/dashboard', (req, res, next) => {
	res.render('dashboarduser.ejs');
});

app.listen(3000, function() {
    console.log('App listening on port 3000!')
});
