'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Topic, { foreignKey: 'topic_id' });
      this.hasMany(models.Progress, { foreignKey: 'question_id' });
    }
  };
  Question.init({
    question: DataTypes.TEXT,
    answer: DataTypes.TEXT,
    points: DataTypes.INTEGER,
    topic_id: DataTypes.INTEGER,

  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};
