const express = require('express');

const route = express.Router();

const userControllers = require('./Controllers/userControllers');
const profileControllers = require('./Controllers/profileControllers');

route.post('/user/cadastro', userControllers.create);

route.post('/user/login', profileControllers.index);
route.get('/user/perfil/:id', 
  (req, res, next) => { 
    
   },
  profileControllers.show
);

module.exports = route;