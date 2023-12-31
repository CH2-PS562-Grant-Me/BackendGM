const { Scholarship } = require('../models');

//POST data
const addscholarship = async (req, res) => {
     try {
          let inputData = {
               nama: req.body.nama,
               tenggat_waktu: req.body.tenggat_waktu,
               jenis_beasiswa: req.body.jenis_beasiswa,
               deskripsi: req.body.deskripsi,
               link: req.body.link,
          };
          const createdScholarship = await Scholarship.create(inputData);
          res.status(201).json({
               status: "Data Berhasil Ditambahkan",
               error: false,
               data: createdScholarship,
          });
     } catch (error) {
          console.error("Gagal Menambahkan Data:", error);
          res.status(400).json({ error: true, message: "Gagal Menambahkan Data", status: error.message });
     }
};


//GET ALL Scholarship
const getAllscholarship = async (req, res) => {
     try {
          let data = await Scholarship.findAll({})
          res.status(200).json({
               error: false,
               data: data
          })
     } catch (error) {
          res.status(500).json({ error:true, Error: error.message })
     }
}

//Get Data by id
const getscholarshipbyId = async (req, res) => {
     try {
          let id = req.params.id;
          let data = await Scholarship.findOne({ where: { id: id } });
          if (data) {
               res.status(200).json({
                    status: 200,
                    error: false,
                    data: data
               });
          } else {
               res.status(404).json({error:true, message: "Data tidak ditemukan" });
          }
     } catch (error) {
          res.status(500).json({ error:true, message: "Gagal Mendapatkan Data", status: error.message });
     }
};


//Update Data
const updatescholarsip = async (req, res) => {
     try {
          const id = req.params.id;
          const result = await Scholarship.update(req.body, { where: { id: id } });
          if (result > 0) {
               const updatedScholarship = await Scholarship.findByPk(id);
               res.status(200).json({
                    message: "Data Berhasil di Ubah",
                    error: false,
                    data: updatedScholarship
               });
          } else {
               res.status(404).json({error:true, status: 404, message: "Data tidak ditemukan" });
          }
     } catch (error) {
          console.error(error);
          res.status(400).json({ error:true, status: 400, message: "Gagal Mengubah Data", status: error });
     }
};


//delete Data
const deletescholarshipbyId = async (req, res) => {
     try {
          const id = req.params.id;
          let scholarship = await Scholarship.findOne({ where: { id: id } });
          if (scholarship) {
               await scholarship.destroy({ where: { id: id } });
               res.status(204).json({
                    message: "Data Berhasil di Hapus",
                    error: false,
               });
          } else {
               res.status(404).json({error:true, message: "Data tidak ditemukan" });
          }
     } catch (error) {
          res.status(500).json({error:true, status: 400, message: "Gagal Menghapus Data", status: error });
     }
};

module.exports = {
     addscholarship,
     getAllscholarship,
     getscholarshipbyId,
     updatescholarsip,
     deletescholarshipbyId,
}

