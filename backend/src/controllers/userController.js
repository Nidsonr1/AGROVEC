const { default: knex } = require("knex");

const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
  async create(request, response, next) {
    const { name, email, password } = request.body;

    if(!name || !email || !password) {
      return response.status(404).json({
        message: 'Preencha todos os campos'
      });
    }

    const userAlready = await connection('users').where('email', email).first();

    if(userAlready) {
      return response.status(401).json({
        message: 'Usuário já cadastrado',
        name,
        email,
        password,
      });
    }

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('users').insert({ id, name, email, password });

    return response.status(202).json({
      id,
      message: 'Usuário Cadastrado com Sucesso',
    });
  }
}