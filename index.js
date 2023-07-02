const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const express = require('express');
const db = require('./model/db.js');
const hbs = require('hbs');
const session = require('express-session');
const routes = require('./routes/routes.js');
const MongoStore = require('connect-mongo');
const app = express();
const port = 3000;
const url = 'mongodb+srv://innovatech:jRb1O2GRJSxDme3N@innovatech.6cdiwky.mongodb.net/?retryWrites=true&w=majority'

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(session({
	secret: 'Innoatech',
	resave: false,
	saveUninitialized: false,
	store: MongoStore.create({ mongoUrl: url })
}));

db.connect();

app.use('/', routes);


app.listen(port, function(){
	console.log('Server running at port ' + port);
});
