const { connection } = require('../config/database');
const { DataTypes, Model } = require('sequelize');

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
    freezeTableName: true,
    tableName: 'users_roles'
});

module.exports = User_role;
