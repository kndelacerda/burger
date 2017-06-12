var express = require("express");
var db = require("./models");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 3000;
var routes = require('./controllers/burgers_controllers.js');
var app = express();

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("Listening on port %s", PORT);
    });
});

app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use('/', routes);