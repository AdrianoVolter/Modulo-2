const connection = require('../database/connection');
const {STRING,DATE} = require('sequelize');


const Trainees = connection.define('trainees', {
    name: STRING,
    email: STRING,
    rg: STRING,
    cpf: STRING,
    primary_phone_contact: STRING,
    secondary_phone_contact: STRING,    
    date_birth: DATE,
    father_name: STRING,
    mother_name: STRING,
    have_special_needs: STRING,
    created_at: DATE,
    updated_at: DATE
});

module.exports = Trainees;
