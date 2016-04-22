"use strict";
const logger = require("log4js").getLogger("passport"),
	  config = require("../config"),
	  passport = require('passport')	  
;

module.exports = function(app){
	passport.serializeUser(function(user, cb) {
		logger.trace("serializeUser",user);
		cb(null, user);
	});

	passport.deserializeUser(function(obj, cb) {
		logger.trace("deserializeUser",obj);
		cb(null, obj);
	});

	app.use(passport.initialize());
	app.use(passport.session());

	require("./facebook")(app,passport);
	require("./twitter")(app,passport);
	require("./github")(app,passport);
}
