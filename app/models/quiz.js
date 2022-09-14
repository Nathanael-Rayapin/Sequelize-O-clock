const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db');

class Quiz extends Model { }

Quiz.init({
    title: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
}, {
    sequelize,
    tableName: "quiz"
})

module.exports = Quiz;