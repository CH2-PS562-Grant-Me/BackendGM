'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Scholarship extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Scholarship.hasOne(models.Recipient)
    }
  }
  Scholarship.init({
    nama: DataTypes.STRING,
    tanggal_pendaftaran: DataTypes.DATE,
    jenis_beasiswa: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
    img_url: DataTypes.STRING,
    link: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Scholarship',
  });
  return Scholarship;
};