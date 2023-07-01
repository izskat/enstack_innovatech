const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const express = require('express');
const db = require('./model/db.js');
const hbs = require('hbs');
const session = require('express-session');
const routes = require('./routes/routes.js');
const app = express();
const port = 3000;

app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

db.connect();

app.use('/', routes);

app.listen(port, function(){
	console.log('Server running at port ' + port);
});