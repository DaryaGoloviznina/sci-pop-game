'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Progress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Game, { foreignKey: 'game_id' });
      this.belongsTo(models.Question, { foreignKey: 'question_id' });
    }
  };
  Progress.init({
    game_id: DataTypes.INTEGER,
    question_id: DataTypes.INTEGER,
    result: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Progress',
  });
  return Progress;
};
