const express = require('express')
const { Scholarship } = require('../models');
const { getAllRecipients } = require('./Recipient');
const axios = require('axios');


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
               data: createdScholarship,
          });
     } catch (error) {
          console.error("Gagal Menambahkan Data:", error);
          res.status(400).json({ status: "Gagal Menambahkan Data", error: error.message });
     }
};


//GET ALL Scholarship
const getAllscholarship = async (req, res) => {
     try {
          let data = await Scholarship.findAll({})
          res.status(200).json({
               status: 200,
               data: data
          })
     } catch (error) {
          res.status(500).json({ error: error.message })
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
                    data: data
               });
          } else {
               res.status(404).json({ message: "Data tidak ditemukan" });
          }
     } catch (error) {
          res.status(500).json({ message: "Gagal Mendapatkan Data", error: error.message });
     }
};


//Update Data
const updatescholarsip = async (req, res) => {
     try {
          const id = req.params.id;
          const result = await Scholarship.update(req.body, { where: { id: id } });
          if (result > 0) {
               const updatedScholarship = await scholarships.findByPk(id);
               res.status(200).json({
                    message: "Data Berhasil di Ubah",
                    data: updatedScholarship
               });
          } else {
               res.status(404).json({ status: 404, message: "Data tidak ditemukan" });
          }
     } catch (error) {
          console.error(error);
          res.status(400).json({ status: 400, message: "Gagal Mengubah Data", error: error });
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
               });
          } else {
               res.status(404).json({ message: "Data tidak ditemukan" });
          }
     } catch (error) {
          res.status(500).json({ status: 400, message: "Gagal Menghapus Data", error: error });
     }
};

const recomendScholarship = async (req, res) => {
     try {
          const getPredict = await axios.post(process.env.URL_PREDICT, {
               Tag_Beasiswa: Tag_Beasiswa,
               statusCode: statusCode
          })

          const predictScholarship = getPredict.data
          res.json({ predictScholarship })
     }
     catch (error) {
          res.json({
               message: error.message
          })
     }
}

module.exports = {
     addscholarship,
     getAllscholarship,
     getscholarshipbyId,
     updatescholarsip,
     deletescholarshipbyId,
     recomendScholarship
}

