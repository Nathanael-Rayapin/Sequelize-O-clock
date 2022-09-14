const { Question, Quiz } = require('../models/');

const mainController = {

    homePage:  
        async (req, res) => {
            // On récupère tous les élements de la table QUIZ
            const arrayQuiz = await Quiz.findAll();
        
            // La méthode Map renvoie un nouveau tableau avec les valeurs de l'objet Quiz (vu sur MDN)
            // Ici get() vise spécifiquement les dataValues
            // On peut aussi directement utiliser objet.dataValues
            const quizList = arrayQuiz.map(objet => objet.dataValues);

        res.render('home', {quizList});
    }

}

module.exports = mainController;