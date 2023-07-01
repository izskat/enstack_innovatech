const db = require('../model/db');

const bcrypt = require('bcryptjs');

const User = require('../model/user');

const loginController = {
    getLogin: function(req,res){
        console.log("LOGIN")
        res.render('login', {success:"hidden"})
    },

    postLogin: function(req,res){
        console.log("POST LOGIN")
        var u = req.body.phone;
        var p = req.body.password;
		console.log ("Logging in " + u + " ...");
        var query1 = {phone: u};

			// finds if user is existing
			db.findOne(User, query1, null, function(x) {
				console.log("went here pa rin");
				// checks if password is equal
				if(x)
					bcrypt.compare(p, x.password, function(err, equal) {
						
						if(equal){
							
							req.session.phone = x.phone;
							req.session.name = x.fname;
							
							console.log(' Successfully Logged In ' + x.phone);

							res.render('index');
						}
						else{
							console.log("Password not found!");
							res.render('login' , {error: 'Invalid User or Password'});
						}
						
					});
				else {
					console.log("invalid user or pass");
					res.render('login' , {error: 'Invalid User or Password'});
				}
					
        });
    }
}

module.exports = loginController;