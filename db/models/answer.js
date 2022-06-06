'use strict';
module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define('Answer', {
    answer: DataTypes.STRING,
    voteCount: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    questionId: DataTypes.INTEGER
  }, {});
  Answer.associate = function(models) {
    Answer.belongsTo(models.Question, {foreignKey: 'questionId'})
    Answer.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Answer;
};
