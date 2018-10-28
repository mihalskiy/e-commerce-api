"use strict";

module.exports = function(sequelize, DataTypes) {
  var Products = sequelize.define("Products", {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.DECIMAL(10,2),
    quantityInStock: DataTypes.INTEGER

    //list the fields, ID and timestamps are created by default
  }, {
    classMethods: {
      //what does a product belong to? hint: see tasks.js
      associate: function(models) {
        Products.belongsTo(models.Categories, {
          onDelete: "RESTRICT",
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });

  return Products;
};
