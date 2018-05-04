module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define(
    "Burger",
    {
      name: DataTypes.STRING,
      devoured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      // devour_id: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    }
    // {
    //   classMethods: {
    //     associate: function(models) {
    //       Burger.hasOne(models.Devour);
    //     }
    //   }
    // }
  );
  return Burger;
};
