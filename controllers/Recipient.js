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
const updaterecepient = async (req, res) => {
     try {
          const id = req.params.id;
          const result = await Recipient.update(req.body, { where: { id: id } });
          if (result > 0) {
               const updatedRecipient = await Recipient.findByPk(id);
               res.status(200).json({
                    status: 200,
                    data: updatedRecipient  
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
const deleterecipientbyId = async (req, res) => {
     try {
          const id = req.params.id; 
          let recipent = await Recipient.findOne({ where: { id: id } });
          if (recipent) {
               await Recipient.destroy({ where: { id: id } });
               res.status(200).json({ message: "Data berhasil terhapus"});
          } else {
               res.status(404).json({ message: "Data tidak ditemukan" });
          }
     } catch (error) {
          res.status(500).json({ status: 400, message: "Gagal Menghapus Data", error: error});
     }
};


module.exports={
     addrecipient,
     getrecipientbyId,
     updaterecepient,
     deleterecipientbyId
}
