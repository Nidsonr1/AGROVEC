const connection = require('../database/connection');

module.exports = {
  async checkUserAlready(data) {
    const userAlready = await connection('users').where('email', data).first();

    return userAlready ? true : false
  },

  async registerUser(data) {
    const {
      name,
      email,
      password,
      cpf,
      address,
      zipCode,
      city,
      uf, 
    } = data;
    
    await connection('users').insert({
      name,
      email,
      password,
      cpf,
      address,
      zipCode,
      city,
      uf,
    });
  },

  async login(data) {
    const userAlready = await connection('users').where('email', data.email).andWhere('password', data.password).first();

    if(userAlready) {
      const { id, name } = userAlready;
      return { id, name }
    }
    return false;
  },

  async profile(data) {
    const user = await connection('users').select().where('id', data).first();
    
     return user ? user : false
  }
}