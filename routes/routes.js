const express = require('express');
const controller = require('../controller/index');
const loginController = require('../controller/loginController');
const signupController = require('../controller/signupController');

const app = express();

app.get('/', controller.getIndex);

app.get('/login', loginController.getLogin);
app.post('/login', loginController.postLogin);

app.get('/signup', signupController.getSignup);
app.post('/signup',signupController.postSignup);


module.exports = app;