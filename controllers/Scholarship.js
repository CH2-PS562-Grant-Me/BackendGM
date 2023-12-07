const express = require('express')
const Scholarship = require('../models/scholarship')


//POST data

const addscholarship = async (req, res) => {
     try {
          let scholarship = {
               nama: req.body.nama,
               tenggat_waktu: req.body.tenggat_waktu,
               jenis_beasiswa: req.body.jenis_beasiswa,
               deskripsi: req.body.deskripsi,
               link: req.body.link,
          };
          const data = await Scholarship.create(scholarship);
          res.status(200).send(Scholarship);
     } catch (error) {
          res.status(400).json({ message: "Gagal Menambahkan Data", error: error.message });
     }
};


//Get Data by id
const getscholarshipbyId = async (req, res) => {
     try {
          let id = req.params.id;
          let data = await Scholarship.findOne({ where: { id: id } });
          if (data) {
               res.status(200).send(data);
          } else {
               res.status(404).json({ message: "Beasiswa Tidak Tersedia" });
          }
     } catch (error) {
          res.status(500).json({ message: "Gagal Mendapatkan Beasiswa", error: error.message });
     }
};



//Update Data
const updatescholarsip = async (req, res) => {
     try {
          let id = req.params.id;
          let data = await Scholarship.update(req.body, { where: { id: id } });
          res.status(200).send(data);
     } catch (error) {
          res.status(400).json({ message: "Gagal Mengubah Beasiswa", error: error.message });
     }
};


//delete Data
const deletescholarshipbyId = async (req, res) => {
     try {
          let id = req.params.id;
          await Scholarship.destroy({ where: { id: id } });
          res.status(200).send('Data berhasil terhapus');
     } catch (error) {
          res.status(500).send('Gagal menghapus data: ' + error.message);
     }
};

module.exports = {
     addscholarship,
     getscholarshipbyId,
     updatescholarsip,
     deletescholarshipbyId
}
