const { connection } = require('../database/connection')
const { DataTypes } = require('sequelize');
//const User_role = require('./Users_roles.js');

const Role = connection.define('roles', {
    description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'campo descrição não pode ser vazio'
            },
            len: {
                args: [3, 50],
                msg: 'campo descrição deve ter entre 3 e 50 caracteres'
            }
        }
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'campo data de criação não pode ser vazio'
            }
        }
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'campo data de atualização não pode ser vazio'
            }
        }
    }
});




module.exports = Role;
