const db = require('../model/db');

const bcrypt = require('bcryptjs');
const saltRounds = 10;
const express = require('express');
const bp = require('body-parser');

const User = require('../model/user');

const signupController = {
    getSignup: function(req,res){
        console.log("SIGNUP")
        res.render('signup', {success:"hidden"})
    },

    postSignup: function(req,res){  
        console.log("POST SIGNUP")
        var phone = req.body.phone;
        var pass = req.body.password;
        var fname = req.body.fname;
        var lname = req.body.lname;
        var storename = req.body.storename;
        var storeadd = req.body.storeadd;

        console.log(req.body.password)

        console.log("Registering " + phone + "...");
        
        // crypts the password of the user
        bcrypt.hash(pass, saltRounds, function(err, hash) {
            var user = {
                phone: phone,
                password: hash,
                fname: fname,
                lname: lname,
                storename:storename,
                storeadd: storeadd
            }
            // checks if the phone is already taken
            db.findOne(User, {phone:phone}, '', function (result) {
                if (result) {
                    console.log("Phone is Taken")
                    var details = {
                        flag: false,
                        error: 'Phone taken.'
                        };
                    res.render('register');
                    }
                    else{
                        // if phone number is unique it is added to the database
                        db.insertOne(User, user, function(flag){
                            if(flag){
                                console.log('Created account of ' + fname);

                                var query = { phone: phone };
                                // double checks if its in the database
                                db.findOne(User, query, null, function (result) {
                                    if (result)
                                        bcrypt.compare(pass, result.password, function (err, equal) {
                                            res.render('index')
                                        });
                                });
                            }
                        });
                    }
            });
        });
    }
}

module.exports = signupController;