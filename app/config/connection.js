var connection = {};
var config = require('./config');
var mysql  = require('mysql');

var connection = mysql.createConnection({
		host: config.db.host,
		user: config.db.username,
		password: config.db.password,
		database: config.db.database,
	});

module.exports = connection;
