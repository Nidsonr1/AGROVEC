const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
  async register(request, response, next) {
    const { name, email, password } = request.body;

    if(!name || !email || !password) {
      return response.status(404).json({ 
        message: 'Preencha todos os Campos de cadastro' 
      });
    }
    
    const userAlready = await connection('users').where('email', email).first();

    if(userAlready) {
      return response.status(401).json({ 
        message: 'Usuário já cadastrado' 
      });
    }

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('users').insert({ 
      id, 
      name, 
      email, 
      password 
    });

    return response.status(202).json({
      id,
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

    const user = await connection('users')
      .select('id', 'name')
      .where({
        'email': email,
    }).first();

    if(!user) return response.status(404).json({ 
      message: 'Usuário não cadastrado' 
    });
    
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