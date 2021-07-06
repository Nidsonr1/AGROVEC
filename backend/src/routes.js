const express = require('express');

const route = express.Router();

const userControllers = require('./Controllers/userControllers');
const profileControllers = require('./Controllers/profileControllers');

route.post('/user/register', userControllers.create);

route.post('/user/login', profileControllers.index);
route.get('/user/profile/:id', profileControllers.show);

module.exports = route;