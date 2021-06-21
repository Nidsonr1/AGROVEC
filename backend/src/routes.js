const express = require('express');

const route = express.Router();

const userControllers = require('./Controllers/userControllers');
const profileControllers = require('./Controllers/profileControllers');

route.post('/cadastro', userControllers.create);

route.post('/login', profileControllers.index);
route.get('/perfil/:id', profileControllers.show);

module.exports = route;