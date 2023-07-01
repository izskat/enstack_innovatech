const db = require('../model/db.js');
const Cart = require('../model/cart.js');

const cartController = {
    getCart: function(req,res){
        console.log("CARTOOO");
        var e = req.session.phone;
        let cart = [];
        var query1 = {phone: e};
        var total = 0;
        console.log("Checking cart for " + e + "...");
            db.findMany(Cart, query1, {_id:-1}, null, 0, function(x){
                for(i in x){
                    var temp ={
                        item: x[i].item,
                        qty: x[i].qty,
                        price: x[i].price,
                    }
                    total = total + (x[i].qty * x[i].price);
                    
                    if (temp.qty != 0)
                        cart.push(temp)
                    else
                        db.deleteOne(Cart, {_id: x[i]._id});
                }
                console.log(total);
                console.log(cart);
                
                res.render('cart');
            });
    }
}

module.exports = cartController;