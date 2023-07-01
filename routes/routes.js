const express = require('express');
const controller = require('../controller/index');
const loginController = require('../controller/loginController');
const signupController = require('../controller/signupController');
const productController = require('../controller/productController');

const app = express();

app.get('/favicon.ico', controller.getFavicon);
app.get('/', productController.getProducts);

app.get('/login', loginController.getLogin);
app.post('/login', loginController.postLogin);

app.get('/signup', signupController.getSignup);
app.post('/signup',signupController.postSignup);

app.get('/product/:id', productController.getProductDetail);

module.exports = app;