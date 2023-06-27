const {connection} = require('../database/connection');
//const {STRING,DATE} = require('sequelize');
const { DataTypes } = require('sequelize');


const Trainee = connection.define('trainees', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rg: {
        type: DataTypes.STRING,
        unique: true,
      },
      cpf: {
        type: DataTypes.STRING,
        unique: true,
      },
      primary_phone_contact: {
        type: DataTypes.STRING,
      },
      secondary_phone_contact: {
        type: DataTypes.STRING,
      },
      date_birth: {
        type: DataTypes.DATE,
      },
      father_name: {
        type: DataTypes.STRING,
      },
      mother_name: {
        type: DataTypes.STRING,
      },
      have_special_needs: {
        type: DataTypes.BOOLEAN,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updated_at: {
        type: DataTypes.DATE, 
        allowNull: false,
      },
    
});

module.exports = Trainee;