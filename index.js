const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const express = require('express');
const db = require('./model/db.js');
const session = require('express-session');
const routes = require('./routes/routes.js');
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

db.connect();

app.use('/', routes);

app.use(function (req, res) {
    res.render('error');
});

app.listen(port, function(){
	console.log('Server running at port ' + port);
});