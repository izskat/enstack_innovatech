const express = require('express');
const controller = require('../controller/index');
const loginController = require('../controller/loginController');
const signupController = require('../controller/signupController');
const productController = require('../controller/productController');
const logoutController = require('../controller/logoutController');
const checkoutController = require('../controller/checkoutController');

const app = express();

app.get('/favicon.ico', controller.getFavicon);
app.get('/', controller.getIndex);

app.get('/login', loginController.getLogin);
app.post('/login', loginController.postLogin);

app.post("/logout", logoutController.getLogout);

app.get('/signup', signupController.getSignup);
app.post('/signup',signupController.postSignup);

app.get('/product', productController.getProducts);
app.get('/details', productController.getProductDetail);
app.post('/details', productController.addToCart);

app.get('/checkout', checkoutController.getCheckout);

module.exports = app;