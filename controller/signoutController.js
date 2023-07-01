const db = require('../model/db.js');

const User = require('../model/user.js');

const logoutController = {

    
    getLogout: function (req, res)
    {
        if(req.session.phone)
            req.session.destroy(function(err){
                if (err) throw err
                console.log("Logout Successful!");
				res.render("index");
            });

        else
        {
            console.log(req.session.phone + " logged out");
            console.log("Error! Account isnt Logged in.");
            res.render('index');
        }

    }
}

module.exports = logoutController;