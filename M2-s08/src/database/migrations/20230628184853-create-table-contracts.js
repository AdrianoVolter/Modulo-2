'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('contracts', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      trainee_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'trainees', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'categories', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      company_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'companies', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      start_validity: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      end_validity: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      remuneration: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      extra: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
    });
  },
  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('contracts');
     
  }
};
