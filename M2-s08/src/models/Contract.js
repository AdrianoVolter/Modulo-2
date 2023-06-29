const {connection} = require('../database/connection');
const { DataTypes, Sequelize } = require('sequelize');
const Trainee = require('./Trainee');

const Contract = connection.define('contracts', {
   
    trainee_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'trainees',
            key: 'id'
        },
        validate: {
            isInt: {
                msg: 'id do trainee inválido'
            }
        }         
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'categories',
            key: 'id'
        }
    },
    company_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'companies',
            key: 'id'
        }
    },
    start_validity: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
            isDate: {
                msg: 'formato de data inválido'
            }
        }
    },
    end_validity: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
            isDate: {
                msg: 'formato de data inválido',
                args: true
            }
        }
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    remuneration: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    extra: {
        type: DataTypes.FLOAT,
        allowNull: false,
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

Contract.belongsTo(Trainee, {foreignKey: 'trainee_id', allowNull: false});

module.exports = Contract;