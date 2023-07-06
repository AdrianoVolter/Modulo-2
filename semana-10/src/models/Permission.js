const { connection } = require('../database/connection')
const { DataTypes, Model } = require('sequelize');

const Permission = connection.define('permissions', {
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
    tableName: 'permissions'
});

module.exports = Permission;

