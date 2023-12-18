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
        allowNull: false,
        type: Sequelize.FLOAT
      },
      sertifikasi: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      prestasi_internasional: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      prestasi_top3_nasional: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      prestasi_nasional: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      pengalaman_magang: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      pengalaman_kepanitiaan: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      id_scholarship: {
        type: Sequelize.INTEGER
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