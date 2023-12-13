'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Scholarship', [{
      nama: 'Djarum',
      jenis_beasiswa: 'Pemerintah',
      tenggat_waktu: new Date('2023-12-31'),
      deskripsi: 'Beasiswa untuk mahasiswa berprestasi dengan IPK tinggi.',
      link: 'https://djarumbeasiswaplus.org/',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nama: 'Karya Salemba Empat',
      jenis_beasiswa: 'Organisasi',
      tenggat_waktu: new Date('2023-12-15'),
      deskripsi: 'Beasiswa untuk mahasiswa yang membutuhkan bantuan keuangan.',
      link: 'http://www.beasiswa.or.id/index.php/',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nama: 'Bank Indonesia',
      jenis_beasiswa: 'Pemerintah',
      tenggat_waktu: new Date('2023-12-15'),
      deskripsi: 'Beasiswa untuk mahasiswa yang membutuhkan bantuan keuangan.',
      link: 'https://beasiswa.ub.ac.id/informasi-pendaftaran-beasiswa-bank-indonesia-tahun-2023/',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nama: 'CIMB Niaga',
      jenis_beasiswa: 'Pemerintah',
      tenggat_waktu: new Date('2023-12-15'),
      deskripsi: 'Beasiswa untuk mahasiswa yang membutuhkan bantuan keuangan.',
      link: 'https://kejarmimpi.id/beasiswacimbniaga/',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nama: 'Pertamina Sobat Bumi',
      jenis_beasiswa: 'Bantuan Pemerintah',
      tenggat_waktu: new Date('2023-12-15'),
      deskripsi: 'Beasiswa untuk mahasiswa yang membutuhkan bantuan keuangan.',
      link: 'https://beasiswa.pertaminafoundation.org/home/beasiswa/sobatbumi',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nama: 'Tanoto Foundation',
      jenis_beasiswa: 'Prestasi',
      tenggat_waktu: new Date('2023-12-15'),
      deskripsi: 'Beasiswa untuk mahasiswa yang membutuhkan bantuan keuangan.',
      link: 'https://www.tanotofoundation.org/id/teladan2023/',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nama: 'BSI Scholarship',
      jenis_beasiswa: 'Pemerintah',
      tenggat_waktu: new Date('2023-12-15'),
      deskripsi: 'Beasiswa untuk mahasiswa yang membutuhkan bantuan keuangan.',
      link: 'https://didikumat.org/bsi-scholarship',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nama: 'Beasiswa BAZNAS',
      jenis_beasiswa: 'Pemerintah',
      tenggat_waktu: new Date('2023-12-15'),
      deskripsi: 'Beasiswa untuk mahasiswa yang membutuhkan bantuan keuangan.',
      link: 'https://beasiswa.baznas.go.id/',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nama: 'BRILiaN Scholarship',
      jenis_beasiswa: 'Pemerintah',
      tenggat_waktu: new Date('2023-12-15'),
      deskripsi: 'Beasiswa untuk mahasiswa yang membutuhkan bantuan keuangan.',
      link: 'http://bbri.id/scholarship2023',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nama: 'Beasiswa Unggulan',
      jenis_beasiswa: 'Pemerintah',
      tenggat_waktu: new Date('2023-12-15'),
      deskripsi: 'Beasiswa untuk mahasiswa yang membutuhkan bantuan keuangan.',
      link: 'https://beasiswaunggulan.kemdikbud.go.id/',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nama: 'Beasiswa DataPrint',
      jenis_beasiswa: 'Pemerintah',
      tenggat_waktu: new Date('2023-12-15'),
      deskripsi: 'Beasiswa untuk mahasiswa yang membutuhkan bantuan keuangan.',
      link: 'https://beasiswadataprint.com/',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nama: 'Beasiswa Bakti BCA',
      jenis_beasiswa: 'Pemerintah',
      tenggat_waktu: new Date('2023-12-15'),
      deskripsi: 'Beasiswa untuk mahasiswa yang membutuhkan bantuan keuangan.',
      link: 'https://www.bca.co.id/en/tentang-bca/CSR/Bakti-BCA/solusi-cerdas/beasiswa-bakti-bca',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nama: 'KJMU',
      jenis_beasiswa: 'Prestasi',
      tenggat_waktu: new Date('2023-12-15'),
      deskripsi: 'Beasiswa untuk mahasiswa yang membutuhkan bantuan keuangan.',
      link: 'https://www.jakarta.go.id/kjmu',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nama: 'Bakti Nusa',
      jenis_beasiswa: 'Bantuan',
      tenggat_waktu: new Date('2023-12-15'),
      deskripsi: 'Beasiswa untuk mahasiswa yang membutuhkan bantuan keuangan.',
      link: 'https://www.baktinusa.id/',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nama: 'XL Future Leader',
      jenis_beasiswa: 'Pemerintah',
      tenggat_waktu: new Date('2023-12-15'),
      deskripsi: 'Beasiswa untuk mahasiswa yang membutuhkan bantuan keuangan.',
      link: 'https://xlfutureleaders.com/',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nama: 'Beasiswa MPM Berbagi',
      jenis_beasiswa: 'Bantuan',
      tenggat_waktu: new Date('2023-12-15'),
      deskripsi: 'Beasiswa untuk mahasiswa yang membutuhkan bantuan keuangan.',
      link: 'https://kuliahdimana.id/index.php/SeputarKampus/detailBeasiswa/101/Beasiswa-MPM-Berbagi',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nama: 'Beasiswa APERTI-BUMN',
      jenis_beasiswa: 'Prestasi',
      tenggat_waktu: new Date('2023-12-15'),
      deskripsi: 'Beasiswa untuk mahasiswa yang membutuhkan bantuan keuangan.',
      link: 'https://admission.ulbi.ac.id/p/jalur-aperti-bumn.html',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Scholarship');
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
