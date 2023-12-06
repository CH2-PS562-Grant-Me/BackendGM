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
      // define association here
    }
  }
  Recipient.init({
    IPK: DataTypes.FLOAT,
    sertifikasi: DataTypes.FLOAT,
    prestasi_internasional: DataTypes.FLOAT,
    prestasi_top3_nasional: DataTypes.FLOAT,
    prestasi_nasional: DataTypes.FLOAT,
    penagalaman_magang: DataTypes.FLOAT,
    pengalaman_kepanitiaan: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Recipient',
  });
  
  return Recipient;
};