const { Recipient } = require('../models')

//POST data

const addrecipient = async (req, res) => {
     try {
          let data = {
               IPK: req.body.IPK,
               sertifikasi: req.body.sertifikasi,
               sertifikasi_profesional: req.body.sertifikasi_profesional,
               prestasi_nasional: req.body.prestasi_nasional,
               lomba_nasional: req.body.lomba_nasional,
               prestasi_internasional: req.body.prestasi_internasional,
               lomba_internasional: req.body.lomba_internasional,
               magang: req.body.magang,
               kepanitiaan: req.body.kepanitiaan,
          };
          const Data = await Recipient.create(data);
          res.status(201).json({
               status: "Data Berhasil Ditambahkan",
               data: Data,
          });
     } catch (error) {
          res.status(400).json({ message: "Gagal Menambahkan Data", error: error.message });
     }
};


//Get Data by id
const getrecipientbyId = async (req, res) => {
     try {
          let id = req.params.id;
          let data = await Recipient.findOne({ where: { id: id } });
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

//Get All Recipient
const getAllRecipients = async (req, res) => {
     try {
          const data = await Recipient.findAll({})
          res.status(200).json({
               status: 200,
               data: data
          })
     } catch (error) {
          res.status(500).json({ error: error.message })
     }
}

//Update Data
const updaterecepient = async (req, res) => {
     try {
          const id = req.params.id;
          const result = await Recipient.update(req.body, { where: { id: id } });
          if (result > 0) {
               const updatedRecipient = await Recipient.findByPk(id);
               res.status(200).json({
                    status: 200,
                    message: "Data Berhasil di Ubah",
                    data: updatedRecipient
               });
          } else {
               res.status(404).json({ message: "Data tidak ditemukan" });
          }
     } catch (error) {
          console.error(error);
          res.status(400).json({ status: 400, message: "Gagal Mengubah Data", error: error });
     }
};



//delete Data
const deleterecipientbyId = async (req, res) => {
     try {
          const id = req.params.id;
          let recipient = await Recipient.findOne({ where: { id: id } });
          if (recipient) {
               await Recipient.destroy({ where: { id: id } });
               res.status(204).json({
                    message: "Data Berhasil di Hapus",
               });
          } else {
               res.status(404).json({ message: "Data tidak ditemukan" });
          }
     } catch (error) {
          if (error instanceof Sequelize.ValidationError) {
               res.status(400).json({ status: 400, message: "Validation error", error: error });
          } else {
               res.status(500).json({ status: 500, message: "Gagal Menghapus Data", error: error });
          }
     }
};



module.exports = {
     addrecipient,
     getAllRecipients,
     getrecipientbyId,
     updaterecepient,
     deleterecipientbyId
}
