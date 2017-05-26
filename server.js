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
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgControl.js");

app.use("/", routes);
app.use("/update", routes);
app.use("/create", routes);

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log("Listening on port:%s", PORT);
    });
});

module.exports = app;
