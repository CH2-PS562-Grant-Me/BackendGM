'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Recipients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      IPK: {
        type: Sequelize.FLOAT
      },
      sertifikasi: {
        type: Sequelize.FLOAT
      },
      prestasi_internasional: {
        type: Sequelize.FLOAT
      },
      prestasi_top3_nasional: {
        type: Sequelize.FLOAT
      },
      prestasi_nasional: {
        type: Sequelize.FLOAT
      },
      penagalaman_magang: {
        type: Sequelize.FLOAT
      },
      pengalaman_kepanitiaan: {
        type: Sequelize.FLOAT
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
    await queryInterface.dropTable('Recipients');
  }
};