const Product = require('../model/product.js');
const db = require('../model/db.js');

const controller = {
    getIndex: function (req, res) {
      res.render('index', {phone: req.session.phone})
    },

    getFavicon: function (req, res) {
      res.status(204);
  },
}

module.exports = controller;