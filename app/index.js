"use strict";
const config = require("./config"),
	  logger = require("log4js").getLogger("index"),
	  express = require("express"),
	  session = require('express-session'),
	  app = express()
;
app.use(session({
	secret: config.web.sessionSecret, 
	resave: true, 
	saveUninitialized: true
}));
app.use(express.static('public'));
//app.use('/bower',express.static('bower_components'));
require("./passport")(app);

app.get('/', function (req, res) {
  //res.send('Hello World!');
  res.redirect("/index.html");
});

app.get('/login', function (req, res) {
  res.redirect("/error.html");
});

app.listen(config.web.port, function () {
	logger.info("server started on %s",config.web.port)
});