const connection = require('../database/connection');
const dbModels = require("../Models/dbModels");
const modelsUser = require('../Models/userModels');

module.exports = {
  async register(request, response, next) {
    const { name, email, password } = request.body;

    if(!name || !email || !password) {
      return response.status(404).json({ 
        message: 'Preencha todos os Campos de cadastro' 
      });
    }
    
    const alreadyUser = await modelsUser.alreadyUser(email, password);
    
    if(alreadyUser){
      return response.status(401).json({ 
        message: 'Usuário já cadastrado' 
      });
    }

    const user = await modelsUser.registerUser(email, name, password);

    return response.status(202).json({
      message: 'Usuário Cadastrado com Sucesso',
    });
  },

  async login(request, response, next) {
    const { email, password } = request.body;

    if(!email || !password) {
      return response.status(404).json({ 
        message: 'Preencha todos os campos' 
      });
    }

    const alreadyUser = await modelsUser.alreadyUser(email, password);

    if(!alreadyUser) return response.status(404).json({ 
      message: 'Usuário não cadastrado' 
    });
    
    const user = await modelsUser.login(email, password);
    return response.status(201).json({
      message: `Bem-vindo(a) ${user.name}`,
    });
  },

  async profile(request, response, next) {
    const id = request.headers.authorization;

    const userAlready = await connection('users')
     .select()
     .where('id', id)
     .first();

    if(!userAlready) {
      return response.status(404);
    }

    const user = {
      id: userAlready.id,
      name: userAlready.name,
      email: userAlready.email
    }

    return response.status(201).json({
      user
    });
  }
}