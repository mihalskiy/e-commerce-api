"use strict";

module.exports = function(sequelize, DataTypes) {
  var Review = sequelize.define("Review", {
    title: DataTypes.STRING,
    body: DataTypes.TEXT

  }, {
    classMethods: {
      associate: function(models) {
        Review.belongsTo(models.User, {
          onDelete: "RESTRICT",
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });

  return Review;
};
