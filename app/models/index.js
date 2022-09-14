// Fichier pour créer les associations
const Question = require("./question");
const Quiz = require("./quiz");

// ASSOCIATION ONETOMANY
Quiz.hasMany(Question, {
    allowNull: false
});
Question.belongsTo(Quiz);

module.exports = {
    Quiz,
    Question
}