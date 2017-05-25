var models = require('../models');
var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res) {
    res.render('index');
});

router.post('/', function(req, res) {
    console.log(req.body);
    models.Burgers.create({
        burger_name: req.body.name,
        devoured: false
    }).then(function() {
        console.log("Burger Created!")
    }).catch(function(err) {
        res.json(err);
    });
});

module.exports = router;
