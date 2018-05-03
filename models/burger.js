module.exports = function (sequelize, Datatype) {
    var Burger = sequelize.define("Burger", {
      name: Datatype.STRING,
      devoured: {
        type: Datatype.BOOLEAN, 
        defaultValue: false
      }, 
      createdAt: Datatype.DATE,
      updatedAt: Datatype.DATE
    });
  return Burger;
  };