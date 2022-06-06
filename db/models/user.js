'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    hashedPassword: DataTypes.STRING.BINARY
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Question, {foreignKey: 'userId'})
    User.hasMany(models.Answer, {foreignKey: 'userId'})
  };
  return User;
};
