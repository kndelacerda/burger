var express = require("express");
var db = require("./models");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 3000;
var app = express();

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("Listening on port %s", PORT);
    });
});