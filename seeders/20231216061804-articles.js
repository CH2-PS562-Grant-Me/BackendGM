'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Articles', [{
      nama_penerima: 'Hanny Rafiqoh',
      tahun: '2018/2019',
      beasiswa: 'Beasiswa Djarum',
      universitas: 'Universitas Pasundan Bandung',
      ulasan: 'Djarum Beasiswa Plus tidak hanya memberikan bantuan dana beasiswa senilai Rp. 750.000/bulan selama 1 tahun tapi juga memberikan hal yang sangat berguna bagi pengembangan individu melalui berbagai pelatihan soft skill yang tidak kita temui di yayasan beasiswa lainnya yaitu berupa pelatihan Character Building, Leadership Development dan Nation Building”.',
      sumber: "https://kumparan.com/hanny-rafiqoh/djarum-beasiswa-plus-pahitnya-kegagalan-manisnya-keberhasilan-1sLEeHYMmjq/3",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nama_penerima: 'Nyayu Rohaya Tridanisa',
      tahun: '',
      beasiswa: 'Beasiswa Sampoerna',
      universitas: 'Sampoerna University Student',
      ulasan: 'This scholarship has truly transformed my life and my familys. The word thank you is not enought ',
      sumber: 'https://www.sampoernafoundation.org/scholarship/',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nama_penerima: 'Alifia Detasyani Hersanti',
      tahun: '2021',
      beasiswa: 'Beasiswa Unggulan',
      universitas: 'Universitas Negeri Makassar',
      ulasan: "Sebagai informasi, benefit yang ditawarkan dari Beasiswa Unggulan tidak main-main. Mulai dari seluruh biaya pendidikan selama kuliah akan ditanggung langsung oleh Kemendikbud. Selain itu, penerima beasiswa ini juga akan mendapatkan bantuan biaya hidup. Untuk jenjang S1, uang saku yang diberikan mencapai Rp 1,4 juta per bulan. Tidak hanya itu, penerima Beasiswa Unggulan juga berhak mendapat bantuan pengadaan buku selama kuliah Jadi kalau di total (benefit Beasiswa Unggulan) semuanya bisa sampai ratusan juta Mau kamu nggak punya prestasi, nggak PD sama prestasi atau apa pun yang kamu punya di dalam diri kamu, kapabilitas yang kamu punya.",
      sumber:"https://www.detik.com/jogja/kota-pelajar/d-7049422/cerita-fia-dapat-beasiswa-unggulan-kemendikbud-ristek-sempat-ingin-menyerah",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nama_penerima: 'Diana Wulan Ningrum',
      tahun: '2023',
      beasiswa: 'Beasiswa BSI',
      universitas: 'Universitas Airlangga',
      ulasan: 'Program BSI Scholarship bukan hanya tentang mendapatkan dana pendidikan. Ini adalah kesempatan untuk mengembangkan diri, berkontribusi pada masyarakat, dan berkenalan dengan individu hebat',
      sumber:'https://unair.ac.id/kisah-inspiratif-awardee-bsi-scholarship-mengubah-hidup-melalui-prestasi/',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nama_penerima: 'Rifky Adha',
      tahun: '2019',
      beasiswa: 'Beasiswa Tanoto Foundation',
      universitas: 'Universitas Riau',
      ulasan: 'Menerima beasiswa Tanoto Foundation ini seperti merasa beban yang sangat berat telah terangkat dari pundak saya dan orang tua saya. Di samping tunjangan biaya kuliah, saya mendapat bantuan untuk membeli buku-buku perkuliahan dan alat penunjang perkuliahan',
      sumber:'https://www.tanotofoundation.org/id/news/rifky-adha-sosok-teladan-yang-berjuang-dalam-kesederhanaan/',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nama_penerima: 'Syakira PuterI',
      tahun: '',
      beasiswa: 'Beasiswa APERTI BUMN',
      universitas: 'Institut Teknologi (IT) PLN ',
      ulasan: 'Nilai beasiswa APERTI BUMN yang kami berikan selama tiga tahun terakhir berjumlah Rp1,6 Miliar. Untuk tahun ini, kami mengalokasikan Rp360 Juta untuk para penerima beasiswa',
      sumber:'https://www.detik.com/edu/edutainment/d-6780490/kisah-syakira-siswa-madrasah-yang-lolos-beasiswa-aperti-bumn-di-it-pln',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nama_penerima: 'Rifky Adha',
      tahun: '2019',
      beasiswa: 'Beasiswa Tanoto Foundation',
      universitas: 'Universitas Riau',
      ulasan: 'Menerima beasiswa Tanoto Foundation ini seperti merasa beban yang sangat berat telah terangkat dari pundak saya dan orang tua saya. Di samping tunjangan biaya kuliah, saya mendapat bantuan untuk membeli buku-buku perkuliahan dan alat penunjang perkuliahan',
      sumber:'https://www.tanotofoundation.org/id/news/rifky-adha-sosok-teladan-yang-berjuang-dalam-kesederhanaan/',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nama_penerima: 'Rafa Salama',
      tahun: '2021',
      beasiswa: 'Beasiswa Baznas',
      universitas: 'UIN Syarif Hidayatullah Jakarta',
      ulasan: 'Menurut saya Baznas itu bukan hanya tempat untuk mengumpulkan dan menyalurkan dana ZISWAF, tetapi juga menjadi tempat bersilaturahmi dan menambah ilmu pengetahuan." jelas Rafa sebagai salah satu penerima Beasiswa Cendekia Baznas (BCB) dalam wawancara online. ',
      sumber:'https://www.kompasiana.com/nadillas3386/61c9161706310e6c802aa0f2/kisah-inspiratif-penerima-beasiswa',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nama_penerima: 'Muh Aswad Ashan',
      tahun: '2021',
      beasiswa: 'Beasiswa Pertamina Sobat Bumi',
      universitas: 'Universitas Hasanuddin',
      ulasan: 'Ada berbagai kegiatan bagi penerima beasiswa ini, misalnya Green Action dan pengabdian masyarakat yang menjadi passion saya selain aspek akademik di kampus,” ujar Aswad.',
      sumber:'https://www.unhas.ac.id/sepuluh-mahasiswa-unhas-terima-beasiswa-sobat-bumi-2021/?lang=id',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nama_penerima: 'Januar Firmansyah',
      tahun: '2021',
      beasiswa: 'Beasiswa Beasiswa Paragon',
      universitas: 'Universitas Airlangga',
      ulasan: 'Alasan lain saya mendaftar beasiswa ini yaitu ingin mengembangkan potensi diri saya salah satunya dalam bidang kepemimpinan. Selain itu, saya tertarik pada bidang sosial dan inovasi bangsa berupa social project yang bisa didapat dari beasiswa ini. Penerima akan mendapatkan program antara lain leadership hingga career preparation',
      sumber:'https://news.unair.ac.id/2021/10/04/cerita-januar-terima-beasiswa-paragon-scholarship-2021/?lang=id',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nama_penerima: 'Gista Leorika',
      tahun: '2018',
      beasiswa: 'Beasiswa CIMB Niaga',
      universitas: 'Universitas Lampung',
      ulasan: 'Ada berbagai kegiatan bagi penerima beasiswa ini, misalnya Green Action dan pengabdian masyarakat yang menjadi passion saya selain aspek akademik di kampus,” ujar Aswad.',
      sumber:'https://www.saibumi.com/artikel-123739-kegigihan-anak-petani-kopi-dari-daerah-lampung-baratdapat-selesaikan-kuliah-hingga-sarjana-dari-beasiswa-cimb-niaga.html',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nama_penerima: 'Karin Nabilah',
      tahun: '2021',
      beasiswa: 'Beasiswa Bank Indonesia',
      universitas: 'Universitas Sumatera Utara ',
      ulasan: 'Semua orang wajib mencoba, terutama mahasiswa yang universitasnya dinaungi oleh Bank Indonesia. Bukan uangnya saja yang harus kita raih, tapi juga ada banyak kegiatan-kegiatan yang sangat bermanfaat untuk kita. Selain itu, Beasiswa GenBI ini berbeda dengan Beasiswa pada lainnya. Kita tidak hanya diberikan uang secara cuma-cuma, tapi juga harus memberikan feedback untuk mereka. Karna kegiatan yang kita lakukan mendapat feedback alhasil ketika ingin melakukan sesuatu kita juga semangat. Ada pertanggungjawaban dari pihak tersebut untuk membayari uang kuliah kita, jadi kita tuh gak memberatkan orangtua kita lagi',
      sumber: 'https://suarausu.or.id/pengalaman-lulus-beasiswa-bank-indonesia/',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Articles', null, {});
  }
};