const { connection } = require('../config/database');
const { DataTypes, Model } = require('sequelize');

const Permission_role = connection.define('permissions_roles', {
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
    },
    permission_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'permissions',
            key: 'id'
        },
        validate: {
            isInt: {
                msg: 'id do permission inválido'
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
    tableName: 'permissions_roles'
});

module.exports = Permission_role;

