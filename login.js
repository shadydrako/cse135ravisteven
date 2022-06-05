const express = require('express')
const bcrypt = require('bcrypt')
const app = express()


app.set('view-engine', 'ejs')
app.use(express.urlencoded({extended: false }))

const users = []

/*routes*/

//this shall load the login page
app.get('/login', (req, res, next) => {
        res.render('login.ejs')
});

app.get('/register', (req, res) => {
	res.render('register.ejs');
})

app.post('register', async (req, res)=>{
	try {
		//hashes password
		const hashedPassword = await bcrypt.hash(req.body.password, 10);
		users.push({
			id: Date.now().toString(),
			name: req.body.name,
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
