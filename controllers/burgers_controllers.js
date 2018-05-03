var express = require("express");
var db = require("../models");

var router = express.Router();
var Burger = require("../models/burger");

// Extracts the sequelize connection from the models object
var sequelizeConnection = db.sequelize;

// Sync the tables
sequelizeConnection.sync();

// get route -> index
router.get("/", function(req, res) {
  res.redirect("/index");
});

router.get("/index", function(req, res){
    db.Burger.findAll({
    }).then(function(data){
        var hbsObject = { burger: data};
        res.render("index", hbsObject);
    })
});

router.post("/burgers/create", function(req, res){
    db.Burger.create({
        name: req.body.burger_name,
        devoured: false
    }).then(function(){
        res.redirect("/index");
    });
});

router.get("/burger/:id", function(req, res){
    // console.log("hello");
    models.devoured.create({
        name: req.body.name,
        id: req.params.id
    }).then(function(newDevour){
        Burger.update({
            devoured: true
        }).then(function() {
            res.redirect("/index");
        });
    });
});

module.exports = router;
