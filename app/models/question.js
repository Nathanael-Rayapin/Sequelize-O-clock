const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Question extends Model {};

Question.init(
    {
        title: {
            type : DataTypes.TEXT,
            allowNull: false
        },
        description : {
            type: DataTypes.TEXT,
            allowNull: false
          },
        wiki: {
            type: DataTypes.TEXT,
            allowNull: false
          }
    },
    {
        sequelize,
        tableName: 'question'
    }
);

module.exports = Question;
