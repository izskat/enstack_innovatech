const db = require('../model/db.js');
const Product = require('../model/product.js');

const productController = {
    addProducts: function(req,res){
        console.log("Add PRODUCT")
        var product={
            item: "Tomato",
            qty: 5,
            price: "20.00",
            category: "Gulay",
            info: "One bundle of Tomato"
        }

        db.insertOne(Product, product, function(flag){
            if (flag){
                console.log('Added to cart for ' + product.item);
                res.render('index');
            }
        });
    },

    getProducts: async function(req,res){
        item = 'Pork'
        var query1 = {category: item}
        let result = await Product.find(query1);
        console.log("GET PRODUCTS")
        console.log(result)
        res.render('product', {result: result, phone: req.session.phone});
    },

    getProductDetail:function(req,res){
        item = req.params.id;
        var query = {item: item}

        db.findOne(Product, query, null, function(x){
            console.log( "DITO ME " + x)
            var result = {
                item: x.item,
                qty: x.qty,
                price: x.price,
                category: x.category,
                info: x.info,            
            }           

            res.render('product', {result: result, phone: req.session.phone})
        })
    },
}

module.exports = productController;