const express = require('express');
const router = express.Router();

// Controllers
const mainController = require('./controllers/mainController');

// Routes
router.get('/', mainController.homePage);

module.exports = router;