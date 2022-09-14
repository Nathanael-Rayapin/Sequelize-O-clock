require('dotenv').config(); 

// On require les model depuis index pour
// etre sur de require les associations qu'on a créé dans index.js
// On les require en destructurting
const { Question, Quiz } = require('./app/models/');

//////////////////////
// 1ERE METHODE (moins opti)
//////////////////////

async function test(){
    // On récupère tous les élements de la table QUIZ
    const arrayQuiz = await Quiz.findAll();
    // On créé un nouveau tableau
    let newArr = [];
    // On boucle sur le tableau pour accéder à chaque objet du tableau
    for (const quiz of arrayQuiz){
        // On push l'objet dataValues de l'objet sur lequel on est en train de boucle
        // Dans le tableau qu'on a créé plus haut
        newArr.push(quiz.dataValues)
    }
    console.log("TEST 1:", newArr);
}
//////////////////////
// 2EME METHODE (+ opti)
//////////////////////

async function test_2(){
    // On récupère tous les élements de la table QUIZ
    const arrayQuiz = await Quiz.findAll();

    // La méthode Map renvoie un nouveau tableau avec les valeurs de l'objet Quiz (vu sur MDN)
    // Ici get() vise spécifiquement les dataValues
    // On peut aussi directement utiliser objet.dataValues
    const testMap = arrayQuiz.map(objet => objet.dataValues);
    console.log("TEST 2 : ", testMap);
}

// test();
test_2();