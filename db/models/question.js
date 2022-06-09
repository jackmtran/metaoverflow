'use strict';
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    title: DataTypes.STRING,
    question: DataTypes.STRING,
    voteCount: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Question.associate = function(models) {
    Question.belongsTo(models.Category, {foreignKey: 'categoryId'})
    Question.belongsTo(models.User, {foreignKey: 'userId'})
    Question.hasMany(models.Answer, {foreignKey: 'questionId', onDelete:'CASCADE', hooks: true})
  };
  return Question;
};
