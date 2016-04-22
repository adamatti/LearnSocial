"use strict";
const logger = require("log4js").getLogger("facebook"),
	  config = require("../config"),
	  Strategy = require('passport-facebook').Strategy
;

module.exports = function(app, passport){
	passport.use(
		new Strategy({
			clientID: config.facebook.clientId,
	    	clientSecret: config.facebook.secret,
	    	callbackURL: config.facebook.callbackURL
		},function(accessToken, refreshToken, profile, cb) {
			logger.trace("Stragegy",{accessToken, refreshToken, profile})
	    	return cb(null, profile);
	  	}
	  )
	);

	app.get('/login/facebook',passport.authenticate('facebook'));

	app.get('/login/facebook/return', 
  		passport.authenticate('facebook', { failureRedirect: '/login' }),
  		function(req, res) {
  			logger.trace("return",req);
    		res.redirect('/');
  		}
	);
}