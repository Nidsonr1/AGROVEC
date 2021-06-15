const dbModels = require('../Models/dbModels'); 

module.exports = {
  async insertInTable(table, data) {
    const insert = await dbModels.insert(table, data);
    return {data};
  }
}