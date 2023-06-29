const {connection} = require('../database/connection');
//const {STRING,DATE} = require('sequelize');
const { DataTypes, Sequelize } = require('sequelize');


const Contract = connection.define('contracts', {
   
    trainee_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'trainees',
            key: 'id'
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
        start_validity: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    end_validity: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        end_validity: Sequelize.literal('CURRENT_TIMESTAMP'),
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

module.exports = Contract;