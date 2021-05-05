const express = require('express');
const route = express.Router();

const userController= require('./controllers/userController');

//Rotas do Usuário
route.post('/register', userController.register);
route.post('/login', userController.login);
route.get('/profile', userController.profile);

module.exports = route;