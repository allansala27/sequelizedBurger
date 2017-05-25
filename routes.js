var exphbs = require("express-handlebars")

module.exports = function(app){
	
	var index = require('./controllers/index');
	var update = require('./controllers/burgerUpdate');
	var create = require('./controllers/burgerCreate');

	app.use("/", index);
	app.use("/update", update);
	app.use("/create", create);

	app.engine("handlebars", exphbs({ defaultLayout: "main" }));
    app.set("view engine", "handlebars");
}    