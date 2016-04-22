"use strict";
var config={
	web: {
		port: process.env.PORT || 3000,
		sessionSecret: process.env.EXPRESS_SESSION_SECRET || 'ssshhhhh'
	},
	facebook: {
		clientId : process.env.FB_CLIENT_ID,
		secret   : process.env.FB_SECRET,
		callbackURL: 'http://localhost:3000/login/facebook/return'
	},
	twitter: {
		key: process.env.TWITTER_KEY,
		secret: process.env.TWITTER_SECRET,
		callbackURL: 'http://127.0.0.1:3000/login/twitter/return'
	},
	github:{
		clientId: process.env.GITHUB_CLIENT_ID, 
		secret: process.env.GITHUB_SECRET,
		callbackURL: "http://127.0.0.1:3000/login/github/callback"
	}
};

module.exports = config;