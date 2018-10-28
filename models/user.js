"use strict";

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: DataTypes.STRING,
    balance: DataTypes.DECIMAL(10,2),
    billingAddress: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Task)
        //User.hasMany(models.Review)
      }
    }
  });

  return User;
};
