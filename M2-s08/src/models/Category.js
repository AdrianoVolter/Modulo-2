const {connection} = require('../database/connection');
//const {STRING,DATE} = require('sequelize');
const { DataTypes } = require('sequelize');

const Category = connection.define('categories', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      }
});

module.exports = Category;
    

