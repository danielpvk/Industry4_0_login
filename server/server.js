require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var cors = require("cors");
var db = require("./models");
const bodyParser = require('body-parser');//new
const cookieParser = require('cookie-parser') ;//new
var app = express();
var PORT = process.env.PORT || 80;


const session = require('express-session'); //new
const morgan = require('morgan');//new
const User = require('./models/user');//new

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//SESSION
app.use(bodyParser.urlencoded({ extended: true }));//new
app.use(cookieParser());//new
app.use(bodyParser.json());//new

app.use(session({//new
  key: 'user_sid',//new
  secret: 'something',//new
  resave: false,//new
  saveUninitialized: false,//new
  cookie: {//new//new
    expires: 600000//new
  }//new
}));//new

//***USAREMOS CLIENT/BUILD */
//app.use(express.static("public"));  //old

app.use(express.static('./client/build/'));//new

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
require("./routes/devicetypeRoutes")(app);
require("./routes/deviceRoutes")(app);
require("./routes/userRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});


//**********SESSION */
app.use((req, res, next) => {
  if (req.cookies.user_sid && !req.session.user){
    res.clearCookie('user_sid');
  }
  next();
})

sessionChecker = (req, res, next) => {
  if (req.session.user && req.cookies.user_sid){
    res.status(200).send({ inSession: true});
  } else {
    next();
  }
}

app.get('/api', sessionChecker, (req, res) => {
  res.status(200).send({ inSession: false });
});

app.get('/api/hello', (req, res) => {
  res.status(200).send({ backMsg: 'Express App Works' });
});
///********SESSION END */



module.exports = app;
