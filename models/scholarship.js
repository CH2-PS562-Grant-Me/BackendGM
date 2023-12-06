'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class scholarship extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  scholarship.init({
    nama: DataTypes.STRING,
    tenggat_waktu: DataTypes.DATE,
    jenis_beasiswa: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
    link: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'scholarship',
  });
  return scholarship;
};