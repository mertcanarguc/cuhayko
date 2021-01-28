const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user');
const chance = require("chance")

router.get('/', function (req, res, next) {
    res.render('index', { user: req.user });
});

router.get('/register', function (req, res) {
    res.render('register', {});
});

router.post('/register', function (req, res) {
    User.register(new User(req.body),
        req.body.password, function (err, user) {
            if (err) {
                return res.render('register', { user: user });
            } else {
                res.json({status:true})
            }
        });
});

router.get('/login', function (req, res) {
    res.render('login', { user: req.user });
});

router.post('/login', passport.authenticate('local'), function (req, res) {
    res.redirect('/');
});

router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});

module.exports = router;
