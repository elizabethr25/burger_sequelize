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
        include: [{db: db.devoured}]
    }).then(function(data){
        var hbsObject = { burger: data};
        console.log(data);
        res.render("index", hbsObject);
    })
});

router.post("/burger/create", function(req, res){

    db.Burger.create({
        name: req.body.name,
        devoured: false
    }).then(function(){
        res.redirect("/index")
    });
});

router.get("/burger/:id", function(req, res){
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
