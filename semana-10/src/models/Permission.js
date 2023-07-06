// 'permissions',
// {
//   id: {
//     type: Sequelize.INTEGER,
//     allowNull: false,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   description: {
//     type: Sequelize.STRING,
//     allowNull: false,
//     unique: true
//   },
//   created_at: {
//     type: Sequelize.DATE,
//     allowNull: false,
//   },
//   updated_at: {
//     type: Sequelize.DATE,
//     allowNull: false,
//   },
//   deleted_at: {
//     type: Sequelize.DATE,
//     allowNull: true,
//   },
// }

const { connection } = require('../config/database');
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

