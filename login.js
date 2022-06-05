if( process.env.NODE_ENV !== 'production'){
	require('dotenv').config();
}

const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')

const initializePassport = require('./passport-config')
initializePassport(
	passport, 
	email => users.find( user = user.email === email))


app.set('view-engine', 'ejs')
app.use(express.urlencoded({extended: false }))
app.use( flash())

app.use(session({
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUnitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

const users = []

/*routes*/

//this shall load the login page
app.get('/login', (req, res, next) => {
        res.render('login.ejs')
});

app.post('/login', passport.authenticate('local', {
	//where to go if success
	successRedirect: '/api/dashboard',
	failureRedirect: '/api/login',
	failureFlash: true
}))

app.get('/register', (req, res) => {
	res.render('register.ejs');
})

app.post('/register', async (req, res)=>{
	try {
		//hashes password
		const hashedPassword = await bcrypt.hash(req.body.password, 10);
		users.push({
			id: Date.now().toString(),
			name: req.body.email,
			password: hashedPassword
		})
		res.redirect('/api/login')
	} catch {
		res.redirect('/api/register')
	}
	console.log(users);
})
// this fucking works lets go
app.get('/dashboard', (req, res, next) => {
	res.render('dashboarduser.ejs');
});

app.listen(3000, function() {
    console.log('App listening on port 3000!')
});
