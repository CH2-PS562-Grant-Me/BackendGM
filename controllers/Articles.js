const { Article } = require('../models')

//add
const addarticle = async (req, res) => {
     try {
          let article = {
               NamaPenerima: req.body.NamaPenerima,
               TahunMenerima: req.body.TahunMenerima,
               NamaBeasiswa: req.body.NamaBeasiswa,
               Universitas: req.body.Universitas,
               Ulasan: req.body.Ulasan,
               Sumber: req.body.Sumber
          };
          const data = await Article.create(article);
          res.status(201).json({
               status: 201,
               error: false,
               message: "Berhasil Menambahkan Data",
               data: data,
          });
     } catch (error) {
          res.status(400).json({
               status: 400, 
               error: true, 
               message: "Gagal Menambahkan Data", 
               error: error.message 
          });
     }
};

// Get All
const getAllarticle= async(req,res)=>{
     try{
          let data = await Article.findAll({})
          res.status(200).json({
               status: 200,
               error: false,
               data: data
          })
     } catch (error){
          res.status(500).json({
               Status:500,
               error: true,
               message:"Gagal Mendapatkan Data",
               error: error.message})
     }
}

module.exports = {
     addarticle,
     getAllarticle
}
