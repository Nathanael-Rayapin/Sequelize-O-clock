require('dotenv').config(); 

const express = require('express');
const routes = require('./app/router');
const app = express();

// Style
app.use(express.static('./public'));

// Ejs
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(routes);

// Serveur
const SERVEUR_PORT = process.env.SERVEUR_PORT;
app.listen(SERVEUR_PORT, () => console.log(`Serveur lancer sur le PORT: http://localhost${SERVEUR_PORT}`));