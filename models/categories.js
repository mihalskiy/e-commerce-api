"use strict";

module.exports = function(sequelize, DataTypes) {
  var Categories = sequelize.define("Categories", {
    name: DataTypes.STRING
    //list the fields, ID and timestamps are created by default
  }, {
    classMethods: {
      associate: function(models) {
        Categories.hasMany(models.Products)
      }
    }
  });

  return Categories;
};
