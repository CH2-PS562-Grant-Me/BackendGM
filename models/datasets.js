const { sequelize } = require('sequelize')


module.exports = (sequelize, DataTypes)=>{

     const datasets = sequelize.define("datasets",{
          IPK :{
               type : DataTypes.FLOAT,
               allowNull : false
          },
          sertifikasi :{
               type : DataTypes.INTEGER,
               allowNull : false
          },
          prestasi_internasional:{
               type : DataTypes.INTEGER,
               allowNull : false
          },
          prestasi_top3_nasional:{
               type : DataTypes.INTEGER,
               allowNull : false
          },
          prestasi_nasional:{
               type : DataTypes.INTEGER,
               allowNull : false
          },
          pengalaman_magang:{
               type : DataTypes.INTEGER,
               allowNull : false
          },
          pengalaman_kepanitiaan:{
               type : DataTypes.INTEGER,
               allowNull : false
          },
     })

     return datasets;
} 