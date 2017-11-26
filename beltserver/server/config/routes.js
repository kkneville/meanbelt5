var mongoose = require('mongoose'); 
var path = require('path');
var users = require('../controllers/users')
var items = require('../controllers/items')
var bids = require('../controllers/bids')


module.exports = (app, req, res) => {

	// app.get('/')

	app.post('/login', users.login);

	app.get('/logout', users.logout);

	app.get('/user', users.user);



	app.get('/index', items.index);



	app.post('/create', bids.create);

	app.get('/restart', bids.delete);




	app.all("*", (req, res, next) => {
		res.sendFile(path.resolve("../beltclient/dist/index.html"))
	});

}

	