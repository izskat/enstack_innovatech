const db = require('../model/db.js');
const Checkout = require('../model/checkout.js');
const Cart = require('../model/checkout.js')

const checkoutController = {
    getCheckout: async function(req, res){
        var active = req.session.phone;
        let cart = [];
        var query1 = {phone:phone};
        var total = 0;

        console.log("CHECK OUT FOR " + e);
        let result = await Cart.find(query1);
        console.log("GET PRODUCTS")
        for (i in result){
            var temp = {
                item: x[i].item,
                qty: x[i].qty,
                price: x[i].price,
            }
            total = total + (x[i].qty * x[i].price)
            cart.push(temp)
        }
        res.render('checkout', {result: cart, total: total, phone: req.session.phone})
    },

    postCheckout: function(req,res){
        var fname = req.body.fname;
        var lname = req.body.lname;
        var phone = req.body.phone;
        var storename = req.body.storename;
        var storeadd = req.body.storeadd;
        var interval = req.body.interval;
        var additional = req.body.additional;
        let cart = [];
        var p = req.session.phone;
        var query1 = {phone: p};

        console.log("checking out!");

        db.findMany(Cart, query1, {_id:-1}, null, 0, function(x){
            for(i in x){
                var temp ={
                    item: x[i].item,
                    qty: x[i].qty,
                    price: x[i].price,
                }
                cart.push(temp);
                console.log(cart);
            }

            for (i in cart){
                console.log(cart[i].item);
                console.log(cart[i].qty);
                console.log(cart[i].price);
            }

            var checkout = {
                fname: fname,
                lname: lname,
                phone: phone,
                storename: storename,
                storeadd: storeadd,
                interval: interval,
                additional: additional,
                cart: cart
            }
    
            db.insertOne(Checkout, checkout, function(flag){
                if (flag){
                    console.log(checkout);
                    console.log('Checkout for ' + fname + " " + lname);
                    res.render('checkout', {phone : req.session.phone})
                }
            });
        }); 

        db.deleteMany(Cart, {phone: phone});
    }
}

module.exports = checkoutController;