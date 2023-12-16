'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Recipient.hasOne(models.Scholarship)
    }
  }
  Recipient.init({
    IPK: DataTypes.FLOAT,
    sertifikasi: DataTypes.FLOAT,
    prestasi_internasional: DataTypes.FLOAT,
    prestasi_top3_nasional: DataTypes.FLOAT,
    prestasi_nasional: DataTypes.FLOAT,
    pengalaman_magang: DataTypes.FLOAT,
    pengalaman_kepanitiaan: DataTypes.FLOAT,
    id_scholarship: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Recipient',
  });
  return Recipient;
};