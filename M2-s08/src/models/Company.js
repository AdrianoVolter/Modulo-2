const {connection} = require('../database/connection');
//const {STRING,DATE} = require('sequelize');
const { DataTypes, Sequelize } = require('sequelize');


const Company = connection.define('companies', {
    cnpj: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      company_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      contact: {
        type: DataTypes.STRING,
        allowNull: false
        },
        cep:{ 
        type: DataTypes.STRING,
        allowNull: false
        },
        address: {
        type: DataTypes.STRING,
        allowNull: false
        },
        neighborhood: {
        type: DataTypes.STRING,
        allowNull: false
        },
        city: {
        type: DataTypes.STRING,
        allowNull: false
        },
        state: {
        type: DataTypes.STRING,
        allowNull: false
        },
        number: {
        type: DataTypes.STRING,
        allowNull: false
        },
        complement: {
        type: DataTypes.STRING,
        allowNull: false
        },
        rh_analyst_name: {
        type: DataTypes.STRING,
        allowNull: false
        },
        supervisor_name: {
        type: DataTypes.STRING,
        allowNull: false
        },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        type: DataTypes.DATE, 
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    
});

module.exports = Company;