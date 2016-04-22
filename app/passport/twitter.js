"use strict";
const logger = require("log4js").getLogger("twitter"),
	  config = require("../config"),
	  Strategy = require('passport-twitter').Strategy
;

module.exports = function(app, passport){
	passport.use(
		new Strategy(
		{
			consumerKey: config.twitter.key,
			consumerSecret: config.twitter.secret,
			callbackURL: config.twitter.callbackURL
		},
		function(token, tokenSecret, profile, cb) {
			//logger.trace("Stragegy",{accessToken, refreshToken, profile})
			return cb(null, profile);
		})
	);

	app.get('/login/twitter',passport.authenticate('twitter'));

	app.get('/login/twitter/return', 
  		passport.authenticate('twitter', { failureRedirect: '/login' }),
  		function(req, res) {
			logger.trace("return",req);
    		res.redirect('/');
  		}
	);
}