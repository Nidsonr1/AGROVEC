const connection = require("../database/connection")
const crypto = require('crypto');
const dbController = require("../controllers/dbController");

module.exports = {
  async alreadyUser(email, password) {
    const userAlready = await connection('users')
      .where('email', email)
      .andWhere('password', password)
      .first();

    if(!userAlready) return false
      
    return true
  },

  async registerUser(email, name, password) {
    const id = crypto.randomBytes(4).toString('HEX');

    const data = {
      id, 
      name, 
      email, 
      password 
    }
    
   const registerUser = await dbController.insertInTable('users', data);
    
   return registerUser.data.id;
  },

  async login(email, password) {
    const user = await connection('users')
      .select('name', 'id')
      .where('email', email)
      .andWhere('password', password)
      .first();
    return user;
  }
}