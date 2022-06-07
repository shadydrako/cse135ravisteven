const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const bodyParser = require('body-parser')
const LocalStrategy = require('passport-local')
const port = 3000;

passportLocalMongoose = 
  require("passport-local-mongoose")


const user = require('./models/user')

mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)
mongoose.set('useUnifiedTopology', true)
mongoose.connect("mongodb://cse135ravisteven.site/api/auth_demo_app") //edit for our app 

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.use(require("express-session")({
  secret: "app secret",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//routes
app.get("/", function (req, res) {
  res.sendFile('index.html');
});

app.get("/secret", isLoggedIn, function (req, res) {
  res.render("secret");
});


app.get("/register", function (req, res) {
  res.render("register");
});

app.post("/register", function (req, res) {
  var username = req.body.username
  var password = req.body.password
  User.register(new User({ username: username }),
          password, function (err, user) {
      if (err) {
          console.log(err);
          return res.render("register");
      }

      passport.authenticate("local")(
          req, res, function () {
          res.render("secret");
      });
  });
});

app.get("/login", function (req, res) {
  res.render("login");
});

app.post("/login", passport.authenticate("local", {
  successRedirect: "/api/secret",
  failureRedirect: "/api/login"
}), function (req, res) {
});


app.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/api/");
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/api/login");
}

app.listen(port, function () {
  console.log("Server Has Started!");
});