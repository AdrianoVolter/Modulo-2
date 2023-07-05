'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('companies', {
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      } ,

      cnpj:{
        type: Sequelize.STRING,
        allowNull: false
      },
      company_name: {  
        type: Sequelize.STRING,
        allowNull: false
      },
      contact: {
          type: Sequelize.STRING,
          allowNull: false
      },
      cep:{ 
        type: Sequelize.STRING,
        allowNull: false
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false
      },
      neighborhood: {
        type: Sequelize.STRING,
        allowNull: false
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false
      },
      state: {
        type: Sequelize.STRING,
        allowNull: false
      },
      number: {
        type: Sequelize.STRING,
        allowNull: false
      },
      complement: {
        type: Sequelize.STRING,
        allowNull: false
      },
      rh_analyst_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      supervisor_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

    });   

  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable('companies');
     
  }
};
