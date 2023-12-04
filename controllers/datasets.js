const express = require('express')
const app = express();
const db = require('../models')

const Datasets = db.datasets

//POST data

const adddatasets = async (req,res)=>{
     
     let data ={
          IPK : req.body.IPK,
          sertifikasi : req.body.sertifikasi,
          prestasi_internasional : req.body. prestasi_internasional,
          prestasi_top3_nasional : req.body.prestasi_top3_nasional,
          prestasi_nasional : req.body.prestasi_nasional,
          pengalaman_magang : req.body.pengalaman_magang,
          pengalaman_kepanitiaan: req.body.pengalaman_kepanitiaan
     }

     const Data = await Datasets.create(data)
     res.status(200).send(Data)
}

//Get Data by id
const getdatasetsbyId = async(req, res)=>{
     let id = req.params.id
     let dataset = await Datasets.findOne({where : {id:id}})
     res.status(200).send(dataset)
}


//Update Data
const updatedatasets = async(req, res)=>{
     let id = req.params.id
     let dataset = await Datasets.update(req.body,{where : {id:id}})
     res.status(200).send(dataset)
}

//delete Data
const deletedatabyId = async(req, res)=>{
     let id = req.params.id
     await Datasets.destroy({where : {id:id}})
     res.status(200).send('Data berhasil terhapus')
}
module.exports={
     adddatasets,
     getdatasetsbyId,
     updatedatasets,
     deletedatabyId
}
