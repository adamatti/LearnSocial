"use strict";
const logger = require("log4js").getLogger("github"),
	  config = require("../config"),
	  GitHubStrategy = require('passport-github').Strategy
;

module.exports = function(app, passport){
	passport.use(
		new GitHubStrategy({
			clientID: config.github.clientId,
			clientSecret: config.github.secret,
			callbackURL: config.github.callbackURL
		},
		function(accessToken, refreshToken, profile, cb) {
	  		logger.trace("Stragegy",{accessToken, refreshToken, profile})
	  		return cb(null, profile);		
		})
	);

	app.get('/login/github',
  		passport.authenticate('github', { scope: [ 'user:email' ] }),
  		function(req, res){
    });

	app.get('/login/github/callback', 
		passport.authenticate('github', { failureRedirect: '/login' }),
		function(req, res) {
			logger.trace("return",req);
			res.redirect('/');
		}
	);
}