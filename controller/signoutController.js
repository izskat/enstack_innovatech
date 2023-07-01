const db = require('../model/db.js');

const User = require('../model/user.js');

const logoutController = {

    
    getLogout: function (req, res)
    {
        console.log("test1234");

        if(req.session.phone)
            req.session.destroy(function(err){
                if (err) throw err
                console.log("Logout Successful!");
				res.render("home");
            });

        else
        {
            console.log(req.session.phone + " logged out");
            console.log("Error! Account isnt Logged in.");
            res.render('home');
        }

    }
}

module.exports = logoutController;