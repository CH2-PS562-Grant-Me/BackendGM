'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Articles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      NamaPenerima: {
        type: Sequelize.STRING
      },
      TahunMenerima: {
        type: Sequelize.STRING
      },
      NamaBeasiswa: {
        type: Sequelize.STRING
      },
      Universitas: {
        type: Sequelize.STRING
      },
      Ulasan: {
        type: Sequelize.STRING
      },
      Sumber: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Articles');
  }
};