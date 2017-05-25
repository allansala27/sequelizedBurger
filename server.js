// Requiring necessary npm packages
var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var path = require('path');
var Sequelize = require('sequelize');
var exphbs = require("express-handlebars")

var app = express();
var PORT = process.env.PORT || 3005;
var db = require("./models");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

require('./routes')(app);

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log("Listening on port:%s", PORT);
    });
});

module.exports = app;
