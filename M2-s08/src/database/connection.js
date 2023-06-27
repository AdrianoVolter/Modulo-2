
const { Sequelize } = require('sequelize');
const databaseConfig = require('../config/database.config');

const connection = new Sequelize(databaseConfig);

async function connectToDatabase() {
  try {
    await connection.authenticate();
    console.log('Conexão com o banco de dados realizada com sucesso!');
  } catch (error) {
    console.error('Não foi possível conectar com o banco de dados:', error);
  }
}

connectToDatabase();

module.exports = { connection };

