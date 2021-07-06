const connection = require('../database/connection');
const crypto = require('crypto');

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
      salt
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
      salt
    });
  },

  async login(data) {
    const userAlready = await connection('users').where('email', data.email).first();
    // console.log(data.password);

    const descyptPassowrd = await this.hash(data.password, userAlready.salt);
    console.log(`Senha do usuário: ${userAlready.password}`)
    console.log(`Hash dps da funcao: ${descyptPassowrd.hash}`)
    // console.log(descyptPassowrd)
    // console.log(userAlready.password === descyptPassowrd.hash)
    // if(userAlready.password === descyptPassowrd.hash) {
    //   const { id, name } = userAlready;
    //   return { id, name }
    // }
    // return false;
  },

  async profile(data) {
    const user = await connection('users').select().where('id', data).first();
    
     return user ? user : false
  },

  async salt(length) {
    const salt = crypto.randomBytes(Math.ceil(length/2))
    .toString('hex')
    .slice(0, 16);

    return salt;
  },

  async hash(password, salt) {
    let hash = crypto.createHmac('sha512', salt)
    hash.update(password);
    hash = hash.digest('hex');
    return { salt, hash }
  },

  async encryptPassword(password) {
    let salt = await this.salt(16);
    let encrypted = await this.hash(password, salt);
    return { encrypted }
  },

  async descrypt(password) {
    
  }
}