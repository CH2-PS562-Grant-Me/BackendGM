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
      nama_penerima: {
        allowNull: false,
        type: Sequelize.STRING
      },
      tahun: {
        type: Sequelize.STRING
      },
      beasiswa: {
        allowNull: false,
        type: Sequelize.STRING
      },
      universitas: {
        allowNull: false,
        type: Sequelize.STRING
      },
      ulasan: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      sumber: {
        allowNull: false,
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