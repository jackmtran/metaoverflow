'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
    totalVotes: DataTypes.INTEGER,
  }, {});
  Category.associate = function(models) {
    Category.hasMany(models.Question, {foreignKey: 'categoryId'})
  };
  return Category;
};
