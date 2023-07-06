const { connection } = require('../config/database');
const { DataTypes, Model } = require('sequelize');

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
    }
}, {
    paranoid: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    underscored: true,
    freezeTableName: true,
    tableName: 'roles'
});

module.exports = Role;
