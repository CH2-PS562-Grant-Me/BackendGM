'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Articles', [{
      nama_penerima: '',
      tahun: '',
      beasiswa: '',
      universitas: '',
      ulasan: ''
    },
    {
      nama_penerima: '',
      tahun: '',
      beasiswa: '',
      universitas: '',
      ulasan: ''
    },
    {
      nama_penerima: '',
      tahun: '',
      beasiswa: '',
      universitas: '',
      ulasan: ''
    },
    {
      nama_penerima: '',
      tahun: '',
      beasiswa: '',
      universitas: '',
      ulasan: ''
    },
    ], {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Articles', null, {});
  }
};
