var models = require('../models');
var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res) {
    res.render('index');
});

router.get('/burgers', function(req, res) {
    models.Burgers.findAll({})
        .then(function(burgers) {
            res.json(burgers);
        // res.render('index', { uneaten_burgers: burgers });
    });
});

//create a burger
router.post('/burgers/create', function(req, res) {
    console.log(req.body);
    models.Burgers.create({
        burger_name: req.body.name,
        devoured: req.body.devoured
    }).then(function() {
        console.log("Burger Created!")
    }).catch(function(err) {
        res.json(err);
    });
});

//update a burger
router.post('/burgers/update', function(req, res) {
    console.log(req.body);
    models.Burgers.update({ devoured: true }, {
        where: {
            burger_name: req.body.name
        }
    }).then(function() {
        console.log("Burger Updated!")
    }).catch(function(err) {
        res.json(err);
    });
});

module.exports = router;
