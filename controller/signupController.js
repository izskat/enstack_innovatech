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

        console.log("Registering " + phone + "...");
        bcrypt.hash(pass, saltRounds, function(err, hash) {
            var user = {
                phone: phone,
                password: hash,
                fname: fname,
                lname: lname,
                storename:storename,
                storeadd: storeadd
            }

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
                        db.insertOne(User, user, function(flag){
                            if(flag){
                                console.log('Created account of ' + fname);

                                var query = { phone: phone };

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