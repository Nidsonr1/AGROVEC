const connection = require("../database/connection");

module.exports = {
  async insert(table, data) {
    await connection(`${table}`).insert([
      data
    ]);
    return data;
  },
  
}