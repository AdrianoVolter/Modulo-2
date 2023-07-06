const { connection } = require('../database/connection')
const { DataTypes } = require('sequelize');
//const User = require('./User.js');
//const Role = require('./Roles.js');

const User_role = connection.define('users_roles', {
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        },
        validate: {
            isInt: {
                msg: 'id do user inválido'
            }
        }
    },
    role_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'roles',
            key: 'id'
        },
        validate: {
            isInt: {
                msg: 'id do role inválido'
            }
        }
    }
}, {
    paranoid: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    underscored: true,
   
});





module.exports = User_role;
