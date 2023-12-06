const express = require('express')
const {Recipient} = require('../models/')


//POST data

const addrecipient = async (req, res) => {
     try {
          let data = {
               IPK: req.body.IPK,
               sertifikasi: req.body.sertifikasi,
               prestasi_internasional: req.body.prestasi_internasional,
               prestasi_top3_nasional: req.body.prestasi_top3_nasional,
               prestasi_nasional: req.body.prestasi_nasional,
               pengalaman_magang: req.body.pengalaman_magang,
               pengalaman_kepanitiaan: req.body.pengalaman_kepanitiaan,
     };
     const Data = await Recipient.create(data); 
     res.status(201).json({
          status: 201,
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
               res.status(200).send(data);
          } else {
               res.status(404).json({ message: "Data tidak ditemukan" });
     }
     } catch (error) {
          res.status(500).json({ message: "Gagal Mendapatkan Data", error: error.message });
     }
};



//Update Data
const updaterecepient = async (req, res) => {
     try {
          let id = req.params.id;
          let data = await Recipient.update(req.body, { where: { id: id } });
          res.status(200).send(data);
     } catch (error) {
          res.status(400).json({ message: "Gagal Mengubah Data", error: error.message });
     }
};


//delete Data
const deleterecipientbyId = async (req, res) => {
     try {
          let id = req.params.id;
          await Recipient.destroy({ where: { id: id } });
          res.status(200).send('Data berhasil terhapus');
     } catch (error) {
          res.status(500).send('Gagal menghapus data: ' + error.message);
     }
};

module.exports={
     addrecipient,
     getrecipientbyId,
     updaterecepient,
     deleterecipientbyId
}
